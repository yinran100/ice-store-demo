import store from '@/store';
import { useEffect } from 'react';

const Home = () => {
  const [homeState, homeDispatchers] = store.useModel('home');
  useEffect(() => {
    homeDispatchers.getUserInfo();
    homeDispatchers.getUserInfo();
    homeDispatchers.getUserInfo();
  }, []);


  return (<div>
    <h2 >Welcome to icejs!</h2>
    <p>
      name: {homeState.name}
    </p>
    <p>
      id: {homeState.id}
    </p>
          </div>);
};

export default Home;
