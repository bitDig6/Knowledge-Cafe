import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='mx-auto p-4 flex justify-between items-center border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;