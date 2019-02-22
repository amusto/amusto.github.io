$(document).ready(function(){
    $("#search-term-tsv").val("water");
    $("#search-term-tsv").keyup(function(e){
        console.log('TSV chart ....');
        if (e.keyCode == 13) {
            update($("#search-term-tsv").val());
        }
    });
});

var stats = [];
var myStats = [];
function updateTSV(keyword){
    /*
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

            displayChart();
        }
    });*/
    displayChart();
};


function displayChart(){
    //var data = myData;

    var margin = {top: 20, right: 30, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var chart = d3.select(".chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("/data/data.tsv", type, function(error, data) {
        x.domain(data.map(function(d) { return d.name; }));
        y.domain([0, d3.max(data, function(d) { return d.value; })]);

        chart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        chart.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        chart.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.name); })
            .attr("y", function(d) { return y(d.value); })
            .attr("height", function(d) { return height - y(d.value); })
            .attr("width", x.rangeBand());
    });

    function type(d) {
        d.value = +d.value; // coerce to number
        return d;
    }

    $( ".chartWellTSV" ).show();
}
