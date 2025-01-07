import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    console.log(bookmark);
    return (
        <div className='bg-white rounded-xl p-5'>
            <h5 className='text-xl font-semibold'>{title}</h5>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;