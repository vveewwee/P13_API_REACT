import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Fragment } from "react";
import Tab from "../../components/Tab";
import "../../style/style.css"

export default function Transactions(){
    return (
        <Fragment>
            <Nav/>
                <Tab/>
            <Footer/>
        </Fragment>
    )
}