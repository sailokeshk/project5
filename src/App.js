
import { useState } from 'react';
import './App.css';
import ApiUseEffect from './Section3labprog/APIintegration';
import SimpleForm from './Section3labprog/React_Formprog';


function App(){
    return(
    <div className="App">

      <ApiUseEffect/>
      <SimpleForm/>
   
    </div>
  );

}
export default App;

// function App(){
 
//    const [messageFromChild, setMessageFromChild] = useState("");
//   // Function to receive data from child
//   const handleChildData = (messageFromChild) => {
//     setMessageFromChild(messageFromChild);
//   };
//   return(
//     <div class-Name="App">  
     
//       <h2>Parent Component</h2>
//       <p><strong>Message from Child:</strong> {messageFromChild}</p>
//       <Student name="Aarav" sendMessage={handleChildData} />    
//     </div>
//   );
// }









  
  
  
  // const [messageFromChild, setMessageFromChild] = useState("");

  // // Function to receive data from child
  // const handleChildData = (msg) => {
  //   setMessageFromChild(msg);
  // };



  /* <Hookscounterbtn/>
   <UseEffectsfun/>
   <Iterativerender/>
 
   <h2>Parent Component</h2>
   <p><strong>Message from Child:</strong> {messageFromChild}</p>
   <Student name="Aarav" sendMessage={handleChildData} /> */



