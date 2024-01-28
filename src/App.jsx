import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/Layout";
import {
  AboutUsPage,
  ContactsPage,
  CoursesPage,
  HomePage,
  NotFoundPage,
  PostsPage,
  SinglePostPage,
  SingleCoursePage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="courses/:slug" element={<SingleCoursePage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="posts/:id" element={<SinglePostPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
