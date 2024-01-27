import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import Blog from "./Blog";
import CreateBlog from "./CreateBlog";
import preblog from "./info";
import Filtered from "./Filtered";
function App() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
    function addBlog(newBlog) {
      setBlogs((prevBlogs) => {
        return [...prevBlogs, newBlog];
      });
    }

  const handleTitleFilter = (query) => {
    setSearchQuery(query);
  };
  const handleTitleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
      };

  const filteredPreblogs = preblog.filter(
    (blog) =>
      (searchQuery === "" || blog.title.toLowerCase().includes(searchQuery))
  );
  const filteredUserBlogs = blogs.filter(
    (blog) =>
      (searchQuery === "" || blog.title.toLowerCase().includes(searchQuery))
  );

  return (
    <div>
      <Header />
      <Search onSearch={handleTitleSearch} />
      <Filtered onTitleFilter={handleTitleFilter} />
      <CreateBlog onAdd={addBlog} />
      
      {filteredPreblogs.map((blog, index) => (
        <Blog
          imgURL={blog.imgURL}
          key={index}
          id={index}
          title={blog.title}
          content={blog.content}
          theme={blog.theme}
          description={blog.description}
        />
      ))}
      {filteredUserBlogs.map((blog, index) => (
        <Blog
          key={index}
          id={index}
          title={blog.title}
          content={blog.content}
          theme={blog.theme}
          description={blog.description}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;



