import React, {useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "./action";
import './App.css'



function App(){
  const dispatch = useDispatch();
  const { posts, loading, error} = useSelector(state=> state);

  useEffect(()=>{
    dispatch(fetchPosts());
  }, [dispatch]);


return(
  <div className="App">
    {loading && <h2>Loading...</h2>}
    {error && <h2>{error}</h2>}
    {posts.map(post=>(
      <div key={post.id}>
        <h2>{post.setup}</h2>
        <p id="punch">{post.punchline}</p>
        </div>
    ))}
  </div>
)
}


export default App;
