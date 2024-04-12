// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "mit") {
    return `![Static Badge](https://img.shields.io/badge/license-mit-brightgreen)`;
  }
  return `none`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "mit") {
    return `[MIT](https://choosealicense.com/licenses/mit/)`;
  }
  return `none`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "mit") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  return `none`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.License)}

  ## description

  ${data.description}

  ## Installation
  
  ${data.Installation}

  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


  ## license

  ${renderLicenseLink(data.License)}


  ${renderLicenseSection(data.License)}

  ## Questions

  You can find me at my Github [${data.Github}](https://github.com/${data.Github})

`;
}

module.exports = generateMarkdown;
