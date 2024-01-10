async function handler(req, res) { // can be called anything you like
    const response = await fetch('http://springboot-userservice:8081/getUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    res.json(data)
  }
  
  export default handler;
  