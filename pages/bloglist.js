const BlogList = ({blogs, title}) => {
  

  return (
    <div className="blog-list">
      <h2 className="text-2xl font-bold">{title}</h2>
      {blogs.map((blog) => (
        <div className="blogs-preview" key={blog.id}>
          <h2 className="text-2xl font-bold text-red-600">{blog.title}</h2>
          <p>Written by {blog.author}</p>
          
        </div>
      ))}
    </div>
  );
};

export default BlogList;
