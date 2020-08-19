import React from "react";
import "./App.css";
import ScrollableTab from "./components/ScrollableTab";
import TabContent from "./components/TabContent";
import Dialog from "./components/Dialog/dialog";

class App extends React.Component {
  state = {
    dialog: false,
    currentTabIndex: 0,
    tabs: ["Tab 1", "Tab 2", "Tab 3"],
  };

  handleDialogClose = (e) => {
    this.setState({ dialog: false });
  };

  handleDialogOpen = (e) => {
    this.setState({ dialog: true });
  };

  handleDialogCreate = (tabName) => {
    this.setState((prevState) => {
      if (prevState.tabs.length < 10) {
        return {
          ...prevState,
          tabs: [...prevState.tabs, tabName],
          dialog: false,
        };
      }
      return { ...prevState, dialog: false };
    });
  };

  removeAtIndex = (arr, index) => {
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
      if (i !== index) {
        ret.push(arr[i]);
      }
    }
    return ret;
  };

  handleNext = (e) => {
    this.setState((prevState) => {
      if (prevState.currentTabIndex + 1 < prevState.tabs.length) {
        return { ...prevState, currentTabIndex: prevState.currentTabIndex + 1 };
      }
      return { ...prevState };
    });
  };

  handlePrev = (e) => {
    this.setState((prevState) => {
      if (prevState.currentTabIndex - 1 >= 0) {
        return { ...prevState, currentTabIndex: prevState.currentTabIndex - 1 };
      }
      return { ...prevState };
    });
  };

  handleRemoveTab = (tabIndex) => {
    this.setState((prevState) => {
      const newTabs = this.removeAtIndex(prevState.tabs, tabIndex);
      return {
        ...prevState,
        tabs: [...newTabs],
      };
    });
  };

  handleOnSelectTab = (tabIndex) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        currentTabIndex: tabIndex,
      };
    });
  };

  render() {
    const { tabs, currentTabIndex, dialog } = this.state;
    return (
      <div>
        <header className="App-header">
          <div className="App-bar">
            <h6>Demo Container</h6>
          </div>
        </header>
        <ScrollableTab
          tabs={tabs}
          selectedTabIndex={currentTabIndex}
          onSelect={this.handleOnSelectTab}
          onRemove={this.handleRemoveTab}
          onNext={this.handleNext}
          onPrev={this.handlePrev}
          onAdd={this.handleDialogOpen}
        />
        <TabContent>
          <section>
            <h2>Tab 1 Content</h2>
          </section>
        </TabContent>
        {dialog && (
          <Dialog
            title="Add Tab"
            onCancel={this.handleDialogClose}
            onCreate={this.handleDialogCreate}
          />
        )}
      </div>
    );
  }
}

export default App;
