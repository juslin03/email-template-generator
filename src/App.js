import React from 'react';
// import swal from ' sweetalert';
import './App.css';
import Modal from 'react-modal'

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
      contentlogo:'https://dipafrica.com/',
      contenturl:'https://dipafrica.com/'
    }
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
    // swal( "Oops" ,  "Something went wrong!" ,  "error" )

    await fetch('http://192.168.1.20:8000/models/new', {
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
        donnees_de_retour:data,
        nom:'',
        description:'',
        sourcehtml:'',
        remarques:''
      })
    });

  }


  render() {
    const {nom,description,sourcehtml,remarques } = this.state;

    //traitement de la source html
    const isContentInSource = sourcehtml.includes('${content.');
    if (sourcehtml.includes('${content.cid.logo')){
      content.cid.logo=this.contentlogo
    }
    const defaultUrl = 'http://google.ci';
    console.log(isContentInSource);
    return (
        <div>
          
          
          <a href='/'><img src="https://dipafrica.com/wp-content/uploads/2016/05/logo-edipafriquecmyb300dpi-1.jpg" className='imgn' /></a>
          <form onSubmit={this.handleSubmit} className="GIS">
            <span htmlFor='Adresse' className='model'> nom du modele</span>
            <textarea type='text' name="nom" className='boit1' value={nom} onChange={this.handleInputChange} required/>

            <span htmlFor='Description' className='Descr'> <br></br><br></br><br></br>Description</span>
            <textarea placeholder='' className='boit2' name="description" value={description} onChange={this.handleInputChange}  required/>

            <span htmlFor='html' className='html'> <br></br><br></br> Source html <br></br>du<br></br> modèle</span>
            <textarea placeholder='' className='boit3' name="sourcehtml" value={sourcehtml} onChange={this.handleInputChange} required />

            <span htmlFor='rmq' className='rmq'> <br></br><br></br> Remarques</span>
            <textarea placeholder='' className='boit4' name="remarques" value={remarques} onChange={this.handleInputChange}  />

            <h1 className='nvm'> Nouveau Modele</h1>

            <input type="submit" className='Vld' disabled={(nom.trim() == '' || description.trim() == '' || sourcehtml.trim() == '') ? true : false} value="Enregistrer" />

      
          </form>

          <div>
           {this.state.donnees_de_retour!=null ? JSON.stringify(this.state.donnees_de_retour):''}

           <button className='PRIV'  onClick={()=>{if(nom.trim() == '' || sourcehtml.trim() == ''){alert('remplissez les cases source html et nom du modele')}else {this.setState({openModal:true})}}} >Privisualiser </button>
           
           <Modal isOpen={this.state.openModal}>

             <button onClick={()=>this.setState({openModal:false})  }  >X</button>
             <h2 style={{ textAlign: 'center'}}>Privisualisation:{this.state.nom}</h2><br></br>
             <br/>
             <div dangerouslySetInnerHTML={{__html: this.state.sourcehtml}} />
           </Modal>
          </div>

    </div>
    )
  }
}


export default App;
