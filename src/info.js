import React, { Component} from "react";


export default class Info extends Component
{
   
    render() {
           return (
            
              <div>
                  <h1 style={{textAlign:"center"}}> Info</h1>

                      <br></br>
                      <h4 style={{textAlign:"center"}}> Les informations ci-dessous porte sur la creation ou modification des modeles</h4>
                      <br></br>
                      <h6 style={{textAlign: "center"}}>Les differents pseudo variables pour la personnalisation des modele sont: </h6>
                      <br></br>
                      <li style={{textAlign:"center"}}> logo : qui permet d'ajouter une image sur le modele</li>
                      <br></br>
                      <li style={{textAlign:"center"}}> url : qui permet de redirection predefinit</li>
                      <br></br>
                      <li style={{textAlign:"center"}}> number : qui permet de retourne un nombre predefinit</li>
                      <br></br>
                      <li style={{textAlign:"center"}}> Data : qui permet de retourner une boucle d'element dont le nombre sera definit par number</li>

              </div>
            
        )
    
    }
}
