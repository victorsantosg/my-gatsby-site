import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import { container, navLinks, navLinkItem, navLinkText } from "./layout.module.css"



const Layout: React.FC<PageProps> = ({ pageTitle, children }) => {
  return (
    <div className={container}>

        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
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