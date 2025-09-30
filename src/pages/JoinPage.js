
import {useState} from "react";
import  {useNavigate}  from "react-router-dom";
import SignUpComponent from "../components/SignUpComponent";
const JoinPage = () => {

const navigate = useNavigate();

const url = "/member/join";
const pageName = "회원가입"
    
const signUpBtn = <button type="submit">회원가입</button>
   const [form,setForm] = useState({
            id:"",
            pw:"",
            pwConfirm:"",
            name:"",
            phone:"",
            email:"",
            zone_code:"",
            address1:"",
            address2:"",
            joinDate:""
        });

    return (
        <>
       
    <SignUpComponent url={url} btns={signUpBtn}  form={form}  setForm ={setForm} pageName={pageName} />
        </>
        
       
    )
}

export default JoinPage;