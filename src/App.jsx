
import { useState } from 'react'
import './App.css'
import Blogs from './assets/Blogs/Blogs'
import BookmarkTab from './assets/Bookmark/BookmarkTab'
import Header from './assets/Header'
import Times from './assets/Bookmark/Times'

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [times, setTimes] =useState(0);
  

  const handlerBook =(blogee)=>{
    const bookset =[...bookmark,blogee];
    setBookmark(bookset);
  }
  const handlerTime = (timex,id)=>{
    setTimes(times+timex);
    const removeBook = bookmark.filter(bookmarks =>bookmarks.id !== id);
    setBookmark(removeBook);
    // setButtonDisabled(true);
    
  }
  return (
    <>
    <div className='w-[80%] m-auto'>
      <Header></Header>
        <div className='flex gap-4'>
          <div className='md:w-2/3'>
            <Blogs
            handlerBook={handlerBook}
            handlerTime={handlerTime}
            // isButtonDisabled={isButtonDisabled}
            ></Blogs>
          </div>

          {/* Left Site */}
          <div className='md:w-1/3'>
              <Times
              times={times}
              ></Times>

              <BookmarkTab
              bookmark={bookmark}
              
              ></BookmarkTab>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
