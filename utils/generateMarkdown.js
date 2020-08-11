// function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

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

  ## Questions
  ${data.questions}
  `;
}

module.exports = generateMarkdown;
