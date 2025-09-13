
import {useState} from "react"
import "./App.css"
function App()
{
  const [count,SetCount]=useState(0)
  const [email,SetEmail]=useState("")
  const [password,SetPassword]=useState("")
  const incree=()=>{
   SetCount((num)=>num+1)
  }
  const decree=()=>{
   SetCount((num)=>num-1)
  }

  const handleSubmit = (event) =>
  {
    event.presentDefault();
    alert(`Email: ${email}\n password: ${password}\n you are logged in`)
  }

const handleChange = (event) =>
  {
    console.log(event.target.name)
    console.log(event.target.value)
  }


  const handleEmail=(event)=>
  {
    SetEmail(event.target.value)
  }
  const handlepassword=(event)=>
  {
    SetPassword(event.target.value)
  }
  
  return(
   <div>
    <p>{count}</p>
    <button id="btn" onClick={incree}>INCREMENT</button>
    <button id="btn" onClick={decree}>DECREMENT</button>
    <br></br>
    <br></br>
    <br></br>
    <form onSubmit={handleSubmit}>
      <input type="email" name="Email" onChange={handleEmail}/>
      <input type="password" name="Password" onChange={handlepassword}/>
      <button>SUBMIT</button>
    </form>
   </div>
  )
}
export default App

//event handling
//onClick
//onChange
//onSubmit