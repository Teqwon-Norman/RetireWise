import { VscSettings } from "react-icons/vsc";
import { FileAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function PlaceHolder() {
  const navigate = useNavigate();

  return (
    <>
      <div className="retirement-account-page">
      <div className="buttons-container">
      <div className="setting-container">
        <VscSettings className="settings-icon" />
        <h1 className="icon-label">Filter</h1>
      </div>
      <div className="create-container">
        <FileAddOutlined
          onClick={() => navigate("/stock-selection")}
          className="create-icon"
        />
        <h1 className="icon-label">Create</h1>
      </div>
    </div>
        <div className="posts-container">
          <div className="circle"></div>
          <div className="red-line"></div>
          <h1 className="placeholder-text">
            Try Creating A New Retirement Account 📈
          </h1>
        </div>
        <div className="posts-container">
          <div className="circle"></div>
          <div className="red-line"></div>
        </div>
        <div className="posts-container">
          <div className="circle"></div>
          <div className="red-line"></div>
        </div>
        <div className="posts-container">
          <div className="circle"></div>
          <div className="red-line"></div>
        </div>
        <div className="posts-container">
          <div className="circle"></div>
          <div className="red-line"></div>
        </div>
        <div className="posts-container">
          <div className="circle"></div>
          <div className="red-line"></div>
        </div>
        <div className="posts-container">
          <div className="circle"></div>
          <div className="red-line"></div>
        </div>
        <div className="posts-container">
          <div className="circle"></div>
          <div className="red-line"></div>
        </div>
      </div>
    </>
  );
}
