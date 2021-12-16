import axios from 'axios';

// Need to update this every 2h buy running
// ...tracker$ ngrok http 3000
export default axios.create({
  baseURL: 'http://f0ca-84-203-94-164.ngrok.io'
});
// http://6a93-84-203-94-164.ngrok.io

// Can test that url in browser, should get {"error":"You have to login."} on webpage.
