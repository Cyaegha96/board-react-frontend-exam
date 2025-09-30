import { useState } from "react";
import api from '../utils/api';
import  {useNavigate}  from "react-router-dom";

const SignUpComponent = ({url,btns})=>{

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

const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
    api.post(url, form)
    .then(resp=>(console.log(resp)))
    .then(navigate("/"))
  };

        const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    return(
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
        {btns}
      </form>
    )
}

export default SignUpComponent