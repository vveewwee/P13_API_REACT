import React from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
height:100px;
width:100%;
color:red;
`

export default function Error(){
    return(
        <Container>
            <p>Error Page</p>
        </Container>
    )
}