import React, { useState } from 'react';
import './reminder.css';
import data from './data';
import Final from './Final';

const Main = () => {
    const [people,setPeople]=useState(data)
  return (
    <>
        <main>
            <section className='container'>
                <h3>{people.length} Birthday today</h3>
                <Final people={people}/>
                <button className='btn' onClick={()=>setPeople([])}>Clear all</button>
            </section>
        </main>
    </>
  )
}

export default Main