import styles from "./layout.module.css"
import LoginComponent from "../components/LoginComponent";
import MenuComponent from "../components/MenuComponent"

const LeftNavi = () => {
   
    return (
       <>
        <div className={styles.LeftNavi}>
       <LoginComponent/>
       <MenuComponent/>
        </div>
       </>
       
    )
}

export default LeftNavi;