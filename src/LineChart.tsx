import React from 'react'
import { Chart } from 'chart.js'
import { useSelector } from 'react-redux'
import { RootState } from './reducer'

const LineChart = () => {
    var randomScalingFactor = function () {
        return Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5));
    };
    // What should X-axis be?
    var config = {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'a',
                backgroundColor: 'red',
                borderColor: 'red',
                fill: false,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
            }, {
                label: 'b',
                backgroundColor: 'blue',
                borderColor: 'blue',
                fill: false,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'BNBBTC Line Chart'
            },
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                    type: 'logarithmic',
                }]
            }
        }
    };
    
    window.onload = function() {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		new Chart(ctx, config);
	};

    return (
        <div style={{ width: '75%' }}>
            <canvas id="canvas"></canvas>
        </div>
    )
}

export default LineChart
