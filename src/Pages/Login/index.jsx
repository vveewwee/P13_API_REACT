import React , { Fragment } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import '../../style/style.css';

export default function Login(){
    return (
        <Fragment>
                <Nav/>
                <main className="main bg-dark">
                    <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        <form>
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label
                                ><input type="text" id="username" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label
                                ><input type="password" id="password" />
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                            </div>
                            <a href="./user.html" className="sign-in-button">Sign In</a>
                        </form>
                    </section>
                </main>
               <Footer/>
        </Fragment>
    )
}