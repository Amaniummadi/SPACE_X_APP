import React from 'react'

const SuccessfulLaunch = ({handleSuccess}) => {
    const  launchValues= ["true","false"];

    return (
        <div className="mt-6">
                <h2 className="border-b-2  mb-4 p-1">Successful Launch</h2>
        <div className="grid grid-cols-2 gap-1">
            {
                launchValues.map((launchSuccess,id) => <button key={id} className=" hover:bg-blue-700 text-black font-medium py-2 px-4 rounded"  style={{backgroundColor: "#C7F6B6"}} onClick={()=>handleSuccess(launchSuccess)}>{launchSuccess}</button>)
            }
 
        </div>
        </div>
       
    )
}

export default SuccessfulLaunch
