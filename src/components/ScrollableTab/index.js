import React from "react";
import LeftIcon from "./left";
import RightIcon from "./right";
import AddIcon from "./add";
import ClearIcon from "./clear";
import "./style.css";

const ScrollableTab = (props) => {
  const {
    tabs,
    onSelect,
    onRemove,
    selectedTabIndex,
    onPrev,
    onNext,
    onAdd,
  } = props;

  const handleOnSelect = (tabId) => (e) => {
    onSelect(tabId);
  };

  const handleRemove = (tabId) => (e) => {
    e.stopPropagation();
    onRemove(tabId);
  };

  return (
    <div className="tab-bar">
      <button
        className={`tab-action-button ${
          selectedTabIndex === 0 ? "hidden" : ""
        }`}
        onClick={onPrev}
      >
        <LeftIcon />
      </button>
      <div className="tab-container">
        {tabs.map((tab, index) => {
          return (
            <div
              className="tab-item"
              key={index}
              onClick={handleOnSelect(index)}
            >
              <div
                className={
                  index === selectedTabIndex
                    ? "tab-button tab-active"
                    : "tab-button"
                }
              >
                <span>{tab}</span>
                <button
                  className="tab-clear-button"
                  onClick={handleRemove(index)}
                >
                  <ClearIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className={`tab-action-button ${
          selectedTabIndex === tabs.length - 1 ? "hidden" : ""
        }`}
        onClick={onNext}
      >
        <RightIcon />
      </button>
      <button className="tab-action-button light-dark" onClick={onAdd}>
        <AddIcon />
      </button>
    </div>
  );
};

export default ScrollableTab;
