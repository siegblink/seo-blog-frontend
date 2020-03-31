import Header from './Header'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: grid;
  gap: 16px;
  grid-template-rows: auto 1fr auto;
`

const Footer = styled.div`
  padding: 16px 24px;
  align-items: center;
  background-color: hsl(0, 0%, 20%);
  color: white;
`

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer>Copyright 2020.</Footer>
    </Container>
  )
}
