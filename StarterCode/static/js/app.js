const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
data = d3.json(url).then(response => console.log(response))
// const data = d3.json(url)
// let samplevalues = Object.values(data.samples[0].sample_values).slice(0,9)
// let outids = Object.values(data.samples[0].otu_ids).slice(0,9)
// let hoverover = Object.values(data.sample[0].otu_labels).slice(0,9)


function initi() {
    data = d3.json(url).then(response =>{
        let names= response.names;
        console.log(names);
let selector = d3.select("#selDataset");
for(let i=0; i <= names.length ; i++){
    selector.append("option").text(names[i]).property("values", names[i])
}
let sampleName0= names[0];

drawBarChart(sampleName0)

    });}

function drawBarChart(SampleName){
    data = d3.json(url).then(response =>{
        let names= response.names;
        let samplesList = response.samples;
        let dataset= samplesList.filter( sample => sample.id == SampleName);
        // let outids= dataset.map( record => `OTU ${record.otu_ids}`)
        console.log(dataset)
    let trace1 = {
        x: dataset.map( record => record.sample_values),
        y: dataset.map( record => `OTU ${record.otu_ids}`),
        type: "bar",
        orientation: "h"
};
Plotly.newPlot("#bar",[trace1])

    })

}

//     let trace1 = {
//         x: samplevalues,
//         y: outids.map(id => `OUT${id}`),
//         type: "bar",
//         orientation: "h"
// };
// let dataset = [trace1];
// Plotly.newPlot("#bar",dataset)}
// console.log(data)
initi()