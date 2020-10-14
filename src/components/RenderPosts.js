import React from 'react'
import Post from './Post'

const RenderPosts = ({loading,hasErrors,posts}) => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>

  return posts.map(post => <Post key={post.flight_number} post={post} excerpt />)
  }


export default RenderPosts
