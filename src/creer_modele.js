import React from 'react';
import Modal from 'react-modal';

import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link } from 'react-router-dom';


class models extends React.Component{
  constructor(props) {
    super(props); // this is required
    this.state = {
      nom: '',
      description: '',
      sourcehtml: '',
      remarques: '',
      donnees_de_retour: null,
      openModal:false,
      contentlogo:'https://random.imagecdn.app/500/150',
      contenturl:'https://dipafrica.com/',
      
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

  emailModel (content = {}) {
    const {nom,description,sourcehtml,remarques} = this.state;
    var contentnumber=Math.floor(Math.random()*100);
    var boucle= '<tr>'+
    '<td style="padding-bottom: 4px;">'+
        '<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">'+
        '<tr>'+
            '<td valign="middle" width="30%">'+
                '<a href="${url}"><img src="https://img.lovepik.com/element/40133/7716.png_1200.png" alt="${title}" style="width: 80px; height: auto; margin: auto; display: block;"></a>'+
            '</td>'+
            '<td valign="middle" width="70%">'+
                '<div class="text-blog" style="text-align: left; padding-left:0;">'+
                    '<table role="presentation" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px;">'+
                        '<tr>'+
                            '<td><strong>Classement:</strong>${notice.title}</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td><strong>Titre:</strong>${notice.u_titr}</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td><strong>Contenu:</strong>${notice.s_content}</td>'+
                        '</tr>'+
                   '</table>'+
                '</div>'+
            '</tr>'+
            '</td>'+
        '</table>'+
    '</td>'+
'</tr>';

    boucle=boucle.repeat(contentnumber);
    const regex = /\$\{([^}]+)\}/g;
    const variables = sourcehtml.match(regex);

    if(variables!=null){
  
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

     const variables2 = boucle.match(/\$\{([^}]+)\}/g);
     const values1 = variables2 !=null && variables2.map(() => Math.random().toString(36).substring(7));
     var source4 = variables2!=null && variables2.reduce((acc, curr, i) => acc.replace(curr, values1[i]), boucle);
     source4 =[source4];
      

     const variables3 = source2.match(/\$\{([^}]+)\}/g);
     const data= variables3.filter(variables3 => variables3.includes('Data'))
     const source5 = data!=null && data.reduce((acc, curr, i) => acc.replace(curr, source4[i]), source2); 
 
   
    this.setState({sourcehtml:source5})}

    this.setState({openModal:true})
  }

  

  handleSubmit = async (event) => {
    event.preventDefault();
    await fetch('http://192.168.1.10:8000/models/new', {
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
      NotificationManager.success('Enregistrement effectuée avec succès !!', 'Youpiiii');
      console.log(data)
      this.setState({
        nom:'',
        description:'',
        sourcehtml:'',
        remarques:''
      })
      window.location.assign('http://localhost:3000/');

    });

  }

  render(){

    return(
    <div>
        <form onSubmit={this.handleSubmit} className="GIS">
          <span htmlFor='Adresse' className='model'> nom du modele</span>
          <textarea type='text' name="nom" className='boit1' value={this.state.nom} onChange={this.handleInputChange} required/>

          <span htmlFor='Description' className='Descr'> <br></br><br></br><br></br>Description</span>
          <textarea placeholder='' className='boit2' name="description" value={this.state.description} onChange={this.handleInputChange}  />

          <span htmlFor='html' className='html'> <br></br><br></br> Source html <br></br>du<br></br> modèle</span>
          <textarea placeholder='' className='boit3' name="sourcehtml" value={this.state.sourcehtml} onChange={this.handleInputChange} required />

          <span htmlFor='rmq' className='rmq'> <br></br><br></br> Remarques</span>
          <textarea placeholder='' className='boit4' name="remarques" value={this.state.remarques} onChange={this.handleInputChange}  />

          {/* <h1 className='nvm'> Nouveau Modele</h1> */}

          <input  type="submit" className='Vld' disabled={(this.state.nom.trim() == '' || this.state.sourcehtml.trim() == '') ? true : false} value="Enregistrer" />

    
        </form>

        <div>
         {this.state.donnees_de_retour!=null ? JSON.stringify(this.state.donnees_de_retour):''}

         <button className='PRIV'  onClick={()=>{if(this.state.sourcehtml.trim() == ''){alert('remplissez les cases source html et nom du modele')}  else {this.emailModel()}}} >Privisualiser </button>
         
         <Modal isOpen={this.state.openModal}>
           <button onClick={()=>this.setState({openModal:false})}  >X</button>
           <h2 style={{ textAlign: 'center'}}>Privisualisation:{this.state.nom}</h2><br></br>
           <br/>
           <div dangerouslySetInnerHTML={{__html: this.state.sourcehtml}} />
         </Modal>
        </div>
  </div> 
  )
}
}

  export default models;