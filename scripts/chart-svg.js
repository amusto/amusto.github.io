$(document).ready(function(){
    //$("#search-term-svg").val("water");
    $("#search-term-svg").keyup(function(e){
        console.log('SVG chart ....');
        if (e.keyCode == 13) {
            update($("#search-term-svg").val());
        }
    });
});

var stats = [];
var myStats = [];
function update(keyword){
    $.ajax({
        url: 'http://api.nsf.gov/services/v1/awards.json',
        data: {keyword: keyword},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'jsonpCallback',
        success: function(data){

            // Seek and find (oh yeah, and some addition!)
            data.response.award.map(function (d) {
                if (stats[d.awardeeStateCode] === undefined) {
                    stats[d.awardeeStateCode] = 1;
                } else {
                    stats[d.awardeeStateCode] += 1;
                }
            });

            // loop for values only
            for(var key in stats) {
                var val = stats[key];
                myStats.push(val);
            }
            console.log(stats);
            displayChart(myStats);
        }
    });
};


function displayChart(myData){
    var data = myData;

    console.log(data);

    var width = 210,
        barHeight = 20;

    var x = d3.scale.linear()
        .range([0, width]);

    var chart = d3.select(".chart-svg")
        .attr("width", width);

    chart.attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
     .data(data)
     .enter().append("g")
     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });

    function type(d) {
        d.value = +d.value; // coerce to number
        return d;
    }

    $( ".chartWellSVG" ).show();
}
