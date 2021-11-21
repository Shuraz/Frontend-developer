import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux"
import {configureStore} from '@reduxjs/toolkit';
import Profile from './redux/components/Profile';
import Login from './redux/components/Login';
import userReducer from './redux/features/user'
import useTheme from './redux/features/theme'
import ChangeColor from './redux/components/ChangeColor';

const store = configureStore({
    reducer:{
      user2: userReducer,
      theme2: useTheme
    }
});
function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Profile/>
        <Login/>
        <ChangeColor/>
      </Provider>
    </div>
  );
}

export default App;
