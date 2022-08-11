const getGreeting = async () => {
  const response = await fetch('http://localhost:3000/greeting', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
  });
  const data = await response.json();
  return data.message;
};

export default getGreeting;
