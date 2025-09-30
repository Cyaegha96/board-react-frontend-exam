import styles from "../layout/signUp.module.css";
import SignUpComponent from "../components/SignUpComponent";
import {useEffect, useState} from "react";
import api from '../utils/api';

const MyPage = () => {

    const pageName = "마이페이지"

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

useEffect(() => {
  api.get("/member/mypage").then(e => {
    console.log(e);
    setForm(e.data.memberInfo);
  });
}, []);

 
  const url = "/member/update";

  const updateBtn = <div><button type="submit">수정</button><button type="submit">취소</button></div>

    return(
        <>
          <SignUpComponent url={url} btns={updateBtn} form={form} setForm ={setForm} pageName={pageName}  />
        </>
    )

}

export default MyPage;