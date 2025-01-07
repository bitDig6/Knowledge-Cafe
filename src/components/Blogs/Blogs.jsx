import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookmarks, handleMarkAsRead, markAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () =>{
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 mt-8">
           {
            blogs.map( blog => <Blog 
                key={blog.id} 
                blog={blog}
                handleAddBookmarks={handleAddBookmarks}
                handleMarkAsRead={handleMarkAsRead}
                markAsRead={markAsRead}>
                </Blog>)
           }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
    markAsRead: PropTypes.bool.isRequired,
}

export default Blogs;