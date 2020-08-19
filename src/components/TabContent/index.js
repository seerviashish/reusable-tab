import React from "react";
import "./style.css";

/*
  Here I have created functional component just for demo.
*/
const TabContent = ({ children, value, index }) => {
  return value === index && <main className="tab-content">{children}</main>;
};

export default TabContent;
