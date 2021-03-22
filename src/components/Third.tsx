import React, { useState, useEffect } from "react";

const useMousePosition = (interval: number) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let lastCalled: number;

    const handleMouseMove = (event: { pageX: number; pageY: number }) => {
      const currentTime = performance.now();
      if (lastCalled && currentTime - lastCalled < interval) return;
      setPosition({ x: event.pageX, y: event.pageY });
      lastCalled = currentTime;
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [interval, setPosition]);

  return position;
};

const Third: React.FC = () => {
  const { x, y } = useMousePosition(50);
  return (
    <div>
      Pos: {x}, {y}
    </div>
  );
};

export default Third;
