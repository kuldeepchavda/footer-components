import styles from "@/app/components/footer2/ListComponent.module.css"
export default function ListComponent({btnText}){
    return(
        <>
        <button className={styles.btn}>
         {btnText}
        </button>
        </>
    )
}