import { Menu } from "../../componets/Menu/Menu"
import styles from "./Home.module.css"


export function Home(){
    return(
        <div className={styles.Home}>
            <Menu/>
            <h2>Home</h2>
        </div>
    )
}