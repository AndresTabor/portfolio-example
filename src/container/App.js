import React, { Component } from 'react'
import Footr from '../components/Footr'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'


export default class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Hero/>
                <Portfolio/>
                <Services/>
                <Footr/>
            </>
        )
    }
}
