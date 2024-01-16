import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleCard from './pages/SingleCard/SingleCard';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const App = () => {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:id" element={<SingleCard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
