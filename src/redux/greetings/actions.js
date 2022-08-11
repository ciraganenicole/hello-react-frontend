import Message from './services';

const greetingsActions = () => (dispatch) => {
  Message().then((data) => {
    dispatch({
      type: 'SET_GREETING',
      payload: data.message,
    });
  });
};

export default greetingsActions;
