// Script by Break :) \\
'use strict';

export var scriptProperties = createScriptProperties()
    .addCombo({
        name: 'day',
        label: 'Day',
        options: [{
            label: 'Disabled',
            value: '0'
        }, {
            label: 'Shortenned',
            value: '1'
        }, {
            label: 'Full',
            value: '2'
        }]
    })
    .addCombo({
        name: 'month',
        label: 'Month',
        options: [{
            label: 'Shortenned',
            value: '1'
        }, {
            label: 'Full',
            value: '2'
        }]
    })
    .addCheckbox({
        name: 'displayYear',
        label: 'Display Year',
        value: false
    })
    .finish();

export function update(value) {
    if (scriptProperties.day == 1) {
        var dayVar = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    }
    else if (scriptProperties.day == 2) {
        var dayVar = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    }
    if (scriptProperties.month == 1) {
        var monthVar = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
    else {
        var monthVar = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }

    let time = new Date();
    if (dayVar) { var day = dayVar[time.getDay()] }
    var date = time.getDate()
    var month = monthVar[time.getMonth()]
    var year = time.getFullYear()

    if (day) { value = day + ", " }
    else { value = "" }
    value += month + " " + date
    if (scriptProperties.displayYear) { value += ", " + year }
    return value;
}