import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { fetchSelectedPosts} from '../redux/actions/postsAction'
import SuccessfullLanding from './SuccessfullLanding'
import LaunchYearComp from './LaunchYearComp'
import SuccessfulLaunch from './SuccessfulLaunch'


function Postfilter() {
    const [successValue, setSuccessValue] = useState("")
    const [landSuccessValue, setLandSuccessValue] = useState("")
    const [yearSuccessValue, setYearSuccessValue] = useState("")

  let isSuccess;
  let landsuccsess;
  let yearSuccess;
  const dispatch=useDispatch();

    const handleSuccess = (value) =>{
            isSuccess=value;
            setSuccessValue(value)
            dispatch(fetchSelectedPosts(isSuccess,landSuccessValue,yearSuccessValue))
    }

    const handleLandSuccess = (value) =>{
            landsuccsess=value
            setLandSuccessValue(value)
            dispatch(fetchSelectedPosts(successValue,landsuccsess,yearSuccessValue))

    }

    const handleYearSuccess= (value)=>{
        yearSuccess=value;
        setYearSuccessValue(value);
        dispatch(fetchSelectedPosts(successValue,landSuccessValue,yearSuccess))


    }

    return (
        <div className="border p-3 m-3 bg-white rounded">
            <h1 className="text-black font-bold">Filters</h1>
 
            <>
                  <LaunchYearComp handleYearSuccess={handleYearSuccess}/>  
                  <SuccessfulLaunch handleSuccess={handleSuccess}/>
                  <SuccessfullLanding handleLandSuccess={handleLandSuccess}/>
            </>


        </div>
    )
}


export default Postfilter;
