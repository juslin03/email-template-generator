import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import NewModelComp from './creer_modele';
import ModelsList from './ModelsList';
import Navbar from './Navbar';
import Edition from './edition_espace';
import Info from './info';

class App extends React.Component {

  constructor(props) {
    super(props); // this is required
    this.state = {
      nom: '',
      description: '',
      sourcehtml: '',
      remarques: '',
      donnees_de_retour: null,
      openModal:false,
      contentlogo:"https://img.lovepik.com/element/40133/7716.png_1200.png",
      contenturl:'https://dipafrica.com/',
      modeles:[]
    }
  }


  render() {
    
    return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<ModelsList/>} />
            <Route path="/modele" element={<NewModelComp/>}/>
            <Route path="/edition" element={<Edition/>}/>
            <Route path="/info" element={<Info/>}/>
          </Routes>
          <NotificationContainer/>
        </BrowserRouter>
    )
  }
}

export default App;