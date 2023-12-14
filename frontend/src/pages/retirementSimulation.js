import React from "react";
import ChartComponent from "../components/ChartComponent";
import { FloatButton, Card, ConfigProvider } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RetirementSimulation() {
  // On Click method for FAB
  const location = useLocation();
  const stateData = location.state ? location.state.tickers : null;
  const navigate = useNavigate();

  const saveRetirementSimulation = async () => {
    const balance = localStorage.getItem("balance");
    const profit = localStorage.getItem("profit");

    await axios.post(`http://127.0.0.1:5000/retirement/accounts/${localStorage.getItem("user-id")}`, {
      tickers: stateData,
      balance,
      profit,
    });

    localStorage.removeItem("balance");
    localStorage.removeItem("profit");
    navigate("/retirement-accounts");
  };

  return (
    <div className="w-screen h-screen py-12 px-36 bg-[#C8C8C8]">
      <h1 className="text-center text- text-2xl font-bold mb-14">
        Retirement Simulation
      </h1>
      <div className="flex space-x-4">
        <ChartComponent containerID="firstContainer" tickers={stateData} />
        <Card>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Card>
      </div>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            controlHeightLG: 75,
            fontSizeIcon: 15,
          },
        }}
      >
        <FloatButton onClick={saveRetirementSimulation} />
      </ConfigProvider>
    </div>
  );
}
