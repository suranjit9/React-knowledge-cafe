
import { useState } from 'react'
import './App.css'
import Blogs from './assets/Blogs/Blogs'
import BookmarkTab from './assets/Bookmark/BookmarkTab'
import Header from './assets/Header'

function App() {
  const [bookmark, setBookmark] = useState([]);

  const handlerBook =blogee=>{
    console.log('hello')
    const bookset =[...bookmark,blogee];
    setBookmark(bookset);

  }
  return (
    <>
    <div className='w-[80%] m-auto'>
      <Header></Header>
        <div className='flex'>
          <div className='w-2/3'>
            <Blogs
            handlerBook={handlerBook}
            ></Blogs>
          </div>

          {/* Left Site */}
          <div className='w-1/3'>
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
