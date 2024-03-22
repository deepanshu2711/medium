import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/signup";
import { Signin } from "./pages/signin";
import { Blog } from "./pages/blog";
import { Blogs } from "./pages/blogs";
import { Publish } from "./components/publish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
