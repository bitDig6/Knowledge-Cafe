import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  // const [markAsReads, setMarkAsReads] = useState(Array(5).fill(false));
  // const [markAsRead, setMarkAsRead] = useState(false);

  const handleAddBookmarks = blog =>{
      console.log('bookmarking this blog', blog);
      const newBookmark = [...bookmarks, blog];
      setBookmarks(newBookmark);
  }

  const handleMarkAsRead = (id, time) => {
    // console.log('marking blog as read');
    setReadingTime(readingTime + time);
    const newBookmark = bookmarks.filter( bookmark => bookmark.id !==id);
    setBookmarks(newBookmark);
    // const newMarkAsReads = [...markAsReads];
    // setMarkAsRead(true);
  }

  return (
    <>   
      <Header></Header>
      <main className='md:flex p-5 gap-6 max-w-7xl mx-auto'>
        <Blogs 
        handleAddBookmarks={handleAddBookmarks}
        handleMarkAsRead={handleMarkAsRead}>
        </Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        readingTime={readingTime}
        >
        </Bookmarks>
      </main>
    </>
  )
}

export default App
