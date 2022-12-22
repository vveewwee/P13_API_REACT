import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Transactions from "../Pages/Transactions"
import Error from "../Pages/Error";

export default function AppRouter(){
    return (
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/transactions" element={<Transactions/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Fragment>
    )
}