import { useEffect, useState } from 'react'
import { list } from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Carousal() {
  const [carousalData, setCarousalData] = useState(list)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  console.log(carousalData)

  const handlePrev = () => {
    setCurrentSlideIndex(personIndexPrev => {
      /** This is a wonderful logic */
      const result = (personIndexPrev - 1 + carousalData.length) % carousalData.length
      return result
    })
  }

  const handleNext = () => {
    setCurrentSlideIndex(personIndexPrev => {
      /** This is a wonderful logic */
      const result = (personIndexPrev + 1) % carousalData.length
      return result
    })
  }

  useEffect(() => {
    // setInterval(() => {
    //   handleNext()
    // }, 3000)
  }, [])

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

            <FaQuoteRight className="icon" />
          </article>
        )
      })}

      <button
        type="button"
        className="prev"
        onClick={handlePrev}
      >
        <FaChevronLeft />
      </button>

      <button
        type="button"
        className="next"
        onClick={handleNext}
      >
        <FaChevronRight />
      </button>
    </section>
  )
}
