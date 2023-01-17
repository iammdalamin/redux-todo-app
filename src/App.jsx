import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
function App() {
  const todoItems = useSelector((state) => state.value);
  console.log(todoItems);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateTodo />} />
          <Route path="*" element={<h1>Error Page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
