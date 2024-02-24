import React from 'react'

const Logic = ({id,name,age,image}) => {
  return (
    <>
        <article className='person'>
        <img src={image} alt={name}/>
        <div>
            <h4>{name}</h4>
            <h4>{age}</h4>
        </div>
        </article>
    </>
  )
}

export default Logic