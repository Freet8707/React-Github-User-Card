import React from 'react';
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'

import FollowerCards from './FollowerCards.js'

const CardDiv = styled.div`
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #60f2ef;
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
        margin: 0;
        padding: 15px 0;
        span {
            color: dodgerblue;
            font-weight: 600;
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

const MyCard = props => {
    console.log(props.followerCards)
    return (
        <>
            <h1 style={{width: '100%', fontFamily: '"Montserrat", sans-serif', borderBottom: '2px solid black', marginBottom: '20px', paddingBottom: '20px', fontSize: '2rem', color: 'blue', textAlign: 'center'}}>My GitHub Card</h1>
            {props.card.id !== 0 ? 
                <CardDiv>
                    <div>
                        <img src={props.card.avatar_url} alt='github avatar' />
                        <div>
                            <h2><span>GitHub UserName:</span> {props.card.login} </h2>
                            <h2><span>My Name:</span> {props.card.name} </h2>
                        </div>
                    </div>
                    <p><span>following:</span> {props.card.following} </p>
                    <p><span>followers:</span> {props.card.followers} <Link to='/followers' style={{cursor: 'pointer'}}>Click Here</Link> to display follower cards!</p>
                    <p><span>Bio:</span> {props.card.bio} </p>
                    <a href={props.card.html_url} target='_blank'>{props.card.html_url}</a>
                </CardDiv> :
                <p>There was an error retrieving the information!</p>
            }
            <Route exact path='/followers'>
                <FollowerCards followerCards={props.followerCards} />
            </Route>
        </>        
    )
}

export default MyCard