/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { AllProyect, BtnPrimary, BtnSecondary, CardProject, PortfolioContainer, PortfolioInfo, ProjectImage, SecondContainer } from '../styles/Styles'

const Portfolio = () => {

    
    return (
        <PortfolioContainer id="proyectos">
            <PortfolioInfo>
                <h1>Parece magia, funciona con código.</h1>
                <p>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</p>
            </PortfolioInfo>
            <div>
                <ProjectImage className='w-100 bg-darck'>
                    <CardProject>
                        <h3>NIKO</h3>
                        <p>Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.</p>
                        <div>
                            <BtnPrimary href="#" >Ver proyecto completo</BtnPrimary>
                            <BtnSecondary href="#" >Ver código</BtnSecondary>
                        </div>
                    </CardProject>
                </ProjectImage>
                <SecondContainer className='d-flex justify-content-between'>
                    <ProjectImage className='bg-darck' style= {{width:"47%"}}>
                        <CardProject className='w-75'>
                            <h3>Príncipe Fresco</h3>
                            <p>La serie está protagonizada por Will Smith como una versión ficticia de sí...</p>
                            <div>
                                <BtnPrimary href="#" >Ver proyecto completo</BtnPrimary>
                                <BtnSecondary href="#" >Ver código</BtnSecondary>
                            </div>
                        </CardProject>
                    </ProjectImage>
                    <ProjectImage className='bg-darck' style= {{width:"47%"}}>
                        <CardProject className='w-75'>
                            <h3>Príncipe Fresco</h3>
                            <p>La serie está protagonizada por Will Smith como una versión ficticia de sí...</p>
                            <div>
                                <BtnPrimary href="#" >Ver proyecto completo</BtnPrimary>
                                <BtnSecondary href="#" >Ver código</BtnSecondary>
                            </div>
                        </CardProject>
                    </ProjectImage>                    
                </SecondContainer>
            </div>
            <AllProyect>
                <a href="#" >Ver más proyectos</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                </svg>
            </AllProyect>
        </PortfolioContainer>
    )
}

export default Portfolio
