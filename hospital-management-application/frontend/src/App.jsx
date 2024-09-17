
import React from 'react';
// import './components/csss/AppComponent..css'; 
// import '/components/csss/AppComponent.css'; 
import './App.css'; 
import { Provider } from 'react-redux';
import store from './store/store';
import Patients from './components/Patients';
import Adpatients from './components/Adpatients';
import Navbar from './components/Navbar';




function App() {

  return (
    
    <>
           
              <Provider store={store}>
                  <div className="AppContainer">
                      <Navbar/>
                      <Adpatients/>
                      <Patients/>
                  </div>
              </Provider>

      </>       
      );
}

export default App

