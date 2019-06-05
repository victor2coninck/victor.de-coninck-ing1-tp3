import { ADD_MESSAGE } from "../constants/messages";

let nextMessageId = 0;

export const add = (text, userName) => ({
  type: ADD_MESSAGE,
  id: nextMessageId++,
  text,
  userName,
  date: new Date().toLocaleDateString()
});
