import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RuthEllisCenterCaseStudy from './pages/RuthEllisCenterCaseStudy';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/case-studies/ruth-ellis-center"
            element={<RuthEllisCenterCaseStudy />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
