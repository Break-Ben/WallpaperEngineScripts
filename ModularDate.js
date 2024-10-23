/* Asset Name: Modular Date
 * Version: 1.2.1
 * Author: Break (Break-Ben)
 * Author link: https://github.com/Break-Ben
 * Asset link: https://steamcommunity.com/sharedfiles/filedetails/?id=2908153534
 */
'use strict'

// Please note: Do not remove this line or asset references may break.
export let __workshopId = '2908153534';

// Constants
const DAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DAYS_SHORT = DAYS_LONG.map(day => day.slice(0, 3))
const MONTHS_SHORT = MONTHS_LONG.map(month => month.slice(0, 3))

// Script properties
export var scriptProperties = createScriptProperties()
    .addText({
        name: 'format',
        label: 'Format',
        value: '{day}, {month} {date}, {year}'
    })
    .addCheckbox({
        name: 'shortDay',
        label: 'Shortened Day Name',
        value: false
    })
    .addCheckbox({
        name: 'shortMonth',
        label: 'Shortened Month Name',
        value: false
    })
    .addCheckbox({
        name: 'shortYear',
        label: 'Shortened Year Number',
        value: false
    })
    .addCheckbox({
        name: 'suffix',
        label: 'Ordinal Suffix (e.g. 1st or 2nd)',
        value: false
    })
    .finish()

// Updating text
export function update(value) {
    const DAYS = scriptProperties.shortDay ? DAYS_SHORT : DAYS_LONG
    const MONTHS = scriptProperties.shortMonth ? MONTHS_SHORT : MONTHS_LONG
    const TIME = new Date()

    let date = TIME.getDate()
    let year = TIME.getFullYear()
    if (scriptProperties.suffix)
        date += ['st', 'nd', 'rd'][((date % 10) - 1) % 10] || 'th'
    if (scriptProperties.shortYear)
        year %= 100

    value = scriptProperties.format
        .replace('{day}', DAYS[TIME.getDay()])
        .replace('{date}', date)
        .replace('{month}', MONTHS[TIME.getMonth()])
        .replace('{month number}', TIME.getMonth() + 1)
        .replace('{year}', year)

    return value
}