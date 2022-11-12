function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ handlePageChange, totalPages, currentPage }) {
  let pages = createArrayOfSize(0).map((a) => {
    <button
    onClick={() => handlePageChange(i + 1)}
    disabled={currentPage === i + 1}
    data-testid="page-btn">{i+1}</button>;
  });
  return <div>{pages}</div>;
}

export default Pagination;
