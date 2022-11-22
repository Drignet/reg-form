import {useState, useEffect} from 'react'

const Button = (props) => {
  const [count , setCount] = useState(0)
  const prev = () => setCount(count - 1)
  const reset = () => setCount(0)
  const next = () => setCount(count + 1)
  return (
    <div className='text-white bg-gray-700 shadow-xl rounded-lg'>
      <p className='text-9xl text-center p-2' style={count < 0 ? {color: 'red'} : count == 0 ? {color: 'white'} : {color: 'green'}}>{count}</p>
      <div className='flex gap-4 bg-green-500 p-4 rounded-b-lg'>
        <button onClick={prev}><img src={props.prev} alt='prev' width='80' height='80' className='shadow-xl rounded-full' /></button>
        <button onClick={reset}><img src={props.reset} alt='reset' width='80' height='80' className='shadow-xl rounded-full border-2 border-red-900' /></button>
        <button onClick={next}><img src={props.next} alt='next' width='80' height='80' className='shadow-xl rounded-full' /></button>
      </div>
    </div>
    )
}
export default Button