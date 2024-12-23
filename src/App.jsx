=import React from 'react';
import ReactDOM from 'react-dom/client';
import CardiologySection from './components/CardiologySection';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.StrictMode>
      <CardiologySection />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);