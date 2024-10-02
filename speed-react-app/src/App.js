import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmitArticleForm from './SubmitArticleForm';
import Moderation from './moderation';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/submit-article" element={<SubmitArticleForm/>} />
          <Route path="/moderation" element={<Moderation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
