export const Pagination = ({
  paginate,
  postsPerPage,
  currentPage,
  totalPosts,
}) => {
  const pageNumber = [];
  //5.3 → 6 pages (it needs 6 buttons to show all posts)
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <a
              href="#"
              className={`page-link ${
                currentPage === number ? "active-page" : ""
              }`}
              onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
