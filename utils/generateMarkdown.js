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

  ## Tests

  ## Questions

  `;
}

module.exports = generateMarkdown;
