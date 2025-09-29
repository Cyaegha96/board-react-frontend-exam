import styles from "./layout.module.css";
import Headers from "./Headers"
import Contents from "./Contents";

const MainLayout = ({children}) => {
    return (<div className={styles.MainLayout}>
       <Headers></Headers>
       <Contents> {children}</Contents>
       
    </div>)

}

export default MainLayout;