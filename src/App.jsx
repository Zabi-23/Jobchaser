import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import data from './components/Data';
import './App.css'


function App() {
  const [jobs, setJobs] = useState(data);

  return (
    <div >
      <main>

      <Header />
      <JobList jobs={jobs} />
      </main>
    </div>
  );
}

/* function Job(){

  const [jobs, setJobs] = useState(data);

  return (
    <div>
      { }
      <JobsList jobs={jobs} />
    </div>
  );
  
} */

export default App;





