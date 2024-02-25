import { useServerAction } from 'react-fetching-library';

const ServerAction = ({ action, children }) => {
  const { loading, payload, error, query } = useServerAction(action, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  return children(payload);
};

export default ServerAction;