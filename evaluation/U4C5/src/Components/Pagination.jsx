function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ handlePageChange, totalPages, currentPage }) {
  let pages = createArrayOfSize(totalPages).map((a, i) => {
    return <button data-testid="page-btn"
    onClick={() => handlePageChange(i + 1)}
    disabled={currentPage === i + 1}>{i+1}</button>;
  });
  return <div>{pages}</div>;
}

export default Pagination;
