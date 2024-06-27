import React from 'react';
import Header from './Header';
import Footer from './Footer';

function certifications() {
    return(
        <div className='page'>
            <Header />
            <div className="body vertical">
                <div id='certification-wall'>
                </div>
                <div id='skill-list'>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default certifications;