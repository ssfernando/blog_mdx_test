import Link from 'next/link'
import css from 'styled-jsx/css'

const menuStyle = {
  margin: '25px 25px 0',
}

const bold = {
  fontWeight: 'bold',
}

const menuCss = css`
  div {
    padding-bottom: 10px;
  }

  a {
    font-size: 16px;
  }
`

const Menu = () => (
  <div style={menuStyle}>
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
    <div>
      <a href="https://www.github.com" target="blank">
        itdub.sh ( <span style={bold}>src</span> )
      </a>
    </div>
    <div>
      <Link href="/others">
        <a>Other posts</a>
      </Link>
    </div>
    <style jsx>{menuCss}</style>
  </div>
)

export default Menu
