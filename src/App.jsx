
import './App.css'

function App() {
 

  return (
    <>
      <div className='m-[50%] items-center mx-auto border-2 pt-12 px-20'>
      <h1 className=' font-bold text-red-400'>Vite + React</h1>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      <p className=" text-red-700">
        Click on the Vite and React logos to learn more
      </p>
        
       
      </div>
     
    </>
  )
}

export default App
