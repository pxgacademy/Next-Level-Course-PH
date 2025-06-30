import SectionContainer from "@/components/SectionContainer";
import { useRef } from "react";

export default function HoldButton() {
  const intervalRef = useRef<number | null>(null);

  const handleMouseDown = () => {
    // first run for 1 time
    triggerAction();

    // then start interval
    intervalRef.current = window.setInterval(() => {
      triggerAction();
    }, 200);
  };

  const handleMouseUpOrLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const triggerAction = () => {
    console.log("Triggered!");
  };

  return (
    <SectionContainer>
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Hold Me
      </button>
    </SectionContainer>
  );
}
