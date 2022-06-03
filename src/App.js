import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import NewModelComp from './creer_modele';
import ModelsList from './ModelsList';
import Navbar from './Navbar';

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
    await fetch('http://192.168.1.19:8000/models/new', {
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
    await fetch('http://192.168.1.19:8000/models')
    .then(res => res.json())
    .then(({data}) => {
    this.setState({
      modeles: data
    })
  });
  }

  SupprEmail= async(id)=>{
    await fetch('http://192.168.1.19:8000/models/'+id, { method: 'DELETE' })
    .then(res=>res.json())
    
    .then(({suppr}) => {
      console.log({suppr});
    })
    .then(window.location.reload())}

  emailModel (content = {}) {
    const {sourcehtml,contentlogo,contenturl,contentnotice} = this.state;
    this.setState({openModal:true})

    var modele=JSON.stringify(sourcehtml)
    var contentnumber=Math.floor(Math.random()*1273)
    const random = (length = 8) => {
      // Declare all characters
      let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let str = '';
      for (let i = 0; i < length; i++) {
          str += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return str;
    }

    function getRandomDate() {
      const maxDate = Date.now();
      const timestamp = Math.floor(Math.random() * maxDate);
      return new Date(timestamp);
  }

    if (modele.includes('${content.cid.logo}' )){
      modele=modele.replace('cid:${content.cid.logo}','https://random.imagecdn.app/500/150')      
    }
    if (modele.includes('${content.number}')){
      modele=modele.replace('${content.number}',contentnumber)      
    }
    if (modele.includes('${content.url}')){
      modele=modele.replace('${content.url}',contenturl)  
    }
    if (modele.includes('${content.cid.thumbnail}')){
      modele=modele.replace('cid:${content.cid.thumbnail}',contentlogo)} 

    if (modele.includes('${content.notice.url}')){
      modele=modele.replace('${content.notice.url}',contenturl)  
    }

    if (modele.includes('${notice?.s_content?.raw.slice(0, 50)}')){
      modele=modele.replace('${notice?.s_content?.raw.slice(0, 50)}',random())  
    }

    if (modele.includes('${notice?.g_planclass?.raw}')){
      modele=modele.replace('${notice?.g_planclass?.raw}',Math.floor(Math.random()*1273))  
    }

    if (modele.includes('${notice?.g_datedoc?.raw}')){
      modele=modele.replace('${notice?.g_datedoc?.raw}',String(getRandomDate()))  
    }

    if (modele.includes('${notice?.u_titr?.raw}')){
      modele=modele.replace('${notice?.u_titr?.raw}',random())  
    }

    if (modele.includes('${content.site.unsubscribe}')){
      modele=modele.replace('${content.site.unsubscribe}',"https://www.google.ci/")  
    }
   
    this.setState({sourcehtml:JSON.parse(modele)})
    console.log(JSON.parse(modele))
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
          </Routes>
        </BrowserRouter>
    )
  }
}

export default App;