
// import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ThankYou from 'components/ThankYou';

// import {store} from 'store/store';
// import { Provider } from 'react-redux'


// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist';
// import LoginPage from 'components/LoginPage';
// import PrivateRoute from 'routes/PrivateRoute';
import View from 'components/Views';


// const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <View />
  {/* <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <Router>
        <Routes>

            <Route path='/' element={<App />} />
            <Route path="/thanks" element={<PrivateRoute><ThankYou /></PrivateRoute>}/>
            <Route path='/LoginPage' element={<LoginPage />} />
        </Routes>
    </Router>
    </PersistGate>
  </Provider> */}
    
    </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
