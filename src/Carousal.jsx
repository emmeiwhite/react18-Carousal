import { useState } from 'react'
import { list } from './data'

export default function Carousal() {
  const [carousalData, setCarousalData] = useState(list)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  console.log(carousalData)
  return (
    <section className="slider-container ">
      {carousalData.map((person, index) => {
        const { id, image, name, title, quote } = person
        return (
          <article
            key={id}
            className="slide"
            style={{ transform: `translateX(${(index - currentSlideIndex) * 100}%)` }}
          >
            <img
              src={image}
              alt={name}
              className="person-img"
            />
            <h3 className="name">{name}</h3>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>

            <span className="icon"></span>
          </article>
        )
      })}
      <button className="btn prev">{'<'}</button>
      <button className="btn next">{'>'}</button>
    </section>
  )
}
