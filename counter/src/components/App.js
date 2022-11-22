import Button from './Button'
import Header from './Header'
import reset from '../images/icons8-close.svg'
import prev from '../images/previous-icon.svg'
import next from '../images/next-icon.svg'

const App = () => {
  return(
    <div className='fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-6 bg-gray-800 shadow-xl'>
      <Header />
      <Button prev={prev} reset={reset} next={next} />
    </div>
    )
}

export default App