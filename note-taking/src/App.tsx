import "bootstrap/dist/css/bootstrap-reboot.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hi</h1>}></Route>
    </Routes>
  );
}

export default App;
