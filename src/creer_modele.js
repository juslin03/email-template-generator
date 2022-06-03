import React from 'react';
import Modal from 'react-modal';
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
      contentlogo:"https://img.lovepik.com/element/40133/7716.png_1200.png",
      contenturl:'https://dipafrica.com/',
      modeles:[]
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

  
  render(){

    return(
    <div>
        <form onSubmit={this.handleSubmit} className="GIS">
          <span htmlFor='Adresse' className='model'> nom du modele</span>
          <textarea type='text' name="nom" className='boit1' value={this.state.nom} onChange={this.handleInputChange} required/>

          <span htmlFor='Description' className='Descr'> <br></br><br></br><br></br>Description</span>
          <textarea placeholder='' className='boit2' name="description" value={this.state.description} onChange={this.handleInputChange}  required/>

          <span htmlFor='html' className='html'> <br></br><br></br> Source html <br></br>du<br></br> modèle</span>
          <textarea placeholder='' className='boit3' name="sourcehtml" value={this.state.sourcehtml} onChange={this.handleInputChange} required />

          <span htmlFor='rmq' className='rmq'> <br></br><br></br> Remarques</span>
          <textarea placeholder='' className='boit4' name="remarques" value={this.state.remarques} onChange={this.handleInputChange}  />

          {/* <h1 className='nvm'> Nouveau Modele</h1> */}

          <input type="submit" className='Vld' disabled={(this.state.nom.trim() == '' || this.state.description.trim() == '' || this.state.sourcehtml.trim() == '') ? true : false} value="Enregistrer" />

    
        </form>

        <div>
         {this.state.donnees_de_retour!=null ? JSON.stringify(this.state.donnees_de_retour):''}

         <button className='PRIV'  onClick={()=>{if(this.state.nom.trim() == '' || this.state.sourcehtml.trim() == ''){alert('remplissez les cases source html et nom du modele')}  else {this.emailModel()}}} >Privisualiser </button>
         
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