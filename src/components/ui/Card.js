import React from 'react'
import Image from 'next/image'

const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
        <div className='circle'>
            <Image width={100} height={100} src={`/${props.img}`}/>
        </div>
        { props.children }
    </div>
  )
}

export default Card