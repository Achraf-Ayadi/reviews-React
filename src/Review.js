import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { job, image, text, name } = people[index]

  const checknumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    } else return number
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1

      return checknumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checknumber(newIndex)
    })
  }

  const randomPerson =() =>{
    let randomNummber = Math.floor(Math.random() * people.length - 1)
    setIndex(() => {
      return checknumber(randomNummber)
    })}

  return(
    <>
      <div className='title'>
        <h2>Our rewiew</h2>
        <div className=' underline'></div>
      </div>
      <article className='review container'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>

        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'> {text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn' onClick= {randomPerson}>supreise me</button>
      </article>
    </>
  )
}

export default Review
