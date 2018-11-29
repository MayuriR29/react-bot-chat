import * as React from "react";
import "./Chat.css";

export interface IChatProps {
  locale?: string;
}

export interface IChatStates {
  chatIcon: string;
}
export default class Chat extends React.Component<IChatProps, IChatStates> {
  constructor(props: IChatProps){
    super(props);
    this.state={
      chatIcon:
        "data:image/png;base64,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"
      
    }
  }
  public render() {
    return (
      <div id="chat-launcher" className="chat-launcher">
        <div className="chat-spinner">
          <div className="chat-intro chat-bounce">May I help you?</div>
          <div id="chat-icon" className="chat-slideup">
            <img
              src={this.state.chatIcon}
              alt="Launch Chat"
            />
          </div>
        </div>
      </div>
    );
  }
}
