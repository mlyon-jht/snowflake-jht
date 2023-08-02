# Snowflake-JHT

Snowflake-JHT is Johnson's fork of Medium's tool for planning and supporting our engineers' career development. The tool allows team members to explore the expectations of their current role as well as consider what is involved in other roles.

## Contributions

You are encouraged to read through the code, comment, and even suggest improvements. If you wish to contribute code, create a new branch and submit the work for review.

## Installation

Switch to Node v14 if you're not already on it.

`nvm use v14`

> you may need to install it: `nvm install v14`

Get yarn if you don’t have it already:

`npm install -g yarn`

> If you're not sure, use: `which yarn`

Install dependencies:

`yarn`

### Running the dev server

`yarn dev`

### Building

`yarn export`

This will put a static version of the site in `out/`.

## Future work

* Load initial data from a file, to improve flexibility.
* Save data to a file
* Add restricted job title selection and validation.
