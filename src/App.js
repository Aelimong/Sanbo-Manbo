import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
