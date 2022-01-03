/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { CardTestimonial, ContactContainer, ContainerList, FormContainer, ImageDevs, ListServices, ServiceContainer, TestimonialsContainer } from '../styles/Styles'
import {testimonios} from '../helpers/data'
import { Form } from 'react-bootstrap'

const Services = () => {

    const handlesubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <ServiceContainer>
                <h2 id="servicios">Servicios</h2>
                <ContainerList>
                    <ListServices>
                        <h4>Diseño</h4>
                        <ul>
                            <li>Experiencia de usuario</li>
                            <li>Interfaz de usuario</li>
                            <li>Aplicaciones web</li>
                            <li>Prueba de concepto</li>
                            <li className='text-center ' style= {{backgroundColor:"var(--primary-color)"}}>
                                <a href="/"> Ver servicios de diseño</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                </svg> 
                            </li>
                        </ul>                    
                    </ListServices>
                    <div>
                    <ListServices>
                        <h4>Desarrollo</h4>
                        <ul>
                            <li>Aplicaciones móviles</li>
                            <li>Sitios web</li>
                            <li>Aplicaciones web progresivas</li>                        
                            <li className='text-center w-75 ' style= {{backgroundColor:"var(--primary-color)"}}>                                
                                <a href="/"> Ver servicios de desarrollo</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                </svg> 
                            </li>
                        </ul>                    
                    </ListServices>
                    </div>
                    <div>
                    <ListServices>
                        <h4>Marca</h4>
                        <ul>
                            <li>Identidad de la marca</li>
                            <li>Estrategia de la marca</li>                                               
                            <li className='text-center' style= {{backgroundColor:"var(--primary-color)"}}>                                
                                <a href="/"> Ver servicios de marca</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                </svg> 
                            </li>
                        </ul>                    
                    </ListServices>
                    </div>
                </ContainerList>
            </ServiceContainer>
            <TestimonialsContainer>
                <h2 id="testimonios">Testimonios</h2>
                <div className='d-flex flex-wrap justify-content-between'>
                    { testimonios.map( user => (
                        <CardTestimonial>
                            <div className='d-flex mb-3 '>
                                <img src= {user.image} alt='Image profile'/>
                                <h5>{user.name}</h5>
                            </div>
                            <p>{user.text}</p>
                        </CardTestimonial>   
                    ))                                                                 
                    }
                </div>
            </TestimonialsContainer>
            <ImageDevs></ImageDevs>
            <ContactContainer id="contacto">
                <FormContainer>
                    <h2>Contacto</h2>
                    <p>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</p>
                    <Form className='mt-4 w-100 pt-4' onSubmit={handlesubmit}>
                        <Form.Group className="mb-4 " controlId="exampleForm.ControlInput1"> 
                            <Form.Control className='py-3' type="text" placeholder="Nombre"  name="nombre" required/>
                        </Form.Group>
                        <Form.Group className="mb-4 " controlId="exampleForm.ControlInput1"> 
                            <Form.Control className='py-3' type="email" placeholder="Correo"  name="mail" required/>
                        </Form.Group>
                        <Form.Group className="mb-4 " controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={6} placeholder="Mensaje" name="text" required/>
                        </Form.Group>
                        <Form.Group>
                            <button type="submit">Enviar mensaje</button>
                        </Form.Group>
                    </Form>
                </FormContainer>
            </ContactContainer>
        </>
    )
}

export default Services
