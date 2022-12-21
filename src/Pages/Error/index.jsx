import React, { Fragment } from "react";
import styled from "styled-components";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Container = styled.div`
display:flex;
height:100px;
width:100%;
color:red;
`

export default function Error(){
    return(
        <Fragment>
            <Nav />
            <Container>
                <p>Error Page</p>
            </Container>
            <Footer />
        </Fragment>
    )
}