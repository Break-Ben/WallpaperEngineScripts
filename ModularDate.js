// Script by Break :) \\
'use strict';

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
        name: 'ordinalSuffix',
        label: 'Add Ordinal Suffix (e.g. 3rd not 3)',
        value: false
    })
    .finish();

export function update(value) {
    var dayVar = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var monthVar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    if (scriptProperties.shortennedDay) {
        dayVar = dayVar.map(day => day.slice(0, 3));
    }
    if (scriptProperties.shortennedMonth) {
        monthVar = monthVar.map(month => month.slice(0, 3));
    }

    let time = new Date();
    var day = dayVar[time.getDay()]
    var date = time.getDate()
    if (scriptProperties.ordinalSuffix) {
        date += ['st', 'nd', 'rd'][((date + 90) % 100 - 10) % 10 - 1] || 'th'
    }
    var monthNumber = time.getMonth() + 1
    var month = monthVar[monthNumber - 1]
    var year = time.getFullYear()

    value = scriptProperties.format.replace('{day}', day)
    value = value.replace('{date}', date)
    value = value.replace('{month}', month)
    value = value.replace('{month number}', monthNumber)
    value = value.replace('{year}', year)
    return value;
}