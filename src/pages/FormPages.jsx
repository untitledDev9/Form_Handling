import { useState } from 'react'
import FormCard from '../component/FormCard';
import backgroungImage from "../assets/undraw_business-man_0ifc.svg";

const FormPages = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, { name, email, password, confirm, quote }])

    if (name.trim().length <= 6) {
      setNameError(true)
      setName(name)
    } else {
      setName('')
    }

    if (!email.includes('@')) {
      setEmailError(true)
      setEmail(email)
    } else {
      setEmail('')
    }
    if (password.trim().length < 4) {
      setPasswordError(true)
      setPassword(password)
    } else {
      setPassword("")
    }
    if (confirm !== password) {
      setConfirmError(true)
      setConfirm(confirm)
    } else {
      setConfirm("")
    }




    // setPassword("")
    // setConfirm("")
    // setEmail("")
    setQuote("No Quotes, just be good!!")
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
    <section className=" flex justify-center items-center h-screen pl-10 pr-32">

      <main className=' w-[50%] flex items-center justify-center'>
        <img src={backgroungImage} alt="" className=' w-[70%]' />
      </main>


      <form onSubmit={handleSubmit} className=' w-[50%] px-10 shadow-[0_10px_60px_rgba(23,184,166,0.7)] flex flex-col gap-10 py-10 rounded-2xl'>
        <div>



          <label htmlFor="full_name">Full Name:</label>
          <input type="text" id='full_name' placeholder='e.g Untitled Dev' value={name} onChange={(e) => {
            setName(e.target.value)
            if (nameError) {
              setNameError('')
              setEmailError("")
              setPasswordError("")
              setConfirmError("")
            }
          }}
            className=' border-2 input focus:outline-none focus:border-0 focus:border-b-2 focus:border-[#17B8A6] placeholder:text-[#6969698b] placeholder:text-[13px] placeholder:font-light transition-all duration-200 ease-in'
          />
          {nameError && (<p>Name is too short 🤦‍♂️</p>)}
        </div>




        <div className='flex flex-col'>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' placeholder='joe@gmail.com' value={email} onChange={(e) => {
            setEmail(e.target.value)
            if (emailError) {
              setNameError('')
              setEmailError("")
              setPasswordError("")
              setConfirmError("")
            }
          }}
            className=' border-2 input focus:outline-none focus:border-0 focus:border-b-2 focus:border-[#17B8A6] placeholder:text-[#6969698b] placeholder:text-[13px] placeholder:font-light transition-all duration-200 ease-in'
          />
          {emailError && (<p>Please enter a valid email</p>)}
        </div>



        <div className='flex flex-col'>
          <label htmlFor="password">Password</label>
          <input type="text" id='password' placeholder='abc12!' value={password} onChange={(e) => {
            setPassword(e.target.value)
            if (passwordError) {
              setNameError('')
              setEmailError("")
              setPasswordError("")
              setConfirmError("")
            }
          }}
            className=' border-2 input focus:outline-none focus:border-0 focus:border-b-2 focus:border-[#17B8A6] placeholder:text-[#6969698b] placeholder:text-[13px] placeholder:font-light transition-all duration-200 ease-in'
          />
          {passwordError && (<p>Password must be 6 characters long</p>)}
        </div>



        <div className='flex flex-col'>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="text" id='confirm_password' placeholder='same as password' value={confirm} onChange={(e) => {
            setConfirm(e.target.value)
            if (confirm) {
              setNameError('')
              setEmailError("")
              setPasswordError("")
              setConfirmError("")
            }
          }}
            className=' border-2 input focus:outline-none focus:border-0 focus:border-b-2 focus:border-[#17B8A6] placeholder:text-[#6969698b] placeholder:text-[13px] placeholder:font-light transition-all duration-200 ease-in'
          />
          {confirmError && (<p>password does'nt match !! </p>)}
        </div>



        <div className='flex flex-col'>
          <label htmlFor="quote">Quote of the Day</label>
          <textarea id="quote" className='border-2 h-[60px] focus:border-[#17B8A6] max-h-[100px]' value={quote} onChange={(e) => setQuote(e.target.value)} />
        </div>
        <button className=' border-2' type='submit'>Submit</button>
      </form>

      {/* <Link>
            <p>view all registerd form</p>
      </Link> */}



      {/* {users.map((data, index) => (
          <div key={index}>
          </div>
          ))} */}
      {/* <FormCard /> */}
    </section>
  )
}

export default FormPages