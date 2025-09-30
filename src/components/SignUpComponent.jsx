import { useState } from "react";
import styles from "./components.module.css"
import api from '../utils/api';
import  {useNavigate}  from "react-router-dom";

const SignUpComponent = ({url,btns, form, setForm,pageName})=>{

    const navigate = useNavigate();

  const handleSubmit = (e) => {
      console.log(form);
      e.preventDefault();
      api.post(url, form)
      .then(resp=>(console.log(resp)))
      .then(()=>{if(pageName=="회원가입"){
        navigate("/")}
      })
    };

        const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    return(
       
        <div className={styles.formContent}>
         
 <form onSubmit={handleSubmit}>
   <h2>{pageName}</h2>
        <div>
          <label>아이디 : </label>
          <input type="text" name="id" value={form.id} onChange={handleChange} readOnly={pageName=="마이페이지"} />
        </div>

        {pageName=="회원가입"&& <><div>
          <label>비밀번호 : </label>
          <input
            type="password"
            name="pw"
            value={form.pw}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>비밀번호 확인 : </label>
          <input
            type="pw"
            name="pwConfirm"
            value={form.pwConfirm}
            onChange={handleChange}
          />
        </div> </>}

        <div>
          <label>이름 : </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>전화번호 : </label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>이메일 : </label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>우편번호 : </label>
          <input
            type="text"
            name="zone_code"
            value={form.zone_code}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>주소 : </label>
          <input
            type="text"
            name="address1"
            value={form.address1}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>상세주소 : </label>
          <input
            type="text"
            name="address2"
            value={form.address2}
            onChange={handleChange}
          />
        </div>
        {btns}
      </form>
        </div>

    )
}

export default SignUpComponent