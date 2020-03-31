import Layout from '../components/Layout'
import Container from '../components/Container'
import Link from 'next/link'

export default function SignUp() {
  return (
    <Layout>
      <Container>
        Welcome to sign up page.
        <div>
          Go back to{' '}
          <Link href='/'>
            <a>home</a>
          </Link>{' '}
          or go to{' '}
          <Link href='/signup'>
            <a>sign up</a>
          </Link>
        </div>
      </Container>
    </Layout>
  )
}
