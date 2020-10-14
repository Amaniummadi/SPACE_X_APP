import React from 'react'

const SuccessfullLanding = ({handleLandSuccess}) => {
    const  LandValues= ["true","false"];

    return (
        <div className="mt-6">
                <h2 className="border-b-2  mb-4 p-1">Successful Landing</h2>
        <div className="grid grid-cols-2 gap-1">
            {
                LandValues.map((launchSuccess,id) => <button key={id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={()=>handleLandSuccess(launchSuccess)}>{launchSuccess}</button>)
            }
 
        </div>
        </div>
       
    )
}

export default SuccessfullLanding
