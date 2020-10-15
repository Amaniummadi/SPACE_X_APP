export const GET_POSTS = 'GET POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const getPosts = () => ({ type: GET_POSTS })
export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
})
export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE })

export function fetchPosts() {
  return async dispatch => {
    dispatch(getPosts())
    

    try {
      const response = await fetch('https://api.spacexdata.com/v3/launches?limit=100')
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}


export function fetchSelectedPosts(succsess,landSuccess,yearSuccess) {

  return async dispatch => {
    dispatch(getPosts())

    try {
 
      const response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${succsess}&land_success=${landSuccess}&launch_year=${yearSuccess}`)
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}