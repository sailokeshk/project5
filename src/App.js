
import { useState } from 'react';
import './App.css';
import Dynstrliterals from './Section2labprog/DynStrliterals';
import { ForceUpdateWrapperfuncomp } from './Section2labprog/CntrbtnusingFuncomp';
import { Hookscounterbtn } from './Section3labprog/Counterbtn';
import Iterativerender from './Section3labprog/Iterativerender';

function App(){
    return(
    <div className="App">

      <Dynstrliterals/>
      <ForceUpdateWrapperfuncomp/>
      <Hookscounterbtn/>
      <Iterativerender/>
    </div>
  );

}
  export default Dynstrliterals;  

// function App(){
 
//    const [messageFromChild, setMessageFromChild] = useState("");

//   // Function to receive data from child
//   const handleChildData = (messageFromChild) => {
//     setMessageFromChild(messageFromChild);
//   };
//   return(
//     <div class-Name="App">
//       <ForceUpdateWrapperfuncomp/>
//       <Hookscounterbtn/>   
      
//       <h2>Parent Component</h2>
//       <p><strong>Message from Child:</strong> {messageFromChild}</p>
//       <Student name="Aarav" sendMessage={handleChildData} /> 

     

//     </div>
//   );

// }
// export default App;








  
  
  
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



