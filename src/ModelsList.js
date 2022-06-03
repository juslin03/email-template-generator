import React, { Component} from "react";

export default class ModelsList extends Component
{
    constructor(props) {
        super(props);
        this.state={
            modeles: [],
            message: ''
        }
    }

    
componentDidMount() {
    this.getAllEmail()
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

    supprEmail= async(id)=>{
        await fetch('http://192.168.1.19:8000/models/'+id, { method: 'DELETE' })
        .then(res=>res.json())
        .then((data) => {
          this.getAllEmail()
        })
    }

    render() {
        return (
            <>
                <div>
    <label for="id_select" className='liste'> liste des modeles</label>
    <table class="table">
    <thead>
    <tr>
    <th itemScope="col">Title</th>
    <th itemScope="col">Description</th>
    <th itemScope="col">Code html</th>
    <th itemScope="col">Comments</th>
    <th itemScope="col">Suppression</th>
    <th itemScope="col">Modification</th>
    </tr>
    </thead>
    <tbody>
      {
        this.state.modeles.length>0 && this.state.modeles.map(modele =>{
          return <tr key={"id-"+modele.id} itemScope="row" ><th>
            {modele.title}</th>
            <td >{modele.description}</td>
            <td >
              <div dangerouslySetInnerHTML={{__html:modele.code_html}} className='code'/>
            </td>
            <td >{modele.comments}</td>
            <td><button className='suppr' onClick={() => alert('not implemented yet')}>Modifier</button></td>   
            <td><button className='suppr' onClick={() => this.supprEmail(modele.id)}>delete</button></td>   
          </tr>
        })
      }
      </tbody>
      </table>
    </div>
            </>
        )
    }
}