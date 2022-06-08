import React, { Component} from "react";
import CodeMirror from '@uiw/react-codemirror';
import {htmlLanguage, html} from "@codemirror/lang-html";


import './edition.css';
import ReactCodemirror from "@uiw/react-codemirror";

export default class Edition extends Component
{
   
    render() {
           return (
            
              <div>
                <h1 style={{ textAlign: 'center' }}>Espace d'édition</h1>
                <div className="edition_space"> 
                
                  <CodeMirror
                    theme='dark'
                    height="600px"
                    mode='htmlmixed'
                    onChange={(value, viewUpdate) => {
                    console.log('value:', value);
                    }}
                  />
                </div>
              </div>
            
        )
    
    }
}
