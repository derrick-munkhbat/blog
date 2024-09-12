const BlogList = ({ blogs, title }) => {
  if (!title) {
    title = "Blog List"; // default title
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="blog-list">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>No blogs to display.</p>
      </div>
    );
  }

  return (
    <div className="blog-list">
      <h2 className="text-2xl font-bold">{title}</h2>
      {blogs.map((blog) => (
        <div className="blogs-preview" key={blog.id}>
          <h2 className="text-2xl font-bold text-red-600">{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>{blog.content}</p> {/* render blog post content */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
