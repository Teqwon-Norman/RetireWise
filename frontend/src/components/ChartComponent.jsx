import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const ChartComponent = ({ containerID }) => {
  const chartContainerRef = useRef(null);
  const chart = useRef(null);

  useEffect(() => {
    const parentDivWidth = chartContainerRef.current.parentElement.clientWidth;

    chart.current = createChart(chartContainerRef.current, {
      width: parentDivWidth * 0.6,
      height: 300,
    });

    chartContainerRef.current.style.width = "75%";

    const lineSeries = chart.current.addLineSeries({ color: "#FF5733" });

    const data = [
      { value: 0, time: 1642425322, color: "#2962FF" },
      { value: 8, time: 1642511722 },
      { value: 10, time: 1642598122 },
      { value: 20, time: 1642684522 },
      { value: 3, time: 1642770922 },
      { value: 43, time: 1642857322 },
      { value: 41, time: 1642943722 },
      { value: 43, time: 1643030122 },
      { value: 56, time: 1643116522 },
      { value: 46, time: 1643202922 },
    ];

    lineSeries.setData(data);

    chart.current.timeScale().fitContent();

    // Cleanup when the component unmounts
    return () => {
      if (chart.current !== null) {
        chart.current.remove();
      }
    };
  }, [containerID]);

  return <div ref={chartContainerRef} />;
};

export default ChartComponent;
