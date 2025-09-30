import styles from "../layout/signUp.module.css";
import {useState} from "react";
import  {useNavigate}  from "react-router-dom";
import axios from "axios";

const JoinPage = () => {

const navigate = useNavigate();

    const [form,setForm] = useState({
        id:"",
        pw:"",
        pwConfirm:"",
        name:"",
        phone:"",
        email:"",
        zoneCode:"",
        address1:"",
        address2:"",
        joinDate:""
    });
  
    // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    // 회원가입 버튼 클릭 시 실행 preventDefault 로 서브밋 막음
  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
    axios.post("http://10.5.5.1/member/join", form)
    .then(resp=>(console.log(resp))
    .then(navigate("/")))
  };
   
  
    return (
        <>
       
        <div className={styles.signUpBox}>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디 : </label>
          <input type="text" name="id" value={form.id} onChange={handleChange} />
        </div>

        <div>
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
        </div>

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
            name="zoneCode"
            value={form.zoneCode}
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


        <button type="submit">회원가입</button>
      </form>
    </div>
        </>
        
       
    )
}

export default JoinPage;