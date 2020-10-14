import React from 'react'

const SuccessfulLaunch = ({handleSuccess}) => {
    const  launchValues= ["true","false"];

    return (
        <div className="mt-6">
                <h2 className="border-b-2  mb-4 p-1">Successful Launch</h2>
        <div className="grid grid-cols-2 gap-1">
            {
                launchValues.map((launchSuccess,id) => <button key={id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={()=>handleSuccess(launchSuccess)}>{launchSuccess}</button>)
            }
 
        </div>
        </div>
       
    )
}

export default SuccessfulLaunch
