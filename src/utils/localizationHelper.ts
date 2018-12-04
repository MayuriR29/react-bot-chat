export function getLocalizationValue(textKey: string, clientLanguage: string) {
    try {
        if (!clientLanguage) {clientLanguage = "en"};
        const textValues = localizationStrings[textKey];
        if (textValues[clientLanguage]) {
          return textValues[clientLanguage];
        }
        const languageOption="en";
        return textValues[languageOption]
      }
      catch (e) {
        // console.log("no values for given text key");
        return textKey
      }
}
const localizationStrings = {
    "intro": {
      "en": "May I help you",
      "zh-hk": "有什麽可以幫到你？"
    },
    
    "notice": {
      "en": "We constantly strive to improve our services so we can support your day to day needs in the best ways possible. Let our virtual assistant help you with your queries in just a few clicks.",
      "zh-hk": "為讓客戶可享用卓越及貼心的銀行服務，我們會繼續努力不懈地優化我們的服務。現就讓【虛擬助手】幫助你今日的查詢。基於網絡安全的理由，請不要在此輸入個人資料或賬戶資料。"
    },
    "textbox_msg": {
      "en": "Type your message...",
      "zh-hk": "請輸入你的查詢或信息"
    },
    "textbox_msg2": {
      "en": "SEND",
      "zh-hk": "傳送"
    },
    "chat_header2": {
        "en": "LIVE CHAT",
        "zh-hk": "缐上對話（Not available at this phase)"
      },
    "chat_header": {
        "en": "VIRTUAL ASSISTANT",
        "zh-hk": "虛擬助手"
      },
    "help_msg": {
      "en": "Hi. How may I help you?",
      "zh-hk": "有什麽可以幫到你？"
    },
    "action_info": {
      "en": "You can ask things like:",
      "zh-hk": "你可以查詢："
    },
    "faq": {
      "en": "How do I open an account with DBS?",
      "zh-hk": "Should be under Top5 Q"
    },
    "faq2": {
      "en": "What documents are required for account opening?",
      "zh-hk": "Should be under Top5 Q"
    },
    "faq3": {
      "en": "Tell me more about your credit cards",
      "zh-hk": "Should be under Top5 Q"
    },
    "faq4": {
      "en": "Where are the nearest ATMs and branches?",
      "zh-hk": "Should be under Top5 Q"
    },
    "faq5": {
      "en": "Chat with our officer",
      "zh-hk": "與客戶服務主任缐上對話"
    },
    "server_status": {
      "en": "Sorry, the system encountered a momentary technical difficulty. Please select the options below to continue.",
      "zh-hk": "由於系統繁忙，請揀選以下選項繼續查詢"
    },
    "help_msg2": {
      "en": "Help & Support",
      "zh-hk": "協助及支援"
    },
    "action_msg": {
      "en": "Contact Me",
      "zh-hk": "與我聯絡"
    },
    "livechat_status": {
      "en": "CONNECTING...",
      "zh-hk": "連接中….."
    },
    "livechat_status2": {
      "en": "Authentication successful!",
      "zh-hk": "驗證成功"
    },
    "agent_info": {
      "en": "Please hold for the next available agent to serve you.",
      "zh-hk": "請稍等，我們的客戶服務主任會很快處理你的查詢"
    },
    "livechat_status3": {
      "en": "Back to Virtual Assistant",
      "zh-hk": "返回虛擬助手"
    },
    "agent_info2": {
      "en": "Oops! All our agents are busy. Please select one of the options below.",
      "zh-hk": "唔好意思，我們的缐路比較繁忙，請揀選以下選項繼續查詢"
    },
    "action_msg2": {
      "en": "Call Me Later",
      "zh-hk": "請稍後再與我聯絡"
    },
    "internet_status": {
      "en": "CONNECTION FAILED...",
      "zh-hk": "連接錯誤"
    },
    "livechat_action": {
      "en": "Are you sure you want to end the chat?",
      "zh-hk": "確定需要終止查詢/對話？"
    },
    "livechat_action2": {
      "en": "End Chat",
      "zh-hk": "終止查詢/對話"
    },
    "livechat_action3": {
      "en": "OK",
      "zh-hk": "好的"
    },
    "livechat_status4": {
      "en": "Chat session has been ended due to technical error.",
      "zh-hk": "由於系統問題，是次查詢/對話已終止"
    },
    "livechat_status5": {
      "en": "Chat session has been ended.",
      "zh-hk": "是次查詢/對話已終止"
    },
    "server_status2": {
      "en": "Our Virtual Assistant is currently unavailable.",
      "zh-hk": "唔好意思，虛擬助手暫時未能提供服務"
    },
    "action_info2": {
      "en": "Please select the options below to continue.",
      "zh-hk": "請揀選以下選項繼續查詢"
    },
    "error_info": {
      "en": "Some functionalities are not supported in browser with private mode setting.",
      "zh-hk": "瀏覽器上的私人設定可能會未能支援個別功能"
    },
    "error_info2": {
      "en": "Please change your browser setting before you proceed.",
      "zh-hk": "請更改你的瀏覽器設定，以便繼續查詢/對話"
    }
  };