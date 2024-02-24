import React from 'react';
import './reminder.css'
import Logic from './Logic';

const Final = ({people}) => {
  return (
    <div>
        {
            people.map((item)=>{
                return(
                    <Logic key={item.id} {... item}/>
                )
            }) 
        }
    </div>
  )
}

export default Final