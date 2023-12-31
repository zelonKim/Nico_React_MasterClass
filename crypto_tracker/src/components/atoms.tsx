import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To do": [],
    Doing: [],
    Done: [],
  },
});

/* export const minuteState = atom({
    key: "minutes",
    default: 0,
})

export const hourSelector = selector<number>({
    key: "hours",
    get: ({ get }) => {
        const minutes = get(minuteState) // get(아톰 변수명)으로 atom의 상태값을 가져옴.
        return minutes / 60
    },
    set: ({ set }, newValue) => {
        const minutes = Number(newValue) * 60 
        set(minuteState, minutes) // set(아톰 변수명, 업데이트할 값)으로 atom의 상태값을 업데이트 함.
    }
}) */

/////////////////////

/* type categories = "DONE" | "DOING" | "TO_DO"

    export interface IToDo {
        text: string;
        id: number;
        category: categories
    }

    export const categoryState = atom<categories>({
    key: "category",
    default: "TO_DO"
}) 



export enum Categories{
    "TO_DO",
    "DOING",
    "DONE"
} */

/*  
export interface IToDo {
    text: string;
    id: number;
    category: Categories
}


export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO
})
 */

/* export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
}) */

/* export const toDoSelector = selector({
    key:"toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState)
        return toDos.length;
    }
}) 
 */

/* export const toDoSelector = selector({
    key:"toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState)
        return [
                toDos.filter(toDo => toDo.category === "TO_DO"),
                toDos.filter(toDo => toDo.category === "DOING"),
                toDos.filter(toDo => toDo.category === "DONE")
            ]
    }
})  */

/* export const toDoSelector = selector({
    key:"toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState)
        const category = get(categoryState)
        
        return toDos.filter((toDo) => toDo.category === category)
       
       if(category === "TO_DO") 
            return toDos.filter(toDo => toDo.category === "TO_DO")
        if(category === "DOING") 
            return toDos.filter(toDo => toDo.category === "DOING")
        if(category === "DONE") 
            return toDos.filter(toDo => toDo.category === "DONE") 
    }
}) 
 */
