import * as React from "react";
import "./Chat.css";
import  * as localizationHelper from "../../utils/localizationHelper";

export interface IChatProps {
  locale?: string;
  isChatResumed: boolean;
}

export interface IChatStates {
  chatIcon: string;
}
export default class Chat extends React.Component<IChatProps, IChatStates> {
  constructor(props: IChatProps){
    super(props);
    this.state={
      chatIcon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1NHB4IiBoZWlnaHQ9IjU0cHgiIHZpZXdCb3g9IjAgMCA1NCA1NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5BcnRib2FyZCAyPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IkFydGJvYXJkLTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9InNtaWxleSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDAwMDAwLCAxNS4wMDAwMDApIiBmaWxsPSIjRkFGN0YzIiBmaWxsLXJ1bGU9Im5vbnplcm8iPiAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ljc1MTUxNTE1LDAuMDM3MTQyODU3MSBMMjUuMTczMzMzMywwLjAzNzE0Mjg1NzEgQzI3LjkzNDc1NzEsMC4wMzcxNDI4NTcxIDMwLjE3MzMzMzMsMi4yNzU3MTkxMSAzMC4xNzMzMzMzLDUuMDM3MTQyODYgTDMwLjE3MzMzMzMsMTcuMSBDMzAuMTczMzMzMywxOS44NjE0MjM3IDI3LjkzNDc1NzEsMjIuMSAyNS4xNzMzMzMzLDIyLjEgTDUuNzUxNTE1MTUsMjIuMSBDMi45OTAwOTE0LDIyLjEgMC43NTE1MTUxNTIsMTkuODYxNDIzNyAwLjc1MTUxNTE1MiwxNy4xIEwwLjc1MTUxNTE1Miw1LjAzNzE0Mjg2IEMwLjc1MTUxNTE1MiwyLjI3NTcxOTExIDIuOTkwMDkxNCwwLjAzNzE0Mjg1NzEgNS43NTE1MTUxNSwwLjAzNzE0Mjg1NzEgWiBNMTAuMzg5Njk3LDkuMDYyODU3MTQgQzExLjIzMDE3MzksOS4wNjI4NTcxNCAxMS45MTE1MTUyLDguMzg5MzY1NDkgMTEuOTExNTE1Miw3LjU1ODU3MTQzIEMxMS45MTE1MTUyLDYuNzI3Nzc3MzcgMTEuMjMwMTczOSw2LjA1NDI4NTcxIDEwLjM4OTY5Nyw2LjA1NDI4NTcxIEM5LjU0OTIyLDYuMDU0Mjg1NzEgOC44Njc4Nzg3OSw2LjcyNzc3NzM3IDguODY3ODc4NzksNy41NTg1NzE0MyBDOC44Njc4Nzg3OSw4LjM4OTM2NTQ5IDkuNTQ5MjIsOS4wNjI4NTcxNCAxMC4zODk2OTcsOS4wNjI4NTcxNCBaIE0yMS41NDk2OTcsOS4wNjI4NTcxNCBDMjIuMzkwMTczOSw5LjA2Mjg1NzE0IDIzLjA3MTUxNTIsOC4zODkzNjU0OSAyMy4wNzE1MTUyLDcuNTU4NTcxNDMgQzIzLjA3MTUxNTIsNi43Mjc3NzczNyAyMi4zOTAxNzM5LDYuMDU0Mjg1NzEgMjEuNTQ5Njk3LDYuMDU0Mjg1NzEgQzIwLjcwOTIyLDYuMDU0Mjg1NzEgMjAuMDI3ODc4OCw2LjcyNzc3NzM3IDIwLjAyNzg3ODgsNy41NTg1NzE0MyBDMjAuMDI3ODc4OCw4LjM4OTM2NTQ5IDIwLjcwOTIyLDkuMDYyODU3MTQgMjEuNTQ5Njk3LDkuMDYyODU3MTQgWiBNMTUuOTY5Njk3LDE2LjA4Mjg1NzEgQzE4LjIxMTg0MjQsMTYuMDgyODU3MSAyMS4wNDI0MjQyLDE0LjA3NzE0MjkgMjAuMDI3ODc4OCwxMy41NzU3MTQzIEMxOS4wMTMzMzMzLDEzLjA3NDI4NTcgMTguMjExODQyNCwxNC4xOTk0OTE0IDE1Ljk2OTY5NywxNC4xOTk0OTE0IEMxMy43Mjc1NTE1LDE0LjE5OTQ5MTQgMTIuOTI2MDYwNiwxMi45NTE5MzcxIDExLjkxMTUxNTIsMTMuNTc1NzE0MyBDMTAuODk2OTY5NywxNC4xOTk0OTE0IDEzLjcyNzU1MTUsMTYuMDgyODU3MSAxNS45Njk2OTcsMTYuMDgyODU3MSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4gICAgICAgICAgICA8cGF0aCBkPSJNMjEuMDY2NzczMywyNC4zNDk0MDg2IEMyMS42MTQ2Mjc5LDI1LjMyMjE4IDIyLjQ5ODI5NywyNS4zMjYxOTE0IDIzLjA0NzE2NjEsMjQuMzQ5NDA4NiBMMjcuMTI5Njk3LDE3LjA4NTcxNDMgTDE2Ljk4NDI0MjQsMTcuMDg1NzE0MyBMMjEuMDY2NzczMywyNC4zNDk0MDg2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+"
    }
  }
  
  public render() {
    return (
      <div className="chat-launcher-display">
      <div id="chat-launcher" className="chat-launcher">
        <div className="chat-spinner">
          <div id="chat-text" className="chat-intro chat-bounce">{localizationHelper.getLocalizationValue("intro", 'en')}</div>
          <div id="chat-icon" className="chat-slideup">
            <img 
              src={this.state.chatIcon}
              alt="Launch Chat"
            />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
