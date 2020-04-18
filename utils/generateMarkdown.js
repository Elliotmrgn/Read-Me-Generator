function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

## Usage 

## Credits

## License

`}

module.exports = generateMarkdown;
