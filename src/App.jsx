
import './App.css'
import Blogs from './assets/Blogs/Blogs'
import Header from './assets/Header'

function App() {
  return (
    <>
    <div className='w-[80%] m-auto'>
      <Header></Header>
        <div>
          <div className='w-2/3'>
            <Blogs></Blogs>
          </div>

          {/* Left Site */}
          <div className='w-1/3'>

          </div>
        </div>
    </div>
    </>
  )
}

export default App
