import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const NavLinks: QuartzComponent = ({ }: QuartzComponentProps) => {
  return (
    <nav class="nav-links">
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
    </nav>
  )
}

NavLinks.css = `
.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.nav-links a {
  color: var(--text);
  text-decoration: none;
}
`

export default (() => NavLinks) satisfies QuartzComponentConstructor
