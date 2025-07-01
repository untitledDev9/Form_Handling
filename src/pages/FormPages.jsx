import { useState } from 'react'

const FormPages = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [quote, setQuote] = useState("")

  const [users, setUsers] = useState([])
  
  return (
    <div>


      <form className=' border-2 w-[500px] px-10 bg-amber-300 flex flex-col gap-10 py-10'>
        <div >
        <label htmlFor="full_name">Full Name</label>
        <input type="text" id='full_name' className=' border-2' value={name} onChange={(e) => setName(e.target.value)}/> {name}
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' className=' border-2' value={email} onChange={(e) => setEmail(e.target.value)}/> {email}
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input type="text" id='password' className=' border-2' value={password} onChange={(e) => setPassword(e.target.value)}/> {password}
        </div>
        <div>
        <label htmlFor="confirm_password">Confirm Password</label>
        <input type="text" id='confirm_password' className=' border-2' value={confirm} onChange={(e) => setConfirm(e.target.value)}/> {confirm}
        </div>
        <div>
          <label htmlFor="quote">Quote of the Day</label>
        <textarea id="quote" className=' border-2' value={quote} onChange={(e) => setQuote(e.target.value)} /> {quote}
        </div>
        <button className=' border-2' type='submit'>Submit</button>
      </form>



      {users.map((data, index) => (
        setUsers(
          [...users, {name,email,password,confirm,quote}]
          <div key={index}>
            <h1>{data.name}</h1>
          </div>
        )
      ))}
    </div>
  )
}

export default FormPages