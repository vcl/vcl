# [VCL](https://vcl.github.io/) calendar

Calendar to display and select date and time.

## Features

The calendar can be used to show typical representations of time unit like:

- Day (hours in a day).
- Month (days in a month).
- Year (months in year).
- Years (range of years).

Styling for the following kind of days or special days exist:

- Day from adjacent months to the currently shown month.
- Today.
- Disabled (for example for data ranges outside a valid range)
- Unavailable (for example for a schedule).
- Available (for example for a schedule).

Also styles to represent the selection of a time unit and ranges of time units
exist.

## Usage

Month view:

[month example](/demo/example-month.html)

Year view:

[year example](/demo/example-year.html)

Years view:

[years example](/demo/example-years.html)

## Classes

- `calendar`
- `cal-header-label`
- `weekday-label`
- `cal-item`

## Modifiers

### For `calendar`

- `cal-input` make the calendar appear as input for date selections.

### For `cal-item`

- `today`
- `other-month`
- `disabled`
- `selected`: Mark a time unit as selected
- `selected-alt`: Mark a time unit as selected with alternative style
- `selected-beg`: Mark the beginning of a time unit range
- `selected-end`: Mark the end of a time unit range
- `available`
- `unavailable`

## Variables

- `$calendar-bg-color`
- `$calendar-item-color`
- `$calendar-item-today-color`
- `$calendar-item-bg-color`
- `$calendar-item-hover-color`
- `$calendar-item-hover-bg-color`
- `$calendar-otherm-day-color`
- `$calendar-otherm-day-bg-color`
- `$calendar-selected-item-color`
- `$calendar-selected-item-bg-color`
- `$calendar-disabled-item-color`
- `$calendar-disabled-item-bg-color`
- `$calendar-available-item-bg-color`
- `$calendar-unavailable-item-bg-color`
