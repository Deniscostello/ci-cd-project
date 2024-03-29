async function handler(req, res) { // can be called anything you like
  const response = await fetch('http://springboot-imageservice:8080/getAllImages', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  res.json(data)
}

export default handler;
