import styles from './banner.module.css';
const Bannner = (props)=>{
    return <div className={styles.containeer}>
        <h1 className={styles.title}>
            <span className={styles.title1}>Coffee</span>
            <span className={styles.title2}>Connoisseur</span>
        </h1>
        <p className={styles.subTitle}>Discover your local coffee shop</p>
        <button className={styles.button} onClick={props.handleOnClick}> {props.buttonText}
      </button>   
       </div>
}

export default Bannner;