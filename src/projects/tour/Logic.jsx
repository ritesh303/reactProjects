import React from 'react';
import Final from './Final';
import './tour.css';

const Logic = ({myData,removeTour}) => {
  return (
    <section>
    <div className='title'>
        <h2>Our tours</h2>
        <div className='underline'></div>
    </div>
        {
            myData.map((items)=>{
                return(
                    <Final key={items.id} {...items} removeTour={removeTour}/>
                )
            })
        }
    </section>
  )
}

export default Logic