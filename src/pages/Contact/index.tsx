import { Mail } from "lucide-react";
import { useWriteText } from "../../hooks/useWriteText";
import type { ContactWay } from "./Contact.types";
import { Container } from "../../components/Container";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Button } from "../../components/Button";
import styles from "./Contact.module.scss";

export default function Contact() {
  const contactTitle = useWriteText("Contato", 75);
  const contactWays: ContactWay[] = [
    {
      name: "E-mail",
      icon: Mail,
      content: "oscanero3@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=oscanero3@gmail.com",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      content: "OscarDevv",
      link: "https://github.com/OscarDevv",
    },
    {
      name: "Discord",
      icon: FaDiscord,
      content: "oscar_devv",
    },
  ];

  return (
    <>
      <h1 className="pageTitle">{contactTitle}</h1>

      <div className={styles.container}>
        {contactWays.map((way) => {
          const Icon = way.icon;

          return (
            <Container key={way.name}>
              <Icon className={styles.icon} />
              <h2>{way.name}</h2>
              <span>{way.content}</span>
              {way.link && (
                <a href={way.link} target="_blank">
                  <Button>Conversar</Button>
                </a>
              )}
              {!way.link && (
                <p className={styles.noLink}>
                  <strong>Sem link para conversar</strong>
                </p>
              )}
            </Container>
          );
        })}
      </div>

      <p>Novas formas de conversar comigo serão adicionadas em breve.</p>
    </>
  );
}
