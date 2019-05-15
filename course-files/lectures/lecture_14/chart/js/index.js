const test1 = () => {
    const circle = d3.selectAll("circle");
    circle
        .transition()
        .style("fill", "steelblue")
        .transition()
        .attr("r", 30);
};

const test2 = () => {
    const circle = d3.selectAll("circle");
    circle.data([32, 57, 112]);
    circle
        .transition()
        .style("fill", "hotpink")
        .attr("r", (d) => { 
            return Math.sqrt(d); 
        })
        .transition()
        .attr("cx", (d, i) => { 
            return i * 100 + 30; 
        });
};

document.querySelector('#test1').onclick = test1;
document.querySelector('#test2').onclick = test2;