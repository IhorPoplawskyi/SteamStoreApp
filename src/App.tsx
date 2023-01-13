import { FC } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import { store } from './redux/store';

const App: FC = () => {
  return (
    <>
    <Provider store={store}>
      <MainPage />
    </Provider>
    </>
  );
}

export default App;
