import React from 'react'

 function Post({post}) {
    

    return (
        <div className="border p-1 m-3 bg-white rounded ">
            <div className="bg-gray-100 m-5 rounded p-2">
            <img className="mx-auto" src={post.links.mission_patch_small} alt="post" />  
            </div>
  
    <div className="mt-4 md:mt-0 md:ml-6 text-left p-2">
    <h2 className="text-gray-900 font-bold blue-primary" >{post.mission_name}</h2>
    {
                post.mission_id.map((missionid,id) =>  <p key={id} className="text-gray-600 font-medium"><span  className="text-black font-medium">mission Id :</span>{missionid}</p>)
            }
   
    <p className="text-gray-600 font-medium"><span  className="text-black font-medium">Launch Year: </span>{post.launch_year}</p>
    <p className="text-gray-600 font-medium"><span  className="text-black font-medium">Flight Number :</span>{post.flight_number}</p>
  
  </div>
  
        </div>
    )
}

export default Post;