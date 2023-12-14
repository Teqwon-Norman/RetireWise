import React from "react";
import ChartComponent from "../components/ChartComponent";
import { FloatButton, Card, ConfigProvider } from "antd";
import { useLocation } from "react-router-dom";

export default function RetirementSimulation() {
  // On Click method for FAB
  const location = useLocation();
  const stateData = location.state ? location.state.tickers : null;
  const onClick = () => {};

  console.log(stateData);

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
        <FloatButton onClick={onClick} />
      </ConfigProvider>
    </div>
  );
}
