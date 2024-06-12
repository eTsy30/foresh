'use client'
import React, { useState } from 'react'
import styles from './slider.styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import img1 from '../../../public/Image/slider/1-min.jpeg'
import img2 from '../../../public/Image/slider/2-min.jpeg'
import img3 from '../../../public/Image/slider/3-min.jpeg'
import img4 from '../../../public/Image/slider/4-min.jpeg'
import Image from 'next/image'
import instagramIcon from '../../../public/Image/icon/instagram.svg'

export const Slider = () => {
  const sliderImage = [
    {
      title: 'Описание 1',
      img: img2.src,
    },
    {
      title: 'Описание 2',
      img: img2.src,
    },
    {
      title: 'Описание 3',
      img: img3.src,
    },
    {
      title: 'Описание 4',
      img: img4.src,
    },
  ]
  const [value, setValue] = useState()
  return (
    <div className={styles['swiper']}>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {sliderImage &&
          sliderImage.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <p className={styles['swiper__title']}>{item.title}</p>
                <div className={styles['swiper__top-gradient']}>
                  {item.title}
                </div>
                <div
                  className={styles['swiper__image']}
                  style={{ backgroundImage: `url(${item.img})` }}
                />
              </SwiperSlide>
            )
          })}
        <div className={styles['swiper__bottom-gradient']}>
          <a href="https://www.instagram.com/forest_house_candles?igshid=MmU2YjMzNjRlOQ%3D%3D">
            <Image
              className={styles['swiper__insta']}
              src={instagramIcon}
              width={24}
              height={24}
            />
          </a>
        </div>
      </Swiper>
    </div>
  )
}
