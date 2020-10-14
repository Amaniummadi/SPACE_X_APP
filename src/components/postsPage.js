import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../redux/actions/postsAction'


import Postfilter from './PostFilter'
import RenderPosts from './RenderPosts'

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

 
console.log("posts",posts)

  return (
    <div className="lg:container  lg:mx-auto  pb-10 pt-3 ">
      <h1 className="text-black font-bold pt-5 pb-5 text-2xl">SpaceX Launch Programs</h1>
    
      <div className=" grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-2">
        <div className="grid-span-1 sm:col-span-1 md:grid-span-1 lg:grid-span-1 xl:grid-span-1">
            <Postfilter/>
          </div>
      <div className="grid-span-3 sm:col-span-3 md:grid-span-3 lg:grid-span-3 xl:grid-span-3">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
         
          <RenderPosts  loading={loading}  posts={posts} hasErrors={hasErrors}/>
          </div>  
      </div>

      </div>   
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(PostsPage)
