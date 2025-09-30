import styles from "../layout/signUp.module.css";
import SignUpComponent from "../components/SignUpComponent";


const MyPage = () => {

 
  const url = "/member/update";

  const updateBtn = <div><button type="submit">수정</button><button type="submit">취소</button></div>

    return(
        <>
          <SignUpComponent url={url} btns={updateBtn}/>
        </>
    )

}

export default MyPage;