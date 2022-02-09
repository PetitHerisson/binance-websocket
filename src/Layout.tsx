import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './reducer'
import Status from './Status'
import { StateType, StreamData } from './types'
import styled from 'styled-components'
import LineChart from './LineChart'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1em;
`;
const Layout = () => {
    const streams = useSelector<RootState, StreamData[]>(state => state.reducer.streams)

    return (
        <div>
            <Status />
            <Container>
                {streams.map(stream => (
                    <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '450px' }}>
                        <LineChart
                            time={stream.time}
                            title={`${stream.streamName} Best Price`}
                            label1='Ask'
                            label2='Bid'
                            dataset1={stream.ask}
                            dataset2={stream.bid} />
                        <LineChart
                            time={stream.time}
                            title={`${stream.streamName} Open and Close Price`}
                            label1='Open'
                            label2='Close'
                            dataset1={stream.open}
                            dataset2={stream.close} />
                    </div>
                ))}


            </Container>
        </div>
    )
}

export default Layout
