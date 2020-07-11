import React from 'react';
import styled from 'styled-components'

const CardDiv = styled.div`
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2{
        padding-left: 15px;
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        span {
            color: dodgerblue;
        }
    }
    p {
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
        }
    }
`;

const MyCard = props => {

    return (
        <>
            <h1>My GitHub Card</h1>
            {props.card.id !== 0 ? 
                <CardDiv>
                    <div>
                        <img src={props.card.avatar_url} alt='github avatar' />
                        <div>
                            <h2><span>GitHub UserName:</span> {props.card.login} </h2>
                            <h2><span>My Name:</span> {props.card.name} </h2>
                        </div>
                    </div>
                    <p>following: {props.card.following} </p>
                    <p>followers: {props.card.followers} </p>
                    <p>Bio: {props.card.bio} </p>
                    <a href={props.card.url} target='_blank'>{props.card.url}</a>
                </CardDiv> :
                <p>There was an error retrieving the information!</p>
            }
        </>        
    )
}

export default MyCard