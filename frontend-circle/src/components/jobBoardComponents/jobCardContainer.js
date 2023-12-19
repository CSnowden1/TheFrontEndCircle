import React, { useState } from 'react';
import JobBoardCard from './jobCard';

const PAGE_SIZE = 20; // Number of jobs per page

function PaginatedJobList({ jobs }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range of jobs to be displayed
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const selectedJobs = jobs.slice(startIndex, startIndex + PAGE_SIZE);

  // Calculate total number of pages
  const pageCount = Math.ceil(jobs.length / PAGE_SIZE);

  // Change page handler
  const changePage = (newPage) => {
    setCurrentPage(newPage);
  }

  return (
    <div>
      <div className="job-list">
        {selectedJobs.map(job => <JobBoardCard key={job._id} job={job} />)}
      </div>

      <PaginationControls pageCount={pageCount} currentPage={currentPage} onPageChange={changePage} />
    </div>
  );
}

export default PaginatedJobList;
