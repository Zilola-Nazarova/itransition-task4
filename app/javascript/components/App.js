import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetingsSlice';

import Greeting from './Greeting';
import Counter from './Counter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};

export default App;
