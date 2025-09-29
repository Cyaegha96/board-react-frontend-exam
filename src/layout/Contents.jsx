
import styles from "./layout.module.css";
import LeftNavi from "./LeftNavi"

const Contents = ({children}) =>{
   return(
    <div className={styles.Contents}>
      <LeftNavi></LeftNavi>
        <div className={styles.RightContent}>
         {children}
        </div>
    </div>
   )
}

export default Contents;