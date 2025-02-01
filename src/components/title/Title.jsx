import styles from "./title.module.css"
export default function Title(props){
    return(
        <div className={styles.title}>
            <h1>{props.title}</h1>
        </div>
    )
}