import styles from "../layout/signUp.module.css";
import {useState} from "react";
import  {useNavigate}  from "react-router-dom";
import axios from "axios";
import api from '../utils/api';
import SignUpComponent from "../components/SignUpComponent";
const JoinPage = () => {

const navigate = useNavigate();

const url = "/member/join";
    
const signUpBtn = <button type="submit">회원가입</button>

    return (
        <>
       
    <SignUpComponent url={url} btns={signUpBtn}/>
        </>
        
       
    )
}

export default JoinPage;