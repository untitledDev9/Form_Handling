import { useState } from 'react'
import FormCard from '../component/FormCard';
import backgroungImage from "../assets/undraw_business-man_0ifc.svg";

const FormPages = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, { name, email, password, confirm, quote }])

    if (name.trim().length < 6) setNameError(true)
    if (!email.includes('@')) setEmailError(true);
    if (password.trim().length < 4) setPasswordError(true);
    if (confirm !== password) setConfirmError(true);


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
  const [emailError, setEmailError] = useState(false)

  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)

  const [confirm, setConfirm] = useState("")
  const [confirmError, setConfirmError] = useState(false)

  const [quote, setQuote] = useState("No Quotes, just be good!!")

  const [users, setUsers] = useState([])
  // const submitForm = () => {

  // }
  return (
    <div className=" flex justify-center items-center h-screen pl-10 pr-32"> 

<div className=' w-[50%] flex items-center justify-center'>
  <img src={backgroungImage} alt=""  className=' w-[70%]'/>
</div>


      <form onSubmit={handleSubmit} className=' w-[50%] px-10 shadow-[0_10px_60px_rgba(23,184,166,0.7)] flex flex-col gap-10 py-10 rounded-2xl'>
        <div  className='flex flex-col gap-2'>
          <label htmlFor="full_name">Full Name:</label>
          <input type="text" id='full_name' placeholder='e.g Untitled Dev' className=' border-b-2 h-10' value={name} onChange={(e) => {
            setName(e.target.value)
            if (nameError) setNameError('')
          }} /> {name}
          {nameError && (<p>name is too short</p>)}
        </div>




        <div className='flex flex-col'>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' placeholder='joe@gmail.com' className=' border-2' value={email} onChange={(e) => {
            setEmail(e.target.value)
            if (emailError) setEmailError("")
          }} /> {email}
          {emailError && (<p>put a valid email</p>)}
        </div>



        <div className='flex flex-col'>
          <label htmlFor="password">Password</label>
          <input type="text" id='password' placeholder='abc12!' className=' border-2' value={password} onChange={(e) => {
            setPassword(e.target.value)
            if (passwordError) setPasswordError("")
          }} /> {password}
          {passwordError && (<p>add more srtdvdv</p>)}
        </div>



        <div className='flex flex-col'>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="text" id='confirm_password' placeholder='same as password' className=' border-2' value={confirm} onChange={(e) => {
            setConfirm(e.target.value)
            if (confirm) setConfirmError("")
            }} /> {confirm}
          {confirmError && (<p>password doest match </p>)}
        </div>



        <div className='flex flex-col'>
          <label htmlFor="quote">Quote of the Day</label>
          <textarea id="quote" className=' border-2 max-h-[100px]' value={quote} onChange={(e) => setQuote(e.target.value)}/> {quote}
        </div>
        <button className=' border-2' type='submit'>Submit</button>
      </form>



      {/* {users.map((data, index) => (
          <div key={index}>
          </div>
          ))} */}
      {/* <FormCard /> */}
    </div>
  )
}

export default FormPages