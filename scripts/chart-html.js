$(document).ready(function(){
    $("#search-term").val("water");
    $("#search-term").keyup(function(e){
        console.log('HTML chart ...');
        if (e.keyCode == 13) {
            update($("#search-term").val());
            console.log('submitted successfully!');
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

            displayChart(myStats);
        }
    });
};


function displayChart(myData){
    var data = myData;

    var width = 420,
        barHeight = 20;

    var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

    d3.select(".chartHTML")
        .selectAll("div")
        .data(data)
        .enter().append("div")
        .style("width", function(d) { return x(d) + "px"; })
        .text(function(d) { return d; });

    $( ".chartWellHtml" ).show();
}
