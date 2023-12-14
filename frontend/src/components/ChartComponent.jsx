import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import axios from "axios";

const ChartComponent = ({ containerID, tickers }) => {
  const chartContainerRef = useRef(null);
  const chart = useRef(null);
  const [chartData, setChartData] = useState([]);
  const [accountBalance, setAccountBalance] = useState(0);

  useEffect(() => {
    const getHistoricalStockData = async () => {
      const response = await axios.post(
        `http://127.0.0.1:5000/historical_data/tickers`,
        {
          data: tickers,
        }
      );

      if (response.status === 200) {
        setChartData(response.data.chart_data);
        setAccountBalance(response.data.balance);
      }
    };

    if (chartData.length === 0) {
      getHistoricalStockData();
    }

    const parentDivWidth = chartContainerRef.current.parentElement.clientWidth;

    chart.current = createChart(chartContainerRef.current, {
      width: parentDivWidth * 0.5,
      height: 525,
    });

    chartContainerRef.current.style.width = "75%";

    const lineSeries = chart.current.addLineSeries({ color: "#FF5733" });

    lineSeries.setData(chartData);

    chartData.sort((a, b) => b.time - a.time);

    chart.current.timeScale().fitContent();

    // Cleanup when the component unmounts
    return () => {
      if (chart.current !== null) {
        chart.current.remove();
      }
    };
  }, [chartData]);

  return <div className="rounded-lg" ref={chartContainerRef} />;
};

export default ChartComponent;
