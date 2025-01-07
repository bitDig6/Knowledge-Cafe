import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmarks = blog =>{
      console.log('bookmarking this blog', blog);
      const newBookmark = [...bookmarks, blog];
      setBookmarks(newBookmark);
  }

  return (
    <>   
      <Header></Header>
      <main className='md:flex gap-6 max-w-7xl mx-auto'>
        <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  )
}

export default App
