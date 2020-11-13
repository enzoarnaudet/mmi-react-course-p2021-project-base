import React from 'react'
import Input from '../../components/Input'
import Page from '../../components/Page'

import styles from './LoginPage.module.css'
import Background from '../../components/Background/Background'
/*
styles.title
*/

const LoginPage = () => {
  return (
    <Page>
      <Background/>
      <div>
        <form>
          <h1 className={styles.title}>Connecte toi</h1>
          <br />
<div className={styles.barre}>
          Email
          <Input type="email" />
</div>
          <br />
          <br />
          <div className={styles.barre}>
          Password
          
          <Input
            type="password"
          />
          </div>
        </form>
      </div>
    </Page>
  )
}

export default LoginPage
