import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "../../style/style.css";

export default function Profile(){

    const [editing, setEditing] = useState(true);

    var name = "Tony";
    var lastname = "Jarvis";

    function editname(e){
        e.preventDefault();
       
        name = document.getElementById("newName").value;
        console.log(name);
        lastname = document.getElementById("newLastname").value;
        console.log(lastname);
        setEditing(true);
    }

    return (
        <Fragment>
                <Nav/>
                <main className="main bg-dark">
                    <div className="header">
                    {editing ? (
  
                            <h1>Welcome back<br />
                                <div className="spanContainer">
                                <span id="regName">{`${name} ${lastname}!`}</span>
                                <button id="newLastname"className="edit-button" onClick={() => setEditing(false)}>Edit Name</button>
                                </div>
                            </h1>
                     
                    ) : (
                       
                            <h1>Welcome back<br />
                             <div className="spanContainer">
                                <span id="editName">
                                    <input className="nameEditInput" id="newName"placeholder={name}></input>
                                    <input className="nameEditInput" id="lastName" placeholder={lastname}></input>
                                </span>
                                <span>
                                    <button className="edit-button nameEditBtn" onClick={() => editname()}>Save Name</button>
                                    <button className="edit-button nameEditBtn" onClick={() => setEditing(true)}>Cancel</button>
                                </span>
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
                            <Link className="transaction-button" to="/transactions">View transactions</Link>
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