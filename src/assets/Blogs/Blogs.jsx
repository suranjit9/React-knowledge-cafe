import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch ('/public/BlogData/data.json')
        .then(res => res.json())
        .then(data=>setBlogs(data))
        console.log(blogs)
        
    },[])
    return (
        <div>
            <h1>Total Blogs :{blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;