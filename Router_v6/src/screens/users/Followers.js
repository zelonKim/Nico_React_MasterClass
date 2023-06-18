import { useOutletContext } from "react-router-dom"

/* function Followers() {
    const ctx = useOutletContext() // Outlet컴포넌트의 Context프로퍼티를 전달해줌.
    console.log(ctx) // 주소 표시줄이 http://localhost:3000/users/1/followers일 경우, 콘솔창에 {nameOfMyUser: 'nico'}가 출력됨.

    return <h1>Followers</h1>
}
export default Followers
 */

////////////////////////

function Followers() {
    const {nameOfMyUser} = useOutletContext()
    return <h1>This is {nameOfMyUser}`s followers</h1>
}
export default Followers