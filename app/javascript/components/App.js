import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Greeting from './Greeting';
import Users from './Users';
import Counter from './Counter';

const App = () => (
  <Routes>
    <Route path="/" element={<Users />} />
    <Route path="/counter" element={<Counter />} />
    <Route path="/greeting" element={<Greeting />} />
  </Routes>
);

export default App;
