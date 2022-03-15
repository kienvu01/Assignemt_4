import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const Detail = (props) => {
    const { id } = useParams();
    const [post, setPost] = useState([])
    useEffect(() => {
        let didCancled = false;
        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/'+id
        }).then(response => {
            if (!didCancled) {
                console.log('response =', response);
                setPost(response.data)
            }
        });
        
        return () => {
            didCancled = true;
        }
    }, []);
    
   

  return (
<p>{post.body}</p>
  )
}
export default Detail;