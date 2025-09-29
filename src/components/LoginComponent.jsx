import { useState } from "react"
import axios from "axios"
import styles from "./components.module.css"
import useAuthStore from "../store/authStore"
import {Link} from "react-router-dom"

const LoginComponent = () => {

    const login = useAuthStore((state) => state.login);

    const [loginInfo, setLoginInfo] = useState({
        id: '', pw: ''
    })

    const handleChange = (e) => {
        const {name , value} = e.target;
        setLoginInfo(prev =>({
            ...prev, [name]:value
        }))
    }


    const handleLoggin = () =>{
        axios.get(`http://10.5.5.2/member/login?id=${loginInfo.id}&pw=${loginInfo.pw}`)
        .then(e=>{
            console.log(e);
            if(e.data){
                login(loginInfo.id);
            }
            
        })

    }

    return(
    <div className={styles.LoginComponent}>
        <input type="text" name="id" placeholder="id를 입력해주세요" value={loginInfo.id} onChange={handleChange} />
        <input type="text" name="pw" placeholder="pw를 입력해주세요" value={loginInfo.pw} onChange={handleChange} />
        <button onClick={handleLoggin}>로그인</button>
        <Link to="/joinPage"><button>회원가입</button></Link>
    </div>
    )
}

export default LoginComponent;