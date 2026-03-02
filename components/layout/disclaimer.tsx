import { complianceLines } from '@/lib/content/site';

export function DisclaimerBar({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-md border border-accent/40 bg-muted/40 p-3 text-xs text-mutedForeground">
      {compact ? complianceLines.short : `${complianceLines.legalAdvice} ${complianceLines.relationship} ${complianceLines.confidential}`}
    </div>
  );
}
