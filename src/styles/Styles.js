import styled from "styled-components";


/*Nav*/
export const Nav = styled.div`
        background-color:var(--primary-color);
        width: 100%;
        height: 96px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 24px 72px;
        color:#fff;
        font-family: 'Nunito', sans-serif;
        & ul{
            list-style:none;
            display: inline-flex;
        }
        & li{
            margin-left:40px;
        }
        & a{
            color: #fff;
            font-family: 'Lora', serif;
        }

        @media screen and (max-width: 420px){
            height: 86px;
            padding: 24px 20px;

            & li {
            margin: 0 0 34px 0;
            }
            & ul {
                position:fixed; 
                display: block;
                width: 100vw;
                height: calc(100% -65px);
                top: -100vh;
                margin-top: 32px;
                font-size: 32px;
            }
        }
`
export const CurriculumContainer= styled.div`
    background-color: #FF8906;
    padding: 0;
    @media screen and (max-width: 420px){
        width: 50%;
        text-align: center;
    }
`
export const BtnMenu = styled.svg`
    display: none;
    cursor:pointer;
    color: var(--second-color);
    @media screen and (max-width: 420px){
            display: inline-flex;
        }
`
/*Hero*/
export const HeroContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: flex-start;
    padding: 80px 72px;
    width:100%;
    height: 622px;
    background-color:var(--primary-color);
    color: #ffff;
    font-family: Nunito;

    @media screen and (max-width: 420px){
        padding: 0 20px;
        flex-direction: column;
        height: 723px;
    }
`
export const InfoHero = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    max-width: 703px;
    height: 424px;

    & h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 4rem;
        line-height: 80px;
        letter-spacing: 0.01em;
        margin-bottom: 32px;
    }

    & p{
        font-family: Lora;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        line-height: 40px;
        color: #A7A9BE;
        margin-bottom:64px;
    }

    & svg {
        color:var(--second-color);
    }
    @media screen and (max-width: 420px){
        order: 2;
        

        & h1 {
            font-size: 2.33rem;
            line-height: 40px;
            margin-top: 24px;
            margin-bottom: 16px;
        }
        & p{
            margin-bottom: 20px;
        }
    }
`
export const ImageHero = styled.div`
    width: 495px;
    height: 462px;
    & img {
        width:100%;
        
    }
    @media screen and (max-width: 420px){
        order:1;
        width: 100%;
    }

`
/*Porfolio section*/

export const PortfolioContainer = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #FFFFFE;
    width:100%;
    padding: 80px 72px;

    @media screen and (max-width: 420px){
        padding: 0 20px;
        
    }
   
`
export const SecondContainer = styled.div `
    @media screen and (max-width: 420px){
        flex-direction: column;

        & div {
            width:100% !important;
        }
        
    }

`
export const PortfolioInfo = styled.div `
    display: flex;
    justify-content: space-between;

    & h1 {
        width: 40%;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 3.2rem;
        line-height: 56px;
        letter-spacing: -0.005em;
    }

    & p {
        width: 40%;
        font-family: Lora;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        line-height: 40px;
    }

    @media screen and (max-width: 420px){
        padding: 0;
        flex-direction: column;

        & div {
            width: 100%;
            margin: 0;
        }
        & h1 {
            font-size: 1.8rem;
            line-height: 40px;
            padding: 0;
            margin-top: 40px;
            width:100%;
        }
        & p{
            width:100%;
            margin-bottom: 0px; 
        }
        
    }
`
export const ProjectImage = styled.div `
    height: 540px;
    width: 100%;
    background-image: url("https://i.ibb.co/dKNmWgC/d81ef5693cc3a4c8fcb0f4d3cd662586.jpg");
    background-size: cover;
    margin-top: 80px;
    @media screen and (max-width: 420px){
        height: 279px;
        margin-bottom: 150px; 
    }

`
export const CardProject = styled.div`
    display: flex;
    flex-direction: column;
    width:50%;
    height: 70%;
    align-items: flex-start;
    padding: 64px 24px 24px;
    background: #0F0E17;
    box-shadow: 12px 16px 32px rgba(0, 0, 0, 0.25);
    position: relative;
    left: -20px;
    top:15%;
    color: #ffff;

    & p {
        font-size: 24px;
        width:70%;
        color: #A7A9BE;
        font-family: Lora;
        margin-bottom: 80px;
    }

    & a {
        color: #fff;
        font-family: 'Lora', serif;
        margin: 0 8px;
    }
    @media screen and (max-width: 420px){
        height: 430px;
        width: 100%;
        left: -5px;
        & p{
            width: 100%;
            font-size: 1.33rem;
            margin: 0 0 30px 0;
        }
        div{
            &:nth-child(3){
                display: flex;
                flex-direction: column;
                width: 100%;
                text-align: center;

            }
        }
    
        
    }
`
export const BtnPrimary = styled.a `
    background-color: var(--second-color);
    padding: 12px 24px;

    @media screen and (max-width: 420px){
        margin-bottom: 16px !important;
    }
`
export const BtnSecondary = styled.a `
    border: 2px solid  var(--second-color);
    padding: 12px 24px;
    color: var(--second-color);  
`
export const AllProyect = styled.a `
    border: 2px solid #0F0E17;
    padding: 8px 40px;
    color: var(--primary-color);
    width: 297px;
    text-align: center;
    align-self: center;
    margin: 80px 0 0 0;

    & a {
        color: var(--primary-color);
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
    }
    @media screen and (max-width: 420px){
        margin-bottom: 30px !important;
    }
`
/*Services section */

export const ServiceContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 72px;
    width:100%;
    height: 632px;
    background: linear-gradient(135deg, #FEB692 0%, #EA5455 100%);

    & h2 {
        font-weight: bold;
        font-size: 48px;  
        font-family: Nunito;
        font-style: normal;  
    }
    @media screen and (max-width: 420px){
        padding: 40px 20px;
        height: 1300px;

        & h2{
            font-size: 2rem;
        }
        
    }
`
export const ContainerList = styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
    @media screen and (max-width: 420px){
        flex-direction: column;
    }

`
export const ListServices = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;

    & h4 {
        font-size: 32px;
        letter-spacing: 0.01em;
        margin-top: 48px;
    }

    & ul {
        list-style: none;
        padding-left: 0;
        margin-right:200px;
    }

    & li {
        margin: 24px 0;
        
    }

    & a {
        font-size: 16px;
        color: var(--second-color);
        
        
    }

    & svg {
        color: var(--second-color);        
    }

    @media screen and (max-width: 420px){
       & ul{
           width: 100%;
           margin-bottom: 16px;
        }
        & li {
            width: 100% !important;
        }
        
    }
`
/*Testimonials section*/

export const TestimonialsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 72px;
    background-color: var(--primary-color);    
    color: #ffff;
    & h2 {
        font-weight: bold;
        font-size: 48px;  
        font-family: Nunito;
        font-style: normal; 
        margin-bottom: 48px;
    }
    @media screen and (max-width: 420px){
        padding: 40px 20px;
        & h2 {
            font-size: 2rem;
        }
    }
`
export const CardTestimonial = styled.div `
    display: flex;
    flex-direction: column;
    width: 391.33px;
    margin: 0px 24px 48px 0;
    font-family: Lora;

    & img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }

    & h5 {
        align-self: center;        
        color: #F25F4C;
        margin: 0px 8px;
    }

    & p {
        font-size: 24px;
        line-height: 40px;
    }
    @media screen and (max-width: 420px){
        width: 100%;
        & p{
            width: 100%;
            font-size: 1.3rem;
        }
        
    }
`
/*Image Devs */

export const ImageDevs = styled.div `

    background-image: url("https://i.ibb.co/x75n36Q/829130250a506481f5c3459308fdecaf.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;    
    height: 800px;
    @media screen and (max-width: 420px){
        height: 184px;
       
    }
`
/*Contact*/
export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 72px;
    background: linear-gradient(135deg, #FEB692 0%, #EA5455 100%);
    height: 893px;
    color: #ffff;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;

    & h2 {
        font-weight: bold;
        font-size: 48px;  
        font-family: Nunito;
        font-style: normal; 
        margin-bottom: 16px;
    }

    & p{
        color: #A7A9BE;
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 0px;
    }
    @media screen and (max-width: 420px){
        padding: 40px 20px;
       & h2{
           font-size: 2rem;
       }
       & p {
            font-size: 1.3rem; 
       }
    }
`
export const FormContainer = styled.div `
    max-width: 35%;   
    height: 733px; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 48px;
    background-color: var(--primary-color);

    & button {
        width: 100%;
        border: none;
        background-color: var(--second-color);
        padding: 17px 40px;
        color: #ffff;
        font-family: Nunito;
        font-weight: bold;
        
        
    }
    @media screen and (max-width: 420px){
        max-width: 100%;
        padding: 20px;
       
    }
`
/*Footer*/

export const Footer = styled.footer `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: 48px 72px;
    background-color: var(--primary-color);
    height: 145px;
    color: #ffff;
    font-family: Lora;
    font-size: 20px;
    

    & svg {
        margin: 0 12px;
    }
    @media screen and (max-width: 420px){
        padding: 40px 20px;
        flex-direction: column;
        height: 391px;
        align-items: center;

        div{
            &:nth-child(2){ 
                flex-direction: column;
                text-align: center;

            }
        }
    }
       
`

