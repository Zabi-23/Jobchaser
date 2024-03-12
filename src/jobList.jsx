import React from 'react'
import Job from './job'

function JobsList({ jobs }) {
  return (
    <div>
      {jobs.length > 0 ? (
        jobs.map((job) => <Job key={job.id} job={job} />)
      ) : (
        <p>Inga jobb tillgängliga för tillfället.</p>
      )}
    </div>
  );
}

export default JobsList;

