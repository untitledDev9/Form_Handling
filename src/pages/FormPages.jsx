import { useState } from 'react'
import FormCard from '../component/FormCard';
import backgroungImage from "../assets/undraw_business-man_0ifc.svg";
// import { Link } from 'react-router-dom';

const FormPages = () => {

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;


    setNameError(false)
    setEmailError(false)
    setPasswordError(false)
    setConfirmError(false)

    if (name.trim().length <= 6) {
      setNameError(true);
      isValid = false
    };
    if (!email.includes("@")) {
      setEmailError(true)
      isValid = false
    }
    if (password.trim().length < 4) {
      setPasswordError(true)
      isValid = false
    }
    if (confirm !== password) {
      setConfirmError(true)
      isValid = false
    }

    if (!isValid) return;

    setUsers([...users, { name, email, password, confirm, quote }])

    console.log("Glitch Submitted the Form :", name, email, password, confirm);

    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");
    setQuote("No Quotes, just be Good")

  }

  return (
    <>


      <section className=" flex justify-center items-center h-screen pl-10 pr-32 mb-20
      max-tablet:block  max-tablet:p-10 max-tablet:mb-0 max-tablet:py-24
      max-mobile:px-4 max-mobile:py-10
      ">

        <main className=' w-[50%] flex items-center justify-center
        max-tablet:hidden
        '>
          <img src={backgroungImage} alt="" className=' w-[70%]' />
        </main>


        <form onSubmit={handleSubmit} className=' w-[50%] px-10 shadow-[0_10px_60px_rgba(23,184,166,0.7)] flex flex-col gap-10 py-10 rounded-2xl
        max-tablet:w-[70%] max-tablet:mx-auto
        max-mobile:w-full
        '>
          <div>



            <label htmlFor="full_name">Full Name:</label>
            <input type="text" id='full_name' placeholder='e.g Untitled Dev' value={name} onChange={(e) => {
              setName(e.target.value)
              if (nameError) {
                setNameError(false)

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

                setEmailError(false)

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

                setPasswordError(false)

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

                setConfirmError(false)
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
          {/* <Link to='/form-card' >
            <h2 className=' text-[#fff] font-semibold bg-[#17B8A6] py-2 rounded text-center mx-auto'>View all registerd form</h2>
      </Link> */}
        </form>




      </section>

      
<section className='  flex gap-22 flex-wrap items-center justify-center py-18'>
    {users.map((data, index) => (
      <section key={index} className="w-fit">
        <FormCard
          name={data.name}
          email={data.email}
          quote={data.quote}
        />
      </section>
    ))}
</section>


    </>
  )
}

export default FormPages