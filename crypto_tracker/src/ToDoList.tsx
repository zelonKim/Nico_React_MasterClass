
/* 
function ToDoList() {
    const [ toDo, setToDo ] = useState("")
    const [ toDoError, setToDoError] = useState("")
  
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget: {value} } = event;
    setToDo(value)
    setToDoError("")
  }
  
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (toDo.length < 10) {
        return setToDoError("To do should be longer")
      }
      console.log("submit")
  }
  
    return (
      <div>
        <form onSubmit={ onSubmit }>
          <input onChange={ onChange } value={ toDo } placeholder="write" />
          <button> Add </button>
           { toDoError !== "" ? toDoError: null }
        </form>
      </div>
    )
  }
  export default ToDoList 
*/



//////////////////////////////



/* 
import { useForm } from 'react-hook-form'

function ToDoList() {
    const { register, watch, handleSubmit, formState, setValue } = useForm()

    console.log(register("nationality")) // {name: 'nationality', onChange: ƒ, onBlur: ƒ, ref: ƒ}
   
    console.log(watch()) // 인풋창에 korea를 입력하면 콘솔창에 {nationality: 'korea'}가 출력됨.  // (form의 input의 입력값들의 변화를 관찰함.)

    const onValid = (inputData: any) => { // 인풋창에 korea를 입력하고, "Submit 버튼을 누르면"
        console.log(inputData) // 콘솔창에 {nationality: 'korea'}가 출력되고,
        setValue("nationality", " ")  // 인풋창은 비워짐.
    }   

    console.log(formState.errors) 
    // 인풋창에 아무것도 입력하지 않고, Submit버튼을 누르면 콘솔창에 {nationality: {type:'required', message:'', ref:input}}이 출력됨. 
    // 인풋창에 kor를 입력하고, Submit버튼을 누르면 콘솔창에 {nationality: {type:'minLength', message:'', ref:input}}이 출력됨. 

    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
              <input {...register("nationality", { required: true, minLength: 5 })} placeholder="nationality" /> 
              <button> Submit </button>
            </form>
        </div>
    )
}
export default ToDoList;  
*/





////////////////////////////////


/*  import { useForm } from 'react-hook-form'

type IForm = {
    email: string;
    errors:{
        email: {
            message: string;
        }
    }
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    samePassword: string;
    extraError?: string
}


function ToDoList() {
    const { register, handleSubmit, formState, setError } = useForm<IForm>({defaultValues:{ email: "@naver.com"}})

    const onValid = (data: IForm) => {
        if(data.password !== data.samePassword) { 
            setError("samePassword", { message: "Passwords are not same" }, { shouldFocus: true })
        }
        //setError("extraError", { message: "Server offline" })
        
    }
    
    console.log(formState.errors) 

    return (
        <div>
            <form  style={{display:"flex", flexDirection:"column"}}  onSubmit={handleSubmit(onValid)}>
                
                <input {...register( "email", { required: "please write your email" , pattern: { value: /^[A-Za-z0-9._%+-]+@naver.com$/, message:"Only write Naver email" } } )} placeholder="Email" />
                    <span>{formState.errors?.email?.message}</span>

                <input {...register( "firstName", { required: "please write your firstName", validate: { noNico: (value) => value.includes("fuck") ? "can`t contain 'fuck'": true}} )} placeholder="FirstName" />
                    <span>{formState.errors?.firstName?.message}</span>

                <input {...register( "lastName", { required: "please write your lastName" } )} placeholder="LastName" />
                    <span>{formState.errors?.lastName?.message}</span>

                <input {...register( "userName", { required: "please write your userName", minLength:{ value:5, message:"Your userName is too short" } } )} placeholder="UserName" />
                    <span>{formState.errors?.userName?.message}</span>

                <input {...register( "password", { required: "please write your password", minLength:{ value:5, message:"Your password is too short" } } )} placeholder="Password" />
                    <span>{formState.errors?.password?.message}</span>

                <input {...register( "samePassword", { required: "please write your samePassword", minLength: 5 } )} placeholder="samePassword" /> 
                <span>{formState.errors?.samePassword?.message}</span>

              <button> Submit </button>
              <span>{formState.errors?.extraError?.message}</span>
            </form>
        </div>
    )
}
export default ToDoList;  */



/////////////////////



import {useForm} from 'react-hook-form'
import { atom, useRecoilState } from 'recoil'

const toDoState = atom({
    key: "toDo",
    default: [],
})

interface IForm {
    toDo: string
}

interface IToDo {
    text: string;
    category: "DONE" | "DOING" | "TO_DO"
}

function ToDoList() {
    const [value, modFn] = useRecoilState(toDoState)

    const { register, handleSubmit, setValue } = useForm<IForm>()

    const handleValid = (data: IForm) => {
        console.log("add to do", data.toDo)
        setValue("toDo", "")
    }

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <form onSubmit = {handleSubmit(handleValid)}>
                <input
                    {...register("toDo", {
                        required: "Please write your To Do",
                    })}
                    placeholder="Write To Do"
                />
                <button> Add </button>
            </form>
            <ul> </ul>
        </div>
    )
}
export default ToDoList