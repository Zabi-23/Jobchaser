
import data from './Data'
import './App.css'
import { useState } from 'react'
import './App.css'
import JobsList from "./jobList"  

function App() {
   return(
     <div>
       <Job/>
       {/* <Header/> */}
     </div>
   )
   }
   
function Job(){

  const [jobs, setJobs] = useState(data);

  return (
    <div>
      { }
      <JobsList jobs={jobs} />
    </div>
  );
  
}

/* function Header(){
  return(
    <h1>
    <LIA/>
   </h1>
  )
} */

   export default App;

