import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Summary',
            align: 'left'
        },
        subtitle: {
            text: '',
            align: 'left'
        },
        xAxis: {
            categories: ['Spet 10', 'Spet 12', 'Sept 15', 'Sept 17', 'Spet 20', 'Sept 22'],
            crosshair: true,
            accessibility: {
                description: 'Countries'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '1000 Metric Tons (MT)'
            }
        },
        tooltip: {
            valueSuffix: ' (1000 MT)'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
            {
                name: 'Corn',
                data: [387749, 280000, 129000, 64300, 54000, 34300]
            },
        ]
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default BarChart;
