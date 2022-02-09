import React from 'react'
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components'
import { RootState } from './reducer';

const flushing = keyframes`
    50% {background: black;}
`;
const Light = styled.div`
    border-radius: 20px;
    width: 20px;
    height: 20px;
    background: ${props => props.color};
    float: right;
    margin: 20px;
    animation-name: ${flushing};
    animation-duration: 1s;
    animation-iteration-count: infinite;
`;
const Status = () => {
    const status = useSelector<RootState, boolean>(state => state.reducer.status)
    return (
        <div>
            <Light color={status? '#33a532' : '#ff0000'}/><br /><br /> 
        </div>
    )
}

export default Status
