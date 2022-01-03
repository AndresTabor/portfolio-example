import React from 'react'
import { HeroContainer, ImageHero, InfoHero } from '../styles/Styles'

const Hero = () => {
    return (
        <HeroContainer>
            <InfoHero>
                <h1 id="hero">
                    ¡Hola a todos! Soy Antonio Pereira
                </h1>
                <p>Developer que le encanta implementar diseños que 
                    inspiran y atraen a las personas.
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                </svg>
            </InfoHero>
            <ImageHero>
                <img src="https://i.ibb.co/WKzZbzz/06611daae220c51adb6d69de0b0b36f0.png" alt="profilePicture">                    
                </img>
            </ImageHero>
        </HeroContainer>
    )
}

export default Hero
