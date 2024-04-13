// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "mit") {
    return `![Static Badge](https://img.shields.io/badge/license-mit-brightgreen)`;
  }
  if (license === "apache") {
    return `![Static Badge](https://img.shields.io/badge/license-apache-brightgreen)`;
  }
  return `none`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "mit") {
    return `[MIT](https://choosealicense.com/licenses/mit/)`;
  }
  if (license === "apache") {
    return `[Apache](http://www.apache.org/licenses/)`;
  }
  return `none`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "mit") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  if (license === "apache") {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  return `none`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
${renderLicenseBadge(data.License)}


  ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)


  ## Description

  ${data.Description}


  ## Installation
  
  ${data.Installation}


  ## Usage

  ${data.Usage}


  ## Contributing

  ${data.Contributing}


  ## Tests

  ${data.Tests}


  ## License

  ${renderLicenseLink(data.License)}

  ${renderLicenseSection(data.License)}


  ## Questions

  Visit my Github at https://github.com/${data.Github}

  For additional questions, email me at ${data.Email}

`;
}

module.exports = generateMarkdown;
