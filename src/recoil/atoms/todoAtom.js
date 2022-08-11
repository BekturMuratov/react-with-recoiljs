import { atom } from "recoil";

export const todoListAtom = atom({
  key: "todoListState",
  default: [],
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((e) => {
        console.debug("Current Tasks", e);
      });
    }
  ]
});
