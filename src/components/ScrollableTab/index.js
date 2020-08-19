import React from "react";
import LeftIcon from "./left";
import RightIcon from "./right";
import AddIcon from "./add";
import ClearIcon from "./clear";
import "./style.css";

const ScrollableTab = (props) => {
  console.log(props);
  const { tabs } = props;
  return (
    <div className="tab-bar">
      <button className="tab-action-button">
        <LeftIcon />
      </button>
      <div className="tab-container">
        {tabs.map((tabData, index) => {
          return (
            <div className="tab-item" key={index}>
              <div
                className={index === 1 ? "tab-button tab-active" : "tab-button"}
              >
                <span>{tabData.name}</span>
                <button className="tab-clear-button">
                  <ClearIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button className="tab-action-button">
        <RightIcon />
      </button>
      <button className="tab-action-button light-dark">
        <AddIcon />
      </button>
    </div>
  );
};

export default ScrollableTab;
