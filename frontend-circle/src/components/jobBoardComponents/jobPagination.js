import React from 'react';

function PaginationControls({ pageCount, currentPage, onPageChange }) {
  return (
    <div className="pagination-controls">
      {[...Array(pageCount).keys()].map(number => (
        <button
          key={number + 1}
          onClick={() => onPageChange(number + 1)}
          disabled={currentPage === number + 1}
        >
          {number + 1}
        </button>
      ))}
    </div>
  );
}

export default PaginationControls;
