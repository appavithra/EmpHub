import React from 'react'

const Events = () => {
  return (
    <div className='eventMain'>
       <h1>EVENTS</h1>
      <div className="eventInner">
            <div className="top">
              <div className="cont" id='c1'>
                <h2>Bakery Class</h2>
                <p>Mon-Fri 3pm- 4pm</p>
              </div>
              <div className="img" id='i1'></div>
            </div>
            <div className="bottom">
              <div className="img" id='i2'></div>
              <div className="cont" id='ic2'>
                <h2>Sushi Class</h2>
                <p>Mon-Fri 4pm- 5pm</p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Events
