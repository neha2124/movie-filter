import React from 'react'

const navbar = ({filter,data}) => {
  return (
    <div >
        <h1>Top 15 Movies of all time</h1>
        <div className='navbar'>
        <h2>Filter by genre</h2>
        <div className="btn-group">
        {data.map((item,index)=>{
            
            return <button  onClick={()=>{filter(item)}} key={index}>{item}</button>
            
        })
        }
        </div>
        </div>
        </div>
  )
}

export default navbar