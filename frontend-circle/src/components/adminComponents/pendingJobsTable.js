import react from 'react';


export default function pendingJobs({jobData}) {

    return <>
        <div> <h3>Pending Job Submissions</h3>
          <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Created At</th>
          <th>Description</th>
          <th>Job Location Type</th>
          <th>Location</th>
          <th>Status</th>
          <th>Title</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {jobData.map((job, index) => (
          <tr key={index}>
            <td>{job.company}</td>
            <td>{job.createdAt}</td>
            <td>{job.description}</td>
            <td>{job.jobLocationType}</td>
            <td>{job.location}</td>
            <td>{job.status}</td>
            <td>{job.title}</td>
            <td>{job.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
          </div>
    
    </>
}