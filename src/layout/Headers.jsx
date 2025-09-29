import {Link} from "react-router-dom"
import styles from "./layout.module.css";
const Headers = () => {
    return (
    <nav className = {styles.Headers}>
        <Link to="/">Home</Link>
        <Link to="/mypage">MyPage</Link>
        <Link to="/board">Board</Link>
        
    </nav>
    )
}

export default Headers;