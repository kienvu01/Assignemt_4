import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

export const Post = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        let didCancled = false;
        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(response => {
            if (!didCancled) {
                console.log('response =', response);
                setUser(response.data)
            }
        },[]);
        return () => {
            didCancled = true;
        }
    }, []);
    function deleteUser(event,id) {
        setUser(user.filter(user=>user.id !==id))
        console.log('Deleted user:',user)

    }
    console.log('User =', user)
  return (
    <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title -- Sort (NONE)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(user => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>
                                <Link to={`/detail/${user.id}`}>View Detail</Link>
                                <button onClick={(event)=>deleteUser(event,user.id)} style={{marginLeft:"20px"}}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
  )
}

export default Post;