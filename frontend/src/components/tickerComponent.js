import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Ticker({ index, name, clickHandler }) {
  const [size] = useState("large");

  return (
    <>
      <div className="ticker-selection">
        <div className="ticker-text-container">
          <h1 className="ticker-text">{name}</h1>
        </div>
        <Button
          type="primary"
          icon={<DeleteOutlined />}
          size={size}
          onClick={() => clickHandler(index)}
        />
      </div>
    </>
  );
}
