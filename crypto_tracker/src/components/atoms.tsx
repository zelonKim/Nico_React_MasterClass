import { atom } from "recoil";

export interface IToDo {
    text: string;
    id: number;
    category: "DONE" | "DOING" | "TO_DO"
}

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
})