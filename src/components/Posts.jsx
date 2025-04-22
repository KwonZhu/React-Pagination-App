export const Posts = ({ currentPosts, loading }) => {
  if (loading) {
    return <h2>...Loading</h2>;
  }
  return (
    <ul className="list-group">
      {/* Check if there are any posts to show */}
      {currentPosts.length > 0 &&
        currentPosts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
    </ul>
  );
};
