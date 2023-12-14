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
        `http://127.0.0.1:5000/historical_data/tickers`, {
          data: tickers
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
    // const chartOptions = { layout: { background: { type: "solid", color: 'transparent' } } };

    chart.current = createChart(chartContainerRef.current, {
      width: parentDivWidth * 0.5,
      height: 525,
    });

    chartContainerRef.current.style.width = "75%";

    const lineSeries = chart.current.addLineSeries({ color: "#FF5733" });

    lineSeries.setData(chartData);

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
