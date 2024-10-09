import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"

const Layout: React.FC<PageProps> = ({ pageTitle, children }) => {
  return (
    <div>
        <hr />
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
        <hr />
        <main>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    </div>
  )
}

export default Layout

export const Head: HeadFC = () => <title>Layout</title>