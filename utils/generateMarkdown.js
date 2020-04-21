function generateMarkdown(data) {
  return `
# ${data.title}

[![Github Link](https://img.shields.io/badge/GitHub-${data.gitName}-brightgreen)](https://github.com/${data.gitName})
[![Contact Me](https://img.shields.io/badge/Contact%20Me-email-blue)](mailto:${data.email})


[![Github Picture](${data.gitPic})]

## Description
${data.description}

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${data.install}

## Usage 
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions please email: ${data.email}


`}

module.exports = generateMarkdown;
