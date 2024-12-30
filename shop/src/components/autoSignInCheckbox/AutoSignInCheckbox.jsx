import { useState } from "react";
import { CheckBox } from "../checkbox/CheckBox";
import styles from "./autoSignInCheckbox.module.scss";
import { Tooltip } from "../tooltip/Tooltip";

export const AutoSignInCheckbox = ({
  label = "자동 로그인",
  disabled,
  orientation = "top",
  message = "개인 정보 보호를 위해 본인 기기에서만 이용해주세요.",
  ...restProps
}) => {
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  return (
    <div className={styles.wrapper}>
      <CheckBox
        label={label}
        checked={isAutoLogin}
        disabled={disabled}
        onChange={(e) => setIsAutoLogin(e.target.checked)}
        {...restProps}
      />
      {isAutoLogin && (
        <Tooltip
          left={-5}
          top={24}
          orientation={orientation}
          message={message}
        />
      )}
    </div>
  );
};
