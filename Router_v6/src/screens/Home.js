import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
    const [readSearchParams, setSearchParams] = useSearchParams()

    // URL이 http://localhost:3000/?geo=123일 경우
    console.log(readSearchParams)  // URLSearchParams {size: 1}
    console.log(readSearchParams.has('geo')) // true (URL이 geo라는 키를 갖고 있는지 여부를 반환함.)
    console.log(readSearchParams.get('geo')) // 123 (geo키의 값을 반환함.)

  setTimeout(() => {
        setSearchParams({
            day:'today',
            tomorrow:'1234'
        })
    }, 3000)  // 3초후에 URL이 http://localhost:3000/?day=today&tomorrow=1234로 변경됨.

    return(
    <div>
        <h1>Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                     <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>))}
        </ul>
    </div>
    )
}
export default Home;