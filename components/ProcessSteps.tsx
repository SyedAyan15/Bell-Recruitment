import type { CSSProperties } from "react";
import { PROCESS } from "@/lib/content";

export default function ProcessSteps() {
  return (
    <div className="process-grid">
      {/* Connector line that draws in, with a dot travelling from step 1 to step 5. */}
      <div className="process-track" aria-hidden="true">
        <div className="process-track-fill" />
        <span className="process-dot" />
      </div>
      {PROCESS.map((step, i) => (
        <div className="process-step" key={step.title} style={{ "--step": i } as CSSProperties}>
          <div className="step-num">{i + 1}</div>
          <h4>{step.title}</h4>
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  );
}
