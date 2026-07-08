import {
  MessageCircle,
  House,
  CircleUserRound,
  FolderGit2,
} from "lucide-react";
import type { AsideItem } from "./Aside.types";
import { useNavigate } from "react-router-dom";
import styles from "./Aside.module.scss";

export const Aside = () => {
  const items: AsideItem[] = [
    {
      name: "Início",
      path: "/",
      icon: House,
    },
    {
      name: "Sobre",
      path: "/about",
      icon: CircleUserRound,
    },
    {
      name: "Projetos",
      path: "/projects",
      icon: FolderGit2,
    },
    {
      name: "Contato",
      path: "/contact",
      icon: MessageCircle,
    },
  ];

  const navigate = useNavigate();

  return (
    <aside className={styles.aside}>
      <nav>
        <ul className={styles.ul}>
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <li
                key={index}
                className={styles.li}
                onClick={() => navigate(item.path)}
              >
                <Icon className={styles.icon} />
                <span className={styles.span}>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
