import { useEffect, useState, type ReactNode } from "react";
import { getRepo } from "../../services/github";
import type { Repository } from "../../types/githubData";

export default function Projects() {
  // Teste básico para ver se código está funcional
  const [d, setD] = useState<Repository>();

  useEffect(() => {
    const data = async () => {
      try {
        setD(await getRepo("blog"));
      } catch (error) {
        console.error(error);
      }
    };

    data();
  }, []);

  let forD: ReactNode;

  if (d?.languages) {
    forD = Object.keys(d.languages).map((lang) => <p>{lang}</p>);
  } else {
    forD = "Hello World";
  }

  return (
    <>
      <p>{d?.description}</p>
      <p>{d?.html_url}</p>
      <p>{d?.pushed_at}</p>
      {forD}
    </>
  );
}
