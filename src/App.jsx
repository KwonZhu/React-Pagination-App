import axios from "axios";
import { Pagination } from "./components/Paginations";
import { Posts } from "./components/Posts";
import { useEffect, useState } from "react";

function App() {
  // all data fetched from the API
  const [posts, setPosts] = useState([]);

  // default page is No.1, it will be changed by pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true); // Show loading while fetching
      const url = "https://jsonplaceholder.typicode.com/posts";
      const res = await axios.get(url);
      console.log("res", res);
      setPosts(res.data);
      setLoading(false); // Stop loading when done
    };
    fetchPost();
  }, []);

  // Slice the array to show only the posts for the current page
  // For example, on page 1, indexOfLastPost=10, indexOfFirstPost=0, currentPosts=posts[0...9]. posts[10...19] for page 2
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // changed currentPage by Pagination component, then trigger re-calculation of currentPosts
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="text-primary">My Blog</h1>
      <Posts currentPosts={currentPosts} loading={loading} />
      <Pagination
        paginate={paginate} // callback to change currentPage
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        totalPosts={posts.length} // total posts for calculating maximum pageNumber
      />
    </div>
  );
}

export default App;
