'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {animationDuration} from "@/constants/uiConstants";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts} : DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                data: [100, 200, 300],
                backgroundColor: [
                    '#0747b6',
                    '#2265d8',
                    '#2f91fa',
                ],
                borderWidth: 0,
            },
        ],
        labels: [
            'Bank 1',
            'Bank 2',
            'Bank 3',
        ],
    };
    return (<Doughnut
        data={data}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            cutout: '70%',
            animation: {
                animateRotate: true,
                duration: animationDuration.default * 1000,
            },
        }}/>
    );
}

export default DoughnutChart;