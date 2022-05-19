
import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import {DataProvider} from './globalState'
import Header from './components/headers/Header'
import MainPage from './components/mainpages/pages'


function App() {
  return (
    <DataProvider>
        <Router>
          <div className="App">
            <Header />
            <MainPage/>
          </div>
        </Router>
    </DataProvider>
   
  );
}



export default App;
