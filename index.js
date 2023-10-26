const inquirer = require(`inquirer`);
const { writeFile } = require('fs').promises;


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project titled?',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'describe the installation process of your project?',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'How is your project used?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
          },
          {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to this project?',
          },
          {
            type: 'list',
            name: 'license',
            message: 'choose license used',
            choixes: ['AFL-3.0', 'Apache-2.0', 'Artistic-2.0', 'BSL-1.0', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD-3-Clause-Clear', 'BSD-4-Clause', '0BSD', 'CC', 'CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0', 'WTFPL', 'ECL-2.0', 'EPL-1.0', 'EPL-2.0', 'EUPL-1.1', 'AGPL-3.0', 'GPL', 'GPL-2.0', 'GPL-3.0', 'LGPL', 'LGPL-2.1', 'LGPL-3.0', 'ISC', 'LPPL-1.3c', 'MS-PL', 'MIT', 'MPL-2.0', 'OSL-3.0', 'PostgreSQL', 'OFL-1.1', 'NCSA', 'Unlicense', 'Zlib']
          }

        
    ]);
}
