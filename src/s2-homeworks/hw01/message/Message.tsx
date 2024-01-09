import React from "react";
import s from "./Message.module.css";
import { MessageType } from "../HW1";
// нужно создать правильный тип вместо any
export type MessagePropsType = {
  //any

  message: MessageType;
};

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
  return (
    <div id={"hw1-message-" + props.message.id} className={s.message}>
      <div className={s.imageAndText}>
        <div className={s.text}>
          <div id={"hw1-name-" + props.message.id} className={s.name}>
            <span> {props.message.user.name}</span>
          </div>

          <pre id={"hw1-text-" + props.message.id} className={s.messageText}>
            <p> {props.message.message.text}</p>
          </pre>
        </div>

        <img
          src={props.message.user.avatar}
          id={"hw1-avatar-" + props.message.id}
          alt="#"
        />
      </div>

      <div id={"hw1-time-" + props.message.id} className={s.time}>
        <p>{props.message.message.time}</p>
      </div>
    </div>
  );
};

export default Message;
