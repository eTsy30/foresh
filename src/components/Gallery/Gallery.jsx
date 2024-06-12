import React from 'react'
import styles from './Gallery.module.scss'
import img1 from '../../../public/Image/slider/1-min.jpeg'
import img2 from '../../../public/Image/slider/2-min.jpeg'
import img3 from '../../../public/Image/slider/3-min.jpeg'
import img4 from '../../../public/Image/slider/4-min.jpeg'
import Image from 'next/image'
export const Gallery = () => {
  const imagesMap = [
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
  ]
  return (
    <section id="Gallery" className={styles['gallery']}>
      <h3 className={styles['gallery__title']}>Мои работы</h3>
      <div className={styles['image__container']}>
        {imagesMap.map((item, index) => (
          <div className={styles['image']} key={index}>
            <Image
              className={styles['image__content']}
              src={item}
              alt={'Работы'}
              width={264}
              height={300}
            />
            <div className={styles['image__description']}>
              <p>Цена: 10p</p>
              <p>Описание: Описание</p>
              <p>bla: bla-bla-bla</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
