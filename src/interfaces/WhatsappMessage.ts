export interface WhatsappMessage {
    id: {
      fromMe: boolean;
      remote: string;
      id: string;
      _serialized: string;
    };
    body: string;
    type: string;
    t: number;
    notifyName: string;
    from: string;
    to: string;
    self: string;
    ack: number;
    isNewMsg: boolean;
    star: boolean;
    kicNotified: boolean;
    recvFresh: boolean;
    isFromTemplate: boolean;
    pollInvalidated: boolean;
    isSentCagPollCreation: boolean;
    latestEditMsgKey: null | string;
    latestEditSenderTimestampMs: null | number;
    broadcast: boolean;
    mentionedJidList: string[];
    groupMentions: any[];
    isVcardOverMmsDocument: boolean;
    isForwarded: boolean;
    hasReaction: boolean;
    productHeaderImageRejected: boolean;
    lastPlaybackProgress: number;
    isDynamicReplyButtonsMsg: boolean;
    isMdHistoryMsg: boolean;
    stickerSentTs: number;
    isAvatar: boolean;
    lastUpdateFromServerTs: number;
    requiresDirectConnection: boolean;
    invokedBotWid: null | string;
    links: any[];
  }
  