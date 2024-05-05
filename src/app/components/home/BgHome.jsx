import React, { useEffect, useRef } from "react";
import "./BgHome.css";

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Function for updating the canvas size
    const updateCanvasSize = () => {
      canvas.height = canvas.parentElement.offsetHeight;
      canvas.width = canvas.parentElement.offsetWidth;
    };

    // Update the canvas size initially
    updateCanvasSize();

    const binary = "01";
    const columns = canvas.width / 2;
    const drops = [];

    for (let i = 0; i < columns; i++) drops[i] = 1;

    function draw() {
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#142144";
      context.font = "14px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        context.fillText(text, i * 10, drops[i] * 10);

        if (drops[i] * 10 > canvas.height && Math.random() > 0.975)
          drops[i] = 0;

        drops[i]++;
      }
    }

    const intervalId = setInterval(draw, 33);

    // Add an event listener to resize the canvas when the window size changes
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      clearInterval(intervalId);
      // Remove the event listener when the component is dismantled
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} id="matrixBackground" className="-z-20" />;
};

export default MatrixBackground;
