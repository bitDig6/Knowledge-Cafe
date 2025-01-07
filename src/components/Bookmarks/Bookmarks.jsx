import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 mt-8 space-y-6">
            <div className="bg-gray-300 p-4 border-2 border-blue-900 rounded-xl">
                <h3 className="text-2xl text-center font-bold text-blue-600">Spent Time on Reading: </h3>
            </div>
            <div className="bg-gray-300 p-5 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Bookmarked Blogs: {bookmarks.length}</h3>
                <div className='space-y-4'>
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark
                            bookmark={bookmark}
                            key={idx}>
                        </Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks;