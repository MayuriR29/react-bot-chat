import * as React from "react";
import Chat from "./components/chat/Chat";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Chat isChatResumed={false}/>
      </div>
    );
  }
}

export default App;
