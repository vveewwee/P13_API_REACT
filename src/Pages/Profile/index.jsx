import React, { Fragment, useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "../../style/style.css";

export default function Profile(){

    const [editing, setEditing] = useState(true);

    const name = "Tony";
    const lastname = "Jarvis";

    return (
        <Fragment>
                <Nav/>
                <main className="main bg-dark">
                    <div className="header">
                    {editing ? (
  
                            <h1>Welcome back<br />
                                <div className="header">
                                <span id="regName">{`${name} ${lastname}!`}</span>
                                <button className="edit-button" onClick={() => setEditing(false)}>Edit Name</button>
                                </div>
                            </h1>
                     
                    ) : (
                       
                            <h1>Welcome back<br />
                             <div className="header">
                                <span id="editName">
                                    <input value={name}></input>
                                    <input value={lastname}></input>
                                </span>
                                <button className="edit-button" onClick={() => setEditing(true)}>Save Name</button>
                                <button className="edit-button" onClick={() => setEditing(true)}>Cancel</button>
                                </div>
                            </h1>
                       )}
                    </div>
                    <h2 className="sr-only">Accounts</h2>
                    <section className="account">
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                            <p className="account-amount">$2,082.79</p>
                            <p className="account-amount-description">Available Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                    <section className="account">
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                            <p className="account-amount">$10,928.42</p>
                            <p className="account-amount-description">Available Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                    <section className="account">
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                            <p className="account-amount">$184.30</p>
                            <p className="account-amount-description">Current Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                </main>
            <Footer/>
        </Fragment>
    )
}