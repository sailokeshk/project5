import React, {useState} from 'react'

// const Formsexample = () => {
//     const [userName, setUserName] = useState("");
//     const getUserName=(event)=>{
//         setUserName(event.target.value);
//     }
//   return (
//     <section className='formSection'>
//         <h2> {userName} </h2>
//         <div>
//             <input type="text" placeholder='Enter your name' onChange={getUserName}/>
//             <br/>
//             <button className='submitBtn'>Submit</button> 
//         </div>
//     </section>
//   )
// }


const Formsexample = () => {
  return (
    <div className="container">
      <h1>Form in React</h1>
        <form>
          <label htmlFor="firstname">First Name</label>
          <input type="text" placeholder='Enter First name' > </input>
                    
          <label htmlFor="lastname">Last Name</label>
          <input type="text" placeholder='Enter Last name' > </input>

          <label htmlFor="Email">Email</label>
          <input type="email" placeholder='Enter Email name' > </input>
        </form>
    </div>
  )
}

export default Formsexample



