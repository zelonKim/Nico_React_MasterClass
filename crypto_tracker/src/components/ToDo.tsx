/* import { IToDo } from "./atoms"

function ToDo({text, category}: IToDo) {

    const onClick = (newCategory: IToDo["category"]) => {
        console.log(newCategory)
    }

    return (
    <li> 
        <span> {text} </span>
        {category !== "DOING" && 
            (<button onClick={() => onClick("DOING")}> Doing </button>
        )}
        {category !== "TO_DO" &&
            (<button onClick={() => onClick("TO_DO")}> ToDo </button>
        )}
        {category !== "DONE" &&
            (<button onClick={() => onClick("DONE")}> Done </button>
        )}
    </li>
    )
}
export default ToDo */



////////////////


import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms"


function ToDo({ text, category, id }: IToDo) {

    const setToDos = useSetRecoilState(toDoState)

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => { //  Doing 버튼을 클릭하면
        const {currentTarget:{ name }} = event;

        setToDos(oldToDos => {
            console.log(oldToDos) // 콘솔창에 {text: 'a', id: 1687584832579, category: 'TO_DO'}
           
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            console.log(targetIndex) // 0
           
            const newToDo = {text, id, category: name }
            console.log(newToDo) // {text: 'a', id: 1687585291173, category: 'DOING'}이 출력됨.

            return oldToDos
        })
    }

    return (
    <li> 
        <span> {text} </span>

        {category !== "DOING" && 
            (<button name="DOING" onClick={onClick}> Doing </button>
        )}
        {category !== "TO_DO" &&
            (<button name="TO_DO" onClick={onClick}> ToDo </button>
        )}
        {category !== "DONE" &&
            (<button name="DONE" onClick={onClick}> Done </button>
        )}
    </li>
    )
}
export default ToDo