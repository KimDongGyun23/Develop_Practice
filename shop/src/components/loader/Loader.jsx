import { RotateLoader } from "react-spinners";
import styles from "./Loader.module.scss";

export const Loader = ({ basic }) => {
  if (basic) {
    return (
      <div className={styles.basicWrapper}>
        <RotateLoader color="grey" />
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <RotateLoader color="grey" />
      </div>
    </div>
  );
};
