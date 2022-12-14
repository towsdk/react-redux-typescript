import React, { useState, useEffect } from 'react'
import {useParams, useLocation} from 'react-router-dom';
import { blogsData } from './data';
const Blog = () => {
    const {title} = useParams();
    const location = useLocation();
    console.log(location);
//     const [bodyData, setBodyData] = useState("");

//     useEffect(() =>{
//         const blogData = blogsData.filter((blog)=> blog.title === title);
//     setBodyData(blogData[0].body);
// }, []);

  return (
    <div>
        <h2>{title} Page</h2>
        <p>{location.state.body.slice(0, 500)}</p>
        <p>{location.state.body.slice(500, 800)}</p>
    </div>
  );
};

export default Blog