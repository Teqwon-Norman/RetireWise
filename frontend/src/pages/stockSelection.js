import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Button, message, ConfigProvider } from "antd";
import Ticker from "../components/tickerComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/stockSelection.css";

export default function StockSelection() {
  const [size, setSize] = useState("large");
  const [selectedTickers, setSelectedTickers] = useState([]);
  const [tickerInput, setTickerInput] = useState("");
  const navigate = useNavigate();

  const addTicker = async () => {
    if (selectedTickers.length == 5) {
      message.error("You can only add up to 5 tickers.");
      setTickerInput("");
    } else {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/tickers/ticker/${tickerInput}`
        );

        if (response.status === 200) {
          setSelectedTickers([...selectedTickers, tickerInput.toUpperCase()]);
          setTickerInput("");
        } else {
          message.error("Ticker not found. Please try again.");
          setTickerInput("");
        }
      } catch (error) {
        console.error("Error adding ticker:", error);
        message.error("Failed to add ticker. Please try again.");
      }
    }
  };

  const deleteTicker = (index) => {
    const newTickers = [...selectedTickers];
    newTickers.splice(index, 1);
    setSelectedTickers(newTickers);
  };

  return (
    <>
      <div className="stock-selection-page">
        <div className="selection-container">
          <h1 className="selection-page-title">
            Add Stocks To Your <br />
            Retirement Account
          </h1>
          <Input
            size="large"
            placeholder="AAPL, GOOGL, AMZN..."
            prefix={<SearchOutlined />}
            className="search-box"
            value={tickerInput}
            onChange={(e) => setTickerInput(e.target.value)}
          />
          <Button
            type="primary"
            size={size}
            className="add-ticker-button"
            onClick={addTicker}
          >
            Add Ticker
          </Button>
        </div>
        <div className="selected-tickers">
          {selectedTickers.map((ticker, index) => (
            <Ticker key={index} name={ticker} clickHandler={deleteTicker} />
          ))}
        </div>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#0000ff",
            },
          }}
        >
          <Button
            type="primary"
            size={size}
            className="simulate-retirement-button"
            style={{
              background: "#2450d6",
              color: "white",
            }}
            onClick={() =>
              navigate("/retirement-simulator", {
                state: { tickers: selectedTickers },
              })
            }
          >
            Simulate Retirement
          </Button>
        </ConfigProvider>
      </div>
    </>
  );
}
