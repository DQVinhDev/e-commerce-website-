
import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import {DataProvider} from './globalState'
import Header from './components/headers/Header'
import MainPage from './components/mainpages/pages'
import Footer from "./components/footer/Footer";



function App() {
  return (
    <DataProvider>
        <Router>
          <div className="App">
            
            <Header />
            <MainPage/>
            <Footer/>
          </div>
        </Router>
    </DataProvider>
   
  );
}



export default App;
