import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa'

const Blog = ({ blog, handleAddBookmarks, handleMarkAsRead, markAsRead }) => {
    const {id, cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;

    const disableButton = {
        color: markAsRead && 'gray',
    }

    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full h-96 rounded-lg object-cover' src={cover} alt={`cover image of blog titled "${title}"`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h5>{author}</h5>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p>{reading_time} min read</p>
                    <button
                        onClick={() => handleAddBookmarks(blog)}
                        className='text-red-500 text-xl'
                    >
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h3 className='text-4xl font-bold'>{title}</h3>
            <div>
                {
                    hashtags.map((hashtag, idx) => <small key={idx}>#{hashtag} </small>)
                }
            </div>
            <button 
            style={ disableButton }
            disabled={markAsRead}
            onClick={() => handleMarkAsRead(id, reading_time)}
            className='text-blue-900 font-semibold underline'>
                {markAsRead ? 'Already Read' : 'Mark As Read'}
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
    markAsRead: PropTypes.bool.isRequired,
}

export default Blog;