import LoginComponent from "../components/LoginComponent";
import { useState } from "react";
import useAuthStore from "../store/authStore";
import axios from "axios";

const Home = () => {

  const {loginId , isLoggedIn} = useAuthStore();

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = ()=>{
    axios.post("http://10.5.5.2/member/logout").then(logout());
  }

    return (
        <>
        {isLoggedIn ? <div>로그인되었습니다. 아이디: {loginId} <button onClick={handleLogout}>로그아웃</button></div>:<LoginComponent/>}
        </>
       
    )
}

export default Home;