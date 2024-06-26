import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Avatar from 'C:/GitHub/Personal_Portfolio_Page/portfolio_page/src/images/avataaars.png'

function home(){
    return(
        <div className='page'>
            <Header />
            <div id="body">
                <img src={Avatar} alt='avatar icon' id='avatar'/>
                <div id="title-text">
                    <b className="word 1">Software Developer</b>
                    <b className='word 2'>Avid Learner</b>
                    <b className='word 3'>Problem Solver</b>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default home;