import Layout from '../components/Layout'
import Container from '../components/Container'
import Link from 'next/link'

export default function Index() {
  return (
    <Layout>
      <Container>
        Welcome to the index page. Go to{' '}
        <Link href='signin'>
          <a>sign in</a>
        </Link>{' '}
        or{' '}
        <Link href='signup'>
          <a>sign up</a>
        </Link>
      </Container>
    </Layout>
  )
}
