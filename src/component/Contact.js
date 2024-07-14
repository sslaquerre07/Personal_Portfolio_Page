import React from 'react';
import Header from './Header';
import Footer from './Footer';

function contact(){
    return( 
        <div className='page'>
            <Header />
            <div className='body vertical contact'>
                <p className='large-text head-text'>Thanks for stopping by!</p>
                <p className='small-text head-text'>I'm always looking for new work, so feel free to reach out via:</p>
                <div className='dynamic center-axis fit-x'>
                    <div className='contact-box'>
                        <p className='small-text'>Email: sslaquerre@gmail.com</p>
                        <p className='small-text'>Cell: (403)-466-0914</p>
                        <p className='small-text'>Linkedin: <a href="https://www.linkedin.com/in/samuel-laquerre-304635202/" className="fa fa-linkedin link" /></p>
                    </div>
                    <div className='contact-box'>
                        <p className='small-text'>Or leave a personalized message!</p>
                        <form id='message-form'>
                            <div className='field'>
                                <label htmlFor='first-name' className='small-text'>First Name: </label>
                                <input type='text' placeholder='E.g Bob' id='first-name' required/><br />
                            </div>
                            <div className='field'>
                                <label htmlFor='last-name' className='small-text'>Last Name: </label>
                                <input type='text' placeholder='E.g Smith' id='last-name' required/><br />
                            </div>
                            <div className='field'>
                                <label htmlFor='email' className='small-text'>Email: </label>
                                <input type='email' id='email' required/><br />
                            </div>
                            <div className='field'>
                                <label htmlFor='message' className='small-text'>Message:</label>
                            </div>
                            <div className='field'>
                                <textarea id='message' className='fill-container' cols='5' required />
                            </div>
                            <div className='field'>
                                <button type='submit'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default contact;