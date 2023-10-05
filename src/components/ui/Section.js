import React from 'react'

const Section = (props) => {
  return (
    <section className={`p-24 ${props.className}`}>

        {props.heading && <h1 className='text-primary-darker text-bold text-3xl text-center mb-8 pb-8'>{props.heading}</h1>}

        {props.children}

    </section>
  )
}

export default Section