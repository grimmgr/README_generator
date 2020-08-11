// function to generate markdown for README
function generateMarkdown(data) {
  let badgeInfo;
  if (data.license === 'GNU GPLv3') {
    badgeInfo = 'GPLv3-blue';
  } else if (data.license === 'GNU GPLv2') {
    badgeInfo = 'GPL%20v2-blue';
  } else if (data.license === 'Apache 2.0') {
    badgeInfo = 'Apache%202.0-blue';
  } else if (data.license === 'BSD 3-Clause') {
    badgeInfo = 'BSD%203--Clause-blue';
  } else if (data.license === 'BSD 2-Clause') {
    badgeInfo = 'BSD%202--Clause-orange';
  } else if (data.license === 'MIT') {
    badgeInfo = 'MIT-yellow';
  } 

  return `
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${ badgeInfo }.svg)

  [About](#description) :cd: [Installation](#installation) :cd: [Usage](#usage) :cd: [License](#license) :cd: [Contributing](#contributing) :cd: [Tests](#tests) :cd: [Contact](#contact)

  ## About
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  Licensed under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Contact
  Feel free to reach out to me in the following ways:
  * Github: [${ data.github}](http://github.com/${ data.github })
  * Email: [${ data.email }](mailto:${ data.email })
  `;
}

module.exports = generateMarkdown;
