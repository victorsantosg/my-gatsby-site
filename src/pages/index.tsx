import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "./layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout pageTitle="Home Page"></Layout>
      <hr />
      <Link to="/about">Sobre</Link>
      <p>Iniciando com os primeiros componentes React no Gatsby</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
