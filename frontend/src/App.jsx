import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecentPost from './components/RecentPost';
import HowitWork from './components/HowitWork';
import RecentPostsPage from './pages/RecnetPostPage';
import HowItWorkPage from './pages/HowitWorkPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='bg-neutral-800 text-gray-50 min-h-screen w-full
      '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recentposts" element={<RecentPostsPage />} />
          <Route path='howitwork' element = {<HowItWorkPage/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
