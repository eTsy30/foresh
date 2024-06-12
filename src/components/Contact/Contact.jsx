import React from 'react'
import style from './Contact.module.scss'
import Image from 'next/image'
export const Contact = () => {
  return (
    <>
      <h3 id="Contact" className={style['title']}>
        Contact
      </h3>

      <div className={style['contact']}>
        <div className={style['contact__image']}></div>
        <div className={style['contact__description']}>
          <h2 className={style['contact__description-title']}>
            We´d Like to Heard from You{' '}
          </h2>
          <p className={style['contact__description-text']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            consequatur cum nobis soluta nam hic nisi iure. Alias, ipsum
            necessitatibus! Dignissimos ipsa veniam ducimus perferendis ullam
            cumque nemo nisi, molestiae facilis et soluta? Recusandae molestias
            officiis iure saepe autem placeat?
          </p>
          <p className={style['contact__description-text']}>
            Lorem, ipsum dolor.
          </p>
          <a
            className={style['contact__description-tel']}
            href="tel:+375 33 1234567"
          >
            +375 33 1234567
          </a>
        </div>
      </div>
    </>
  )
}
