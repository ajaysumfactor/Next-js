import styles from '../styles/Hello.module.css';
const Hello =()=>{
    console.log(styles);
    return <div className={styles.containeer}>Hello world!
        This is codebase
    </div>
}

export default Hello;