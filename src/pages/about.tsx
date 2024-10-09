import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"

const About: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Sobre</h1>
      <hr />
      <Link to="/">Home</Link>
      <p>Iniciando com os primeiros componentes React no Gatsby</p>
    </main>
  )
}

export default About

export const Head: HeadFC = () => <title>Sobre</title>