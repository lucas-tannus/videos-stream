import { useState } from 'react'

import Head from 'next/head'
import NavBar from '@/components/nav/navbar'

import styles from '../styles/Login.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [userMessage, setUserMessage] = useState('')

  const handleEmailChange = (e) => {
    const { target } = e
    setEmail(target.value)

    if (target.validity.valid) {
      setEmailValid(true)
    }
  }

  const handleLoginWithEmail = (e) => {
    e.preventDefault()
    
    if (!emailValid || email === '') {
      setUserMessage('Email address is not valid!')
      return
    }

    setUserMessage('')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
      <header>
        <NavBar loginPage />
      </header>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.title}>Sign in</h1>
          <input 
            type='email' 
            placeholder='Email address' 
            className={styles.emailInput}
            onChange={handleEmailChange}
          />
          { userMessage && (
            <p className={styles.userMessage}>{ userMessage }</p>
          )}
          <button 
            onClick={handleLoginWithEmail} 
            className={styles.loginButton}
          >
            Sign in
          </button>
        </div>
      </main>
    </div>
  )
}

export default Login
