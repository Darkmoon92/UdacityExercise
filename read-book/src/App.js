import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './pages/Main';
import Search from './pages/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}>
      </Route>
      <Route path="/search" element={<Search/>}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
