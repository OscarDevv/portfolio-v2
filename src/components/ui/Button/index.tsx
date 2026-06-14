import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
