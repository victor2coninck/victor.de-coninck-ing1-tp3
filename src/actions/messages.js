import { ADD_MESSAGE } from "../constants/messages";

let nextMessageId = 0;
let options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour:"2-digit", minute:"2-digit", second:"2-digit"};
export const add = (text) => ({
  type: ADD_MESSAGE,
  id: nextMessageId++,
  text,
  userName:"Usernem",
  date: new Date().toLocaleDateString("de-DE", options)
});
