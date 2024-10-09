import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "./layout";

const About: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Sobre">
      <hr />
      <Link to="/">Home</Link>

      <p>Iniciando com os primeiros componentes React no Gatsby</p>
    </Layout>
  );
};

export default About;

export const Head: HeadFC = () => <title>Sobre</title>;
