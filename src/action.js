import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from "./actionType";


export const fetchPostsRequest =()=>{
    return{
        type: FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSuccess = (posts)=>{
    return{
        type: FETCH_POSTS_SUCCESS,
        payload: posts 
    }
}

export const fetchPostsFailure = (error)=>{
    return{
        type: FETCH_POSTS_FAILURE,
        payload: error 
    }
}

export const fetchPosts = ()=>{
    return (dispatch)=>{
        dispatch(fetchPostsRequest())
        fetch('https://official-joke-api.appspot.com/jokes/ten')
        .then(response =>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error('Error -' + response.status)
            }
        }) 
        .then(data =>{
            dispatch(fetchPostsSuccess(data));
        })
        .catch(error =>{
            dispatch(fetchPostsFailure(error));
        })
    }
}
