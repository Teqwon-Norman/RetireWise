import { VscSettings } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";

export default function PlaceHolder() {
  return (
    <>
      <div className="retirement-account-page">
        <div className="buttons-container">
          <div className="setting-container">
            <VscSettings className="settings-icon" />
            <h1 className="icon-label">Filter</h1>
          </div>
          <div className="create-container">
            <IoCreateOutline className="create-icon" />
            <h1 className="icon-label">Create</h1>
          </div>
        </div>
        <div className="posts-container">
          <div className="circle"></div>
          <div className="red-line"></div>
          <h1 className="placeholder-text">Try Creating A New Retirement Account 📈</h1>
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
