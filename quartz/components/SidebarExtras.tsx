import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const SidebarExtras: QuartzComponent = ({ }: QuartzComponentProps) => {
  return (
    <aside class="sidebar-extras">
      <h2>Projects</h2>
      <div id="projects"> "test" </div>
      <h2>Experience</h2>
      <div id="experience"> "test" </div>
    </aside>
  )
}

SidebarExtras.css = `
.sidebar-extras {
  padding: 0.5rem 0;
}
.sidebar-extras h2 {
  margin: 0.5rem 0;
  font-size: 1rem;
}
`

export default (() => SidebarExtras) satisfies QuartzComponentConstructor
