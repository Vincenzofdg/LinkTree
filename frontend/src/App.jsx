import { Routes, Route } from "react-router-dom";

import Login from './routes/Login';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

function App() {
     return (
          <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/home" element={<Home />} />
               <Route path="*" element={<NotFound />} />
          </Routes>
     );
}

export default App;
