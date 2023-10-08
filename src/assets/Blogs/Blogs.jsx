import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog";


const Blogs = ({handlerBook,handlerTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch ('/public/BlogData/data.json')
        .then(res => res.json())
        .then(data=>setBlogs(data))
        // console.log(blogs)
        
    },[])
    return (
        <div>
            
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    handlerBook={handlerBook}
                    handlerTime={handlerTime}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;