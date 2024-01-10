async function handler(req, res) { // can be called anything you like
    const response = await fetch('http://localhost:8081/getUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    res.json(data)
  }
  
  export default handler;
  