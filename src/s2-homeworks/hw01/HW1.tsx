import React from "react";
import Message from "./message/Message";
import MessageSender from "./message-sender/MessageSender";
import s2 from "../../s1-main/App.module.css";
import FriendMessage from "./friend-message/FriendMessage";
import avatar from "./avatar.png";

/*
 * 1 - описать тип MessageType
 * 2 - описать тип MessagePropsType в файле Message.tsx
 * 3 - в файле Message.tsx отобразить приходящие данные
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - сделать стили в соответствии с дизайном
 * */

// нужно создать правильный тип вместо any
export type MessageType = {
  //any
  id: number;
  user: UserType;
  message: SinglMessageType;
};

export type UserType = {
  avatar: string;
  name: string;
};
export type SinglMessageType = {
  text: string;
  time: string;
};
// структуру объекта не менять
export const message0: MessageType = {
  id: 0,
  user: {
    avatar: avatar, // можно менять
    name: "Ivan Ivanov", // можно менять
  },
  message: {
    text: "Hi, I'm glad to haer you! How are yoy doing?", // можно менять
    time: "22:00", // можно менять
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar, // можно менять
    name: "Serega", // можно менять
  },
  message: {
    text: "I'm glad to hear you to! It's Ok! I'm fine!!!", // можно менять
    time: "22:10", // можно менять
  },
};

const HW1 = () => {
  return (
    <div id={"hw1"} className={s2.hwWrapper}>
      <div className={s2.hwTitle}>Hometask № 1</div>

      <div className={s2.hw}>
        {/*проверка отображения (не менять)*/}
        <div>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>

        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message} />
      </div>
    </div>
  );
};

export default HW1;
