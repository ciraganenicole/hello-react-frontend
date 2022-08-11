import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import greetingsActions from './redux/greetings/actions';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);
  useEffect(() => dispatch(greetingsActions()), []);
  return (
    <div>
      <h1>Greetings</h1>
      <p>{greeting || 'Searching please wait...'}</p>
    </div>
  );
};

export default Greeting;