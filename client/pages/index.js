
import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  // axios.get('/api/users/currentuser')
  console.log(currentUser);
  return <h1>Landing page</h1>
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);

  const { data } = await client.get('/api/users/currentuser');

  return data;
};

export default LandingPage;