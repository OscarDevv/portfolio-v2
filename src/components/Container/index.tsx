import styles from "./Container.module.scss";
import type { ContainerProps } from "./Container.types";

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`${styles.container} ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
};
