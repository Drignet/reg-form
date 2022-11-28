import '../styles/form.css'
import {useState} from 'react'

const Form = (props) => {
  const [formData , setData] = useState({firstName: '', lastName: '', email: ''})
  const {firstName, lastName, email} = formData

const [submit, setSubmit] = useState(false)
const [valid, setValid] = useState(false)

  const onChangeFirst = (e) => {
  setData({...formData , firstName: e.target.value})
}

const onChangeLast = (e) => {
  setData({...formData , lastName: e.target.value})
}

const onChangeEmail = (e) => {
  setData({...formData , email: e.target.value})
}

const onSubmit = (e) => {
  e.preventDefault()
  if(firstName && lastName && email){
    setValid(true)
  }
  setSubmit(true)
}
  return (
    <form onSubmit={onSubmit}>
      {submit && valid ? <h1 class='success-text'>Successful, Thank you!</h1> : null}
      <input type='text' name='firstname' value={firstName} placeholder='First Name' onChange={onChangeFirst} />
      {submit && firstName === '' ? <p>Firt Name cannot be empty</p> : null}
      <input type='text' name='lastname' value={lastName} placeholder='Last Name' on onChange={onChangeLast} />
      {submit && lastName === '' ? <p>Last Name cannot be empty</p> : null}
      <input type='email' name='email' value={email} placeholder='Email' onChange={onChangeEmail} />
      {submit && email === '' ? <p>Email cannot be empty</p> : null}
      <button>Register</button>
    </form>
    )
}
export default Form