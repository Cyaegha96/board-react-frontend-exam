
import useAuthStore from "../store/authStore"
const Home = () => {
const {loginId , isLoggedIn} = useAuthStore();
    return (
       <>
       <h1>
        메인화면
       </h1>
       <div>
        {isLoggedIn ? <h2>환영합니다 {loginId}</h2>:<h2>아직 로그인 전입니다.</h2>}
       </div>
       </>
       
    )
}

export default Home;