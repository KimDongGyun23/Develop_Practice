import styles from "./Heading.module.scss";

export const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={styles.wrapper}>
      <div className={center ? styles.center : ""}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
};
