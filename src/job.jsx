import React from 'react';

function Job({ job }) {
  const { company, logo, position } = job;
  return (
    <div className='job-card'>
      <img src={logo} alt={company} className='job-logo' />
      <div className='job-details'>
        <h2>{company}</h2>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default Job;

