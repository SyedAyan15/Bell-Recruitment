import type { CSSProperties } from "react";
import { PROCESS } from "@/lib/content";

// The 5-stage vetting process. Each step except the last draws a connector to the
// next step, with a gold dot that travels along it: horizontal on desktop, vertical
// on mobile. The dot moves one step per second, and each numbered circle pulses as
// the dot arrives (timings in the "Process" section of globals.css). `--step` is the
// step index that the CSS uses to stagger the connectors, dots and pulses.
export default function ProcessSteps() {
  return (
    <div className="process-grid">
      {PROCESS.map((step, i) => (
        <div className="process-step" key={step.title} style={{ "--step": i } as CSSProperties}>
          {i < PROCESS.length - 1 && (
            <span className="process-link" aria-hidden="true">
              <span className="process-dot" />
            </span>
          )}
          <div className="step-num">{i + 1}</div>
          <h4>{step.title}</h4>
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  );
}
