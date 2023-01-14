// Script by Break :) \\
'use strict';

var dayVar = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var monthVar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export var scriptProperties = createScriptProperties()
    .addText({
        name: 'format',
        label: 'Format',
        value: '{day}, {month} {date}, {year}'
    })
    .addCheckbox({
        name: 'shortennedDay',
        label: 'Shortenned Day Name',
        value: false
    })
    .addCheckbox({
        name: 'shortennedMonth',
        label: 'Shortenned Month Name',
        value: false
    })
    .addCheckbox({
        name: 'shortennedYear',
        label: 'Shortenned Year Number',
        value: false
    })
    .addCheckbox({
        name: 'ordinalSuffix',
        label: 'Add Ordinal Suffix (e.g. 3rd not 3)',
        value: false
    })
    .finish();

export function update() {
    let time = new Date();
    var date = time.getDate()
    var monthNumber = time.getMonth() + 1
    var year = time.getFullYear()

    if (scriptProperties.shortennedDay) {
        dayVar = dayVar.map(day => day.slice(0, 3));
    }
    if (scriptProperties.shortennedMonth) {
        monthVar = monthVar.map(month => month.slice(0, 3));
    }
    if (scriptProperties.shortennedYear) {
        year %= 100
    }
    if (scriptProperties.ordinalSuffix) {
        date += ['st', 'nd', 'rd'][((date + 90) % 100 - 10) % 10 - 1] || 'th'
    }

    return scriptProperties.format
        .replace('{day}', dayVar[time.getDay()])
        .replace('{date}', date)
        .replace('{month}', monthVar[monthNumber - 1])
        .replace('{month number}', monthNumber)
        .replace('{year}', year);
}