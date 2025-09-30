import { useState } from "react"
import axios from "axios"
import styles from "./components.module.css"
import useAuthStore from "../store/authStore"
import {Link} from "react-router-dom"

axios.defaults.withCredentials = true;

const LoginComponent = () => {

    const login = useAuthStore((state) => state.login);

    const [loginInfo, setLoginInfo] = useState({
        id: '', pw: ''
    })  
    
    const {loginId , isLoggedIn} = useAuthStore();
    
      const logout = useAuthStore((state) => state.logout);
    
      const handleLogout = ()=>{
        axios.post("http://10.5.5.1/member/logout").then(logout());
      }
    

    const handleChange = (e) => {
        const {name , value} = e.target;
        setLoginInfo(prev =>({
            ...prev, [name]:value
        }))
    }


    const handleLoggin = () =>{

        axios.post(`http://10.5.5.1/member/login`, loginInfo, { withCredentials: true })
        .then(e=>{
          
            if(e.data.status==="success"){
                login(e.data.loginId);
            }else{
                
                alert("로그인에 실패했습니다.")
            }
            
        })

    }

    

    const handleDeleteMember = () => {
  const confirmed = window.confirm("정말 회원탈퇴 하시겠습니까?");

  if (!confirmed) {
    return; // 사용자가 취소를 누르면 아무 것도 하지 않음
  }

  axios.delete(`http://10.5.5.1/member/${loginId}`, { withCredentials: true })
    .then((e) => {
      if (e.data.status === "success") {
        console.log("회원탈퇴 완료");
        alert(e.data.message);
        logout(loginId);
      } else {
        console.log("회원탈퇴 실패");
        alert(e.data.message);
      }
    })
    .catch(error => {
      console.error(error);
    });
};

    return (
  isLoggedIn ? (
    <div className={styles.LoginComponent}>
      로그인되었습니다. 아이디: {loginId}
      <button onClick={handleLogout}>로그아웃</button>
       <button onClick={handleDeleteMember}>회원탈퇴</button>
    </div>
  ) : (
    <div className={styles.LoginComponent}>
      <input
        type="text"
        name="id"
        placeholder="id를 입력해주세요"
        value={loginInfo.id}
        onChange={handleChange}
      />
      <input
        type="password"
        name="pw"
        placeholder="pw를 입력해주세요"
        value={loginInfo.pw}
        onChange={handleChange}
      />
      <button onClick={handleLoggin}>로그인</button>
      <Link to="/joinPage">
        <button>회원가입</button>
      </Link>
    </div>
  )
);

}

export default LoginComponent;