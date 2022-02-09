import React from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { RootState } from './reducer'
import { LineChartProps, StateType } from './types'

const LineChart = (props: LineChartProps) => {
    const { time, title, dataset1, dataset2, label1, label2 } = props;
    const state = useSelector<RootState, StateType>(state => state.reducer)
    const data = {
        labels: [...time],
        datasets: [
            {
                label: label1,
                fill: false,
                lineTension: 0,
                backgroundColor: '#04AA40',
                borderColor: '#04AA40',
                borderWidth: 2,
                data: [...dataset1]
            },
            {
                label: label2,
                fill: false,
                lineTension: 0,
                backgroundColor: '#E80C3A',
                borderColor: '#E80C3A',
                borderWidth: 2,
                data: [...dataset2]
            }
        ]
    }
    return (
        <div>
            <Line
                data={data}
                options={{
                    title: {
                        display: true,
                        text: title,
                        fontColor: '#ddd',
                        fontSize: 16
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            fontColor: '#fff'
                        },
                    },
                }}
            />
        </div>
    )
}

export default LineChart
