import Meta from './Meta'
import Menu from './Menu'

const contentStyle = {
  margin: '0 25%',
}

const Layout = props => (
  <div>
    <Meta />
    <Menu />
    <div style={contentStyle}>{props.children}</div>
  </div>
)

export default Layout
