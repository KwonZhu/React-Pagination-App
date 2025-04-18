import { Pagination } from "./components/Paginations";
import { Posts } from "./components/Posts";

function App() {
  return (
    <div className="container">
      <h1 className="text-primary">My Blog</h1>
      <Posts />
      <Pagination />
    </div>
  );
}

export default App;
