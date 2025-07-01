import { useState } from 'react'
import FormCard from '../component/FormCard';

const FormPages = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, { name, email, password, confirm, quote }])

    if (name.trim().length < 6) setNameError(true)
    // if (!email.includes('@')) setNameError('error')

    setName("")
    setPassword("")
    setConfirm("")
    setEmail("")
    setQuote("No Quotes, just be good!!")
    console.log("Form submitted with name:", name);
  };


  const [name, setName] = useState("")
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [quote, setQuote] = useState("No Quotes, just be good!!")

  const [users, setUsers] = useState([])
  // const submitForm = () => {

  // }
  return (
    <div>


      <form onSubmit={handleSubmit} className=' border-2 w-[500px] px-10 bg-amber-300 flex flex-col gap-10 py-10'>
        <div >
          <label htmlFor="full_name">Full Name</label>
          <input type="text" id='full_name' placeholder='e.g Untitled Dev' className=' border-2' value={name} onChange={(e) => {
            setName(e.target.value)
            if (nameError) {
              setNameError('')
            }
          }} /> {name}
        </div>
        {nameError && (<p>name is too short</p>)}
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' placeholder='joe@gmail.com' className=' border-2' value={email} onChange={(e) => setEmail(e.target.value)} /> {email}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id='password' placeholder='abc12!' className=' border-2' value={password} onChange={(e) => setPassword(e.target.value)} /> {password}
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="text" id='confirm_password' placeholder='same as password' className=' border-2' value={confirm} onChange={(e) => setConfirm(e.target.value)} /> {confirm}
        </div>
        <div>
          <label htmlFor="quote">Quote of the Day</label>
          <textarea id="quote" className=' border-2' value={quote} onChange={(e) => setQuote(e.target.value)} /> {quote}
        </div>
        <button className=' border-2' type='submit'>Submit</button>
      </form>



      {/* {users.map((data, index) => (
          <div key={index}>
          </div>
          ))} */}
      <FormCard />
    </div>
  )
}

export default FormPages