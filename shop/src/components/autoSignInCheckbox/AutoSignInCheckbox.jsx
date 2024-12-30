import { CheckBox } from "../checkbox/CheckBox";
import styles from "./autoSignInCheckbox.module.scss";

export const AutoSignInCheckbox = ({
  label = "자동 로그인",
  checked,
  disabled,
  orientation = "top",
  message = "개인 정보 보호를 위해 본인 기기에서만 이용해주세요.",
  onChange,
  ...restProps
}) => {
  return (
    <div className={styles.wrappper}>
      <CheckBox
        label={label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...restProps}
      />
      {checked && <ToolTip />}
    </div>
  );
};
