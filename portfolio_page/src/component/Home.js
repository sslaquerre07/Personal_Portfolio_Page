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
                    <b className="big-word">Hi!<br />I'm Sam!</b>
                    <p className='small-word'>Welcome to my personal portfolio!</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default home;