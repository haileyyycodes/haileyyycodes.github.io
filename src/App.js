import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AIWorkflowPage from './pages/AIWorkflowPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-workflow" element={<AIWorkflowPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
