import styles from "@/app/components/footer5/ListComponent.module.css";
export default function ListComponent({ btnText ,dark }) {
  return (
    <>
      <button className={`${styles.btn} `}>{btnText}</button>
    </>
  );
}
