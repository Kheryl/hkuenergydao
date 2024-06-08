import React, { Component } from "react"

import Header from '../../components/Header/Header';
import Content from './Content';
import Footer from '../../components/Footer/Footer';

class GenerationStats extends Component {
    render() {
        return (
            <div className="main-container">
                <Header />
                <Content />
                <Footer />
            </div>

        )
    }
}

export default GenerationStats;