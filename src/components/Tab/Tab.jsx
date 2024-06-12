'use client'
import React, { useState } from 'react'
import styles from './Tab.module.scss'
import cn from 'classnames'
const Tab = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  const getActiveClass = (index, className) => {
    return toggleState === index ? className : ''
  }

  return (
    <div className={styles['container']}>
      <ul className={styles['tab-list']}>
        <li
          className={cn(
            styles['tabs'],
            styles[`${getActiveClass(1, 'active-tabs')}`]
          )}
          onClick={() => toggleTab(1)}
        >
          Lorem
        </li>
        <li
          className={cn(
            styles['tabs'],
            styles[`${getActiveClass(2, 'active-tabs')}`]
          )}
          onClick={() => toggleTab(2)}
        >
          Ipsum
        </li>
      </ul>
      <div className={styles['content-container']}>
        <div
          className={cn(
            styles['content'],
            styles[`${getActiveClass(1, 'active-content')}`]
          )}
        >
          <h2 className={styles['content-title']}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            veniam maiores eos quaerat laboriosam ullam dicta eaque voluptatem
            voluptas? Fugit.
          </h2>
        </div>
        <div
          className={cn(
            styles['content'],
            styles[`${getActiveClass(2, 'active-content')}`]
          )}
        >
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            obcaecati quidem porro nulla et vitae consequatur impedit labore qui
            iste. Eum, aspernatur quae. Numquam vel quisquam ipsum, dolore nobis
            quidem alias reprehenderit facilis placeat optio. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Quod obcaecati quidem porro
            nulla et vitae consequatur impedit labore qui iste. Eum, aspernatur
            quae. Numquam vel quisquam ipsum, dolore nobis quidem alias
            reprehenderit facilis placeat optio.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Tab
