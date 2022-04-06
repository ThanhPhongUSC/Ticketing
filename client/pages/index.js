import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  // axios.get('/api/users/currentuser')
  console.log(currentUser);
  return <h1>Landing page</h1>
};

LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    //we are on the server!
    // request should be made to http://ingress-nginx-controller.ingress-nginx...
  } else {
    //we are on the browser
    //request can be made with a base url ''
    const { data } = await axios.get('/api/users/currentuser');

    return data;
  }
  return {};
}

export default LandingPage;