import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
