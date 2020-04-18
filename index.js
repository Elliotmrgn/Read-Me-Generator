const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

function questions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "gitName",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project's title?"
        },
         {
            type: "input",
            name: "description",
            message: "What is your project's description?"
        }/*,
        {
            type: "input",
            name: "install",
            message: "Describe your project's installation instructions?"
        },
        {
            type: "input",
            name: "usage",
            message: "Describe your projects usage"
        } */
    ]);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully

      })
}

async function init() {
    const answers = await questions();
    // const gitHub = api.getUser(answers.gitName)
    // console.log("init -> gitHub", gitHub)
    const html = generateMarkdown(answers)
    writeToFile("ReadMe.md", html)
}

init();
