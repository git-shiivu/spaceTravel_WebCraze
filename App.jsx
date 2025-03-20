import './App.css'

function App() {

  return (
    <>
      <div className='border-[.3vw] inline'>
        
      </div>
      <div className=' h-[100vh] w-[100vw]flex justify-center'>
          <div className='w-[100vw] flex justify-evenly text-white font-bold font-sans'>
            <span className='text-[2.5vw] cursor-pointer duration-500 hover:text-green-600'>Home</span>
            <span className='text-[2.5vw] cursor-pointer duration-500 hover:text-green-600'>Flights Tickets</span>
            <span className='text-[2.5vw] cursor-pointer duration-500 hover:text-green-600'>Schedules</span>
            <span className='text-[2.5vw] cursor-pointer duration-500 hover:text-green-600'>Contact</span>
          </div>
          <div className='inline-flex m-[4vw]'>
            <img className='w-[30vw]' src="https://tint.creativemarket.com/-fc2O8L6UQr741mlhB4cXKO-iCoIFi9Zha4rZ_Lqyc4/width:1820/height:1214/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzg3Mi84NzIxLzg3MjE0NTQvc3BhY2UtdHJhdmVsLW8ucG5n?1594759552" alt="" />
            <p className=' font-sans text-[1.5vw] w-[70vw] p-[1vw] border-l-[1vw] bg-orange-50'>
            Embark on an extraordinary journey beyond Earth's embrace and witness the cosmos unfold before your very eyes. With us, you'll explore the wonders of space, from the thrill of weightlessness to the awe-inspiring views of our planet from orbit. Our space travel website offers a gateway to unforgettable experiences, scientific discoveries, and the boundless potential of human exploration, all while pushing the boundaries of what's possible. Prepare to be captivated by the stars!
            </p>
          </div>
          <div className='p-[2vw] bg-indigo-700 inline rounded-[1vw] duration-500 hover:bg-green-800 ] m-[4vw]'>
            <a className='text-[2vw] text-white font-bold' href="#">More Info</a>
          </div>
          
        </div>
      
    
    </>

  )
}

export default App
