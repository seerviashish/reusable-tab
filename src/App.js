import React from "react";
import "./App.css";
import ScrollableTab from "./components/ScrollableTab";
import TabContent from "./components/TabContent";

class App extends React.Component {
  state = {
    tabs: [
      {
        id: 1,
        name: "Tab 1",
      },
      {
        id: 2,
        name: "Tab 2",
      },
      {
        id: 3,
        name: "Tab 3",
      },
      {
        id: 4,
        name: "Tab 4",
      },
      {
        id: 5,
        name: "Tab 5",
      },
      {
        id: 6,
        name: "Tab 6",
      },
      {
        id: 7,
        name: "Tab 7",
      },
      {
        id: 8,
        name: "Tab 8",
      },
      {
        id: 9,
        name: "Tab 9",
      },
      {
        id: 10,
        name: "Tab 10",
      },
    ],
  };

  handleRemoveTab = (tabId) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        tabs: {
          ...prevState.tabs.filter((tabData) => tabData.id !== tabId),
        },
      };
    });
  };

  render() {
    const { tabs } = this.state;
    return (
      <div>
        <header className="App-header">
          <div className="App-bar">
            <h6>Demo Container</h6>
          </div>
        </header>
        <ScrollableTab tabs={tabs} removeTabs={this.handleRemoveTab} />
        <TabContent>
          <section>
            <h2>Tab 1 Content</h2>
          </section>
        </TabContent>
      </div>
    );
  }
}

export default App;
