import pfp from "../../assets/images/Foto-Perfil.jpeg";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <>
      <div className={styles.container}>
        <section>
          <a
            href="https://github.com/oscardevv"
            target="_blank"
            title="Navegar para a página do GitHub do Oscar"
          >
            <img className={styles.pfp} src={pfp} alt="Imagem do " />
          </a>
        </section>
        <section className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
            nobis sed odit exercitationem dolorem atque ipsum? Adipisci sapiente
            repellat consectetur voluptatem. Consectetur distinctio itaque
            molestias sit reiciendis. Unde, nesciunt suscipit?
          </p>
        </section>
      </div>
    </>
  );
};
