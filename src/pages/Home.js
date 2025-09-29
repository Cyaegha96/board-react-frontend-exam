import LoginComponent from "../components/LoginComponent";
import { useState } from "react";
import useAuthStore from "../store/authStore";

const Home = () => {

  const {loginId , isLoggedIn} = useAuthStore();
    return (
        <>
        {isLoggedIn ? <div>로그인되었습니다. 아이디: {loginId} </div>:<LoginComponent/>}
        </>
       
    )
}

export default Home;