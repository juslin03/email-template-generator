import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import NewModelComp from './creer_modele';
import ModelsList from './ModelsList';
import Navbar from './Navbar';
import Edition from './edition_espace';

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

componentDidMount() {
  this.getAllEmail()
}


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ // useState
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await fetch('http://192.168.1.24/models/new', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom: this.state.nom,
        description: this.state.description,
        sourcehtml:this.state.sourcehtml,
        remarques:this.state.remarques
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      this.setState({
        nom:'',
        description:'',
        sourcehtml:'',
        remarques:''
      })
    });

  }

  getAllEmail= async () =>{
    await fetch('http://192.168.1.24:8000/models')
    .then(res => res.json())
    .then(({data}) => {
    this.setState({
      modeles: data
    })
  });
  }

  SupprEmail= async(id)=>{
    await fetch('http://192.168.1.24/models/'+id, { method: 'DELETE' })
    .then(res=>res.json())
    
    .then(({suppr}) => {
      console.log({suppr});
    })
    }

  emailModel (content = {}) {
    const {sourcehtml,contentlogo,contenturl,contentnotice} = this.state;
    this.setState({openModal:true})

    var modele=JSON.stringify(sourcehtml)
    var contentnumber=Math.floor(Math.random()*1273)
    const regex = /\$\{([^}]+)\}/g;
    const variables = sourcehtml.match(regex);

    const logoVariable = variables.filter(variable => variable.includes('logo'));
    const urlVariable = variables.filter(variable => variable.includes('url'));
    const numberVariable = variables.filter(variable => variable.includes('number'));
    const logo = logoVariable.map(variable => variable.replace(/\$\{([^}]+)\}/g, `${this.state.contentlogo}`));
    const url = urlVariable.map(variable => variable.replace(/\$\{([^}]+)\}/g, `${this.state.contenturl}`));
    const number = numberVariable.map(variable => variable.replace(/\$\{([^}]+)\}/g, String(contentnumber)));

     // generate random values for the variables
     const values = variables !=null && variables.map(() => Math.random().toString(36).substring(7));
    
     // replace the variables with the random values
     const source = urlVariable !=null && urlVariable.reduce((acc, curr, i) => acc.replace(curr, url[i]), sourcehtml);  
     const source1 = logoVariable !=null && logoVariable.reduce((acc, curr, i) => acc.replace(curr, logo[i]), source);
     const source2 = numberVariable !=null && numberVariable.reduce((acc, curr, i) => acc.replace(curr, number[i]), source1);  



    if (modele.includes('${content.cid.logo}' )){
      modele=modele.replace('cid:${content.cid.logo}','https://random.imagecdn.app/500/150')}
   
    this.setState({sourcehtml:source2})
    console.log(source2)
  }

  
  render() {
    // const {nom,description,sourcehtml,remarques } = this.state;

    const {nom,description,sourcehtml,remarques} = this.state;
    const regex = /\$\{([^}]+)\}/g;
    const variables = sourcehtml.match(regex);
    // const logoVariable = variables.filter(variable => variable.includes('logo'));
    // const urlVariable = variables.filter(variable => variable.includes('url'));
    // const logo = logoVariable.map(variable => variable.replace(/[{}]/g, `${this.state.contentlogo}`));
    // const url = urlVariable.map(variable => variable.replace(/[{}]/g, `${this.state.contenturl}`));

    // generate random values for the variables
    const values = variables !=null && variables.map(() => Math.random().toString(36).substring(7));
    
    // replace the variables with the random values
    const source = variables !=null && variables.reduce((acc, curr, i) => acc.replace(curr, values[i]), sourcehtml);  
    
    console.log(this.state.modeles)

    //traitement de la source html
    return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<ModelsList/>} />
            <Route path="/modele" element={<NewModelComp/>}/>
            <Route path="/edition" element={<Edition/>}/>
          </Routes>
        </BrowserRouter>
    )
  }
}

export default App;