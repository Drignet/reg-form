import Header from './Header'
import Main from './Main'
import plus from '../images/mathematics-sign-plus-round-icon.svg'
import minus from '../images/mathematics-sign-minus-round-icon.svg'

const title = 'Temperature'
const App = () => {
  return (
    <div className='bg-green-900 text-white w-4/5 p-8 text-center fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-2xl border-2 border-green-500 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]'>
      <Header title={title} />
      <Main plus={plus} minus={minus}/>
    </div>
    )
}

export default App