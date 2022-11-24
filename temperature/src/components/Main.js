import {useState} from 'react'

const Main = (props) => {
  const [tempValue , setTempValue] = useState(0)
  const increaseTemp = () => {
    if(tempValue === 30) return;
    setTempValue(tempValue + 1)
  }
  const decreaseTemp = () => {
    if(tempValue <= 0) return;
    setTempValue(tempValue - 1)
  }
 
  return (
    <main>
      <p style={tempValue < 15 ? {backgroundColor: 'darkblue'} : {backgroundColor: 'orange'}} className='rounded-full h-40 w-40 text-center m-auto text-4xl flex justify-center items-center border-4 border-white shadow-xl shadow-[0px_19px_38px_rgba(0,0,0,0.3),0px_15px_12px_rgba(0,0,0,0.22)]'>{tempValue}°c</p>
      
      <div className='flex gap-8 justify-center items-center mt-6'>
        <button onClick={decreaseTemp}><img src={props.minus} alt='minus button' width='70' height='70' className='border-2 border-white rounded-full hover:bg-white shadow-[0px_19px_38px_rgba(0,0,0,0.3),0px_15px_12px_rgba(0,0,0,0.22)]'/></button>
        <button onClick={increaseTemp}><img src={props.plus} alt='minus button' width='70' height='70' className='border-2 border-white rounded-full shadow-[0px_19px_38px_rgba(0,0,0,0.3),0px_15px_12px_rgba(0,0,0,0.22)] hover:bg-white' /></button>
      </div>
    </main>
    )
}

export default Main