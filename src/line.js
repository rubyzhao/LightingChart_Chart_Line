<!--Actual chart related script tag-->

// Replace the contents of this script tag if you want to test code from our examples:
// https://www.arction.com/lightningchart-js-interactive-examples/

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    DataPatterns
} = lcjs //Note: @arction/lcjs is not needed here, when using IIFE assembly

// Create a XY Chart.
const chart = lightningChart().ChartXY({
    // Set the chart into a div with id, 'target'. 
    // Chart's size will automatically adjust to div's size. 
    containerId: 'target'
})
    .setTitle('Sine Wave') // Set chart title

chart.getDefaultAxisX()
    .setAnimationScroll( undefined )

chart.getDefaultAxisY()
    .setAnimationScroll( undefined )

    var chartData = [];
    var loop = 2e4;
    //2e5: ok in Chorme, but pwmetrics:Unable to complete run 1 of 5 due to No metrics data
    
    for (var i = 0; i < loop; i++) {
        //loop=5e6; will get Aw, Snap error for the following:
        
        var x = (800 * Math.PI * i) / loop;
        var y = 100 * Math.sin(i);
        chartData.push({ x: x, y: y });
    }

// Add a line series.
const lineSeries = chart.addLineSeries({ dataPattern: DataPatterns.horizontalProgressive })
    .setName('My data')
    .add(chartData)
