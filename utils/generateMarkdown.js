function generateMarkdown(data) {
  return `
# ${data.title}

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
