import React from 'react'
import styled from 'styled-components'

const FollowerDiv = styled.div`
width: 550px;
margin: 20px 20px;
padding: 15px;
background-color: #60f2ef;
display: flex;
flex-direction: column;
align-items: flex-start;
span {
    font-size: 1.6rem;
    padding: 20px 0;
    color: dodgerblue;
    font-weight: 600;
}  
h2{
    padding-left: 15px;
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
    span {
        color: dodgerblue;
    }
}
a {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;            
}
div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 30%;
        overflow: auto;
    }
    div {            
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
}
`;

const FollowerCard = props => {

    return (
        <FollowerDiv>
            <div>
                <img src={props.card.avatar_url} alt='github avatar' />
                <div>
                    <h2><span>GitHub UserName:</span> {props.card.login} </h2>
                </div>
            </div>
            <span>GitHub Page: </span><a href={props.card.html_url} target='_blank'>{props.card.html_url}</a>
        </FollowerDiv>
    )
}

export default FollowerCard