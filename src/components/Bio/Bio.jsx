import React from 'react'
import styles from './Bio.module.scss'
import Tab from '../Tab/Tab'

export const Bio = () => {
  return (
    <section id="Bio">
      <h3 className={styles['bio__title']}>Bio</h3>
      <Tab />
    </section>
  )
}
