import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AxiosTest from './axios/AxiosTest';
import MultipleRequest from './axios/MultipleRequest';
import ReducerTest1 from './reducer_hook/ReducerTest1';
import ReducerTest2 from './reducer_hook/ReducerTest2';
import WeatherApp from './graphql/WeatherApp'
import UpdatedHelloComp from './HOC/UpdatedHelloComp';
import RouteExample from './react-route/RouteExample';
import CurrencyApp from './graphql/currency/CurrencyApp';
import TestState from './state/TestState';
import UseMemoApp from './useMemo/UseMemoApp';
import IfTest from './conditions/IfTest';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AxiosTest/> */}
    {/* <MultipleRequest/> */}
    {/* <ReducerTest1/> */}
    {/* <ReducerTest2/> */}
    {/* <WeatherApp/> */}
    {/* <UpdatedHelloComp/> */}
    {/* <RouteExample/> */}
    {/* <TestState/> */}
      {/* <UseMemoApp/> */}
      <IfTest/>

    {/* <CurrencyApp/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
