angular.module('app.commonConstants', [])
    .constant('profile_code_descs', [
        {
            title: "Custom Angular Tabs Directive",
            skills: ['Angular', 'Bootstrap'],
            collapsed: false,
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
        }
    ]);