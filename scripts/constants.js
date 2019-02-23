angular.module('app.commonConstants', [])
    .constant('profile_code_descs', [
        {
            title: "Mongo, Express, React, Node - Email Survey App",
            description: "Fullstack application demonstrating REACT front end interaction with Node driven Authentication with Google and secure CC processor using Stripe library. Backend server sent out email surveys using Sendgrid.",
            skills: ['REACT', 'Express', 'Node', 'MongoDB', 'SendGrid'],
            collapsed: false,
            header: "M.E.R.N, React/Node/Mongo Application",
            resources: [
                {url: 'https://github.com/amusto/mern-boilerplate-app', text: 'Review Code & Live Demo'}
            ]
        },
        {
            title: "Webpack Sample Project (React/Webpack Project)",
            skills: ['REACT', 'Webpack'],
            collapsed: true,
            header: "Webpack, React sample project hosted via Github Pages",
            resources: [
                {url: 'https://github.com/amusto/WebpackSampleDeploy', text: 'Code & Demo'}
            ]
        },
        {
            title: "React/Webpack Starter (aka MERN BoilerPlate)",
            skills: ['REACT', 'Webpack', 'Redux', 'Express', 'REST', 'MongoDB'],
            collapsed: true,
            header: "React, Mongo, Express Boilerplate, using Webpack middleware, running node for local API. Demonstrating React routing, REST, MongoDB, Webpack",
            resources: [
                {url: 'https://github.com/amusto/mern-webpack-starter', text: 'Code & Demo'}
            ]
        },
        {
            title: "REACT/Redux Blog Example",
            skills: ['REACT', 'Redux', 'REST', 'MongoDB'],
            collapsed: true,
            header: "REACT/Redux Blog example, demonstrating react routing, REST, MongoDB",
            resources: [
                {url: 'https://github.com/amusto/react-heroku', text: 'Code & Demo'}
            ]
        },
        {
            title: "D3 Code Sample",
            skills: ['Angular', 'Bootstrap', 'D3'],
            collapsed: true,
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
                {url: 'https://github.com/amusto/ngContactManager', text: 'Github Code'}
            ]
        },
        {
            title: "Simple exercise demonstrating programming concepts",
            skills: ['Angular', 'Bootstrap', 'Node'],
            collapsed: true,
            header: 'Simple exercise demonstrating programming concepts<br> Used Angular and Node as the stack.',
            resources: [
                {url: 'https://github.com/amusto/ngAirTrafficControlSystem', text: 'Github Code'}
            ]
        }
    ])
    .constant('profile_articles', [
        {
            title: "What are the differences between const, var and let?",
            collapsed: false,
            header: "What are the differences between const, var and let?",
            resources: [
                {srcUrl: 'https://gist.github.com/amusto/bdaf4c8e52a463baf88f63d8b36721ee.js', text: 'Example', type: 'modal'}
            ]
        }
    ]);
