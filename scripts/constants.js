angular.module('app.commonConstants', [])
    .constant('profile_code_descs', [
        {
            title: "REACT Basic Code Samples",
            skills: ['REACT', 'Bootstrap'],
            collapsed: false,
            header: "REACT Working code examples using react-bootstrap components, displaying code samples dynamically with Tabs such as example of boiling temperature calculator",
            resources: [
                {url: 'https://github.com/amusto/react-examples', text: 'Code & Demo'}
            ]
        },
        {
            title: "D3 Code Sample",
            skills: ['Angular', 'Bootstrap', 'D3'],
            collapsed: false,
            header: "The D3js library https://d3js.org/ is robust and offers every possible function you will need in it's api. \n Here I built a simple page that accepts a search term (keyword) and hits the NSF search URL, gets the results and summarizes the award counts by state",
            resources: [
                {srcUrl: '//jsfiddle.net/amusto/wtLpv742/23/embedded/', text: 'Example', type: 'modal'}
            ]
        },
        {
            title: "Highchart example",
            skills: ['Angular', 'Bootstrap', 'highcharts'],
            collapsed: true,
            header: "Charting example using the Highchart library. http://www.highcharts.com/",
            resources: [
                {srcUrl: 'https://embed.plnkr.co/pZ1QOYY4Ql5u7CzqXis7/', text: 'Example', type: 'modal'}
            ]
        },
        {
            title: "Custom Angular Tabs Directive",
            skills: ['Angular', 'Bootstrap'],
            collapsed: true,
            header: 'Angular directive providing tabs vertically, pulling content from templates',
            resources: [
                {url: 'https://github.com/amusto/ngVerticalTabs', text: 'Code'},
                {url: 'http://plnkr.co/edit/vPdszEEHFUIXdfZZ2dyQ?p=preview', text: 'Plunker'}
            ]
        },
        {
            title: "Angular directive using a Javascript datepicker",
            skills: ['Angular', 'Bootstrap'],
            collapsed: true,
            header: 'Angular directive created to wrap a Javascript datepicker',
            resources: [
                {url: 'https://github.com/amusto/ngJavascriptDatePicker', text: 'Code'},
                {url: 'http://plnkr.co/edit/LC1TvmK8xKXczujjJLza?p=preview', text: 'Plunker'}
            ]
        },
        {
            title: "Contact manager built using AngularJS Contacts",
            skills: ['Angular', 'Bootstrap', 'Coldfusion', 'JSON', 'jQuery'],
            collapsed: true,
            header: 'Contact manager built using AngularJS Contacts are originally pulled from a webservice via jquery using $.getJSON',
            resources: [
                {url: 'https://github.com/amusto/ngContactManager', text: 'Code & Demo'}
            ]
        },
        {
            title: "Simple exercise demonstrating programming concepts",
            skills: ['Angular', 'Bootstrap', 'Node'],
            collapsed: true,
            header: 'Simple exercise demonstrating programming concepts<br> Used Angular and Node as the stack.',
            resources: [
                {url: 'https://github.com/amusto/ngAirTrafficControlSystem', text: 'Code & Demo'}
            ]
        },
        {
            title: "Javascript Interview Basic Questions",
            skills: ['javascript'],
            collapsed: true,
            header: 'Examples of Basic Javascript Interview Questions.',
            resources: [
                {url: 'https://plnkr.co/edit/LBmRpQTWYTLnYLJnNIs0?p=preview', text: 'Plunker Example'}
            ]
        }
    ])
    .constant('profile_articles', [
        {
            title: "What is the difference between using var or let?",
            collapsed: false,
            header: "What is the difference between using var or let?",
            resources: [
                {srcUrl: 'https://gist.github.com/amusto/bdaf4c8e52a463baf88f63d8b36721ee.js', text: 'Example', type: 'modal'}
            ]
        }
    ]);
