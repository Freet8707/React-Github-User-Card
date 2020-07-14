import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        span {
            color: dodgerblue;
        }
    }
    a {
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;            
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
    const [follower, setFollower] = useState('') 
    const [followerInfo, setFollowerInfo] = useState({})

    useEffect(() => {
        setFollower(props.card.login)
    }, [])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${follower}`)
        .then(res => {
            console.log(res.data)
            setFollowerInfo(res.data)
        })
    }, [follower])

    return (
        <FollowerDiv>
            <div>
                <img src={followerInfo.avatar_url} alt='github avatar' />
                <div>
                    <h2><span>GitHub UserName:</span> {followerInfo.login} </h2>
                    <h2><span>My Name:</span> {followerInfo.name} </h2>
                </div>
            </div>
            <p><span>following:</span> {followerInfo.following} </p>
            <p><span>followers:</span> {followerInfo.followers} </p>
            <p><span>Bio:</span> {followerInfo.bio} </p>
            <a href={followerInfo.html_url} target='_blank'>{followerInfo.html_url}</a>
        </FollowerDiv>
    )
}

export default FollowerCard