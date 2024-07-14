import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Avatar from 'C:/GitHub/Personal_Portfolio_Page/src/images/avataaars.png'

function home(){
    return(
        <div className='page'>
            <Header />
            <div className="body center-axis center-non-axis">
                <img src={Avatar} alt='avatar icon' id='avatar'/>
                <div>
                    <b className="large-text">Hi!<br />I'm Sam!</b>
                    <p className='small-text'>Welcome to my personal portfolio!</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default home;