import {Link} from "react-router-dom"
import styles from "./layout.module.css";
import useAuthStore from "../store/authStore"
const Headers = () => {

     const {loginId , isLoggedIn} = useAuthStore();
    return (
    <nav className = {styles.Headers}>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/mypage">MyPage</Link>
        }
        
        <Link to="/board">Board</Link>
        
    </nav>
    )
}

export default Headers;