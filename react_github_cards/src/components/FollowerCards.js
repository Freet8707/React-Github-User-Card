import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import FollowerCard from './FollowerCard'

const FollowerCardDiv = styled.div`
    width: 100%;
    padding-top: 20px;
    border-top: 2px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .h1Div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center
    }
    .h1Collapse {
        width: 320px;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        color: blue
    }
`;

const FollowerCards = props => {
    console.log('jf: FollowerCards.js: FollowerCards', props.followerCards)
    const history = useHistory();
    
    return (
        <>
            <FollowerCardDiv>
                <div className='h1Div'>
                    <h1 className='h1Collapse' onClick={history.goBack}>Collapse Followers</h1>
                </div>
                {props.followerCards.map(item => {
                    return <FollowerCard key={item.id} card={item} />
                })}
            </FollowerCardDiv>
        </>        
    )
}

export default FollowerCards