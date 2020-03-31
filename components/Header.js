import styled from 'styled-components'
import Link from 'next/link'

const Navbar = styled.div`
  padding: 16px 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  background-color: hsl(0, 0%, 20%);
  color: #333;

  & > a {
    text-decoration: none;
    color: white;
  }
`

const NavItems = styled.nav`
  & > ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    li {
      a {
        text-decoration: none;
        color: white;
      }
    }

    li:not(:last-of-type) {
      padding-right: 16px;
    }
  }
`

export default function Header() {
  return (
    <Navbar>
      <Link href='/'>
        <a>SeoBlog</a>
      </Link>
      <NavItems>
        <ul>
          <li>
            <Link href='signin'>
              <a>Sign in</a>
            </Link>
          </li>
          <li>
            <Link href='signup'>
              <a>Sign up</a>
            </Link>
          </li>
        </ul>
      </NavItems>
    </Navbar>
  )
}
