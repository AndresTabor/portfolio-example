/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { BtnMenu, CurriculumContainer, Nav  } from '../styles/Styles'




export default class Navbar extends Component {

    render() {
        
        
    
        return (                        
            <Nav className='navbar navbar-expand-lg'>  
                <div className='container-fluid' >
                    <BtnMenu xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </BtnMenu>
                   <span>Logo</span>
                   <div>
                       <ul >                        
                           <li><a href="#hero">Hola</a> </li>
                           <li><a href="#proyectos">Proyectos</a> </li>
                           <li><a href="#testimonios">Testimonios</a> </li>
                           <li><a href="#contacto">Contacto</a> </li>
                       </ul>
                   </div>
                   <CurriculumContainer>
                       <a href="#">Descargar currículum</a>
                   </CurriculumContainer>
               </div>
                
            </Nav>
        )
    }
}
