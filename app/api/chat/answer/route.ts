import { NextResponse } from 'next/server';
import { env } from '@/lib/env';
import { getClientIp } from '@/lib/security/request';
import { rateLimit } from '@/lib/security/rate-limit';

const refusalTriggers = ['guarantee', 'predict outcome', 'exact settlement', 'legal advice'];

const staticResponse = {
  answer: 'General information: timelines can be short and facts matter. For legal advice about your specific case, call or text us now.',
  mode: 'static'
};

export async function POST(request: Request) {
  const ip = getClientIp();
  const limiter = rateLimit(`chat-answer:${ip}`, 15, 60_000);
  if (!limiter.ok) {
    return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
  }

  const body = (await request.json()) as { question?: string };
  const question = (body.question || '').slice(0, 600);

  if (!question) {
    return NextResponse.json({ error: 'Question required.' }, { status: 400 });
  }

  const lower = question.toLowerCase();
  if (refusalTriggers.some((term) => lower.includes(term))) {
    return NextResponse.json({
      answer: 'I can provide only general information, not legal advice or outcome predictions. Please contact the firm for case-specific guidance.',
      mode: 'refusal'
    });
  }

  if (!env.llmEnabled || !env.openaiKey) {
    return NextResponse.json(staticResponse);
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.openaiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.2,
      messages: [
        {
          role: 'system',
          content:
            'You are a legal marketing website assistant. Provide general information only. Do not provide legal advice, deadlines, or outcome predictions. In every response remind user no attorney-client relationship is formed and avoid confidential details.'
        },
        { role: 'user', content: question }
      ]
    })
  });

  if (!response.ok) {
    return NextResponse.json(staticResponse);
  }

  const data = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };

  const answer = data.choices?.[0]?.message?.content?.slice(0, 800) || staticResponse.answer;
  return NextResponse.json({ answer, mode: 'llm' });
}
