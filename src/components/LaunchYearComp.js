import React from 'react'

const LaunchYearComp = ({handleYearSuccess}) => {
const years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];

    return (
        <div className="mt-6">
                <h2 className="border-b-2 mb-4 p-1">Launch Year</h2>
        <div className="grid grid-cols-2 gap-1">
            {
                years.map((number,id) => <button key={id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={()=>handleYearSuccess(number)}>{number}</button>)
            }
 
        </div>
        </div>
       
    )
}

export default LaunchYearComp
