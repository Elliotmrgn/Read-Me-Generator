const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");
const fs = require("fs");



function questions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "gitName",
            message: "What is your GitHub username?",
        } ,
        {
            type:"input",
            name:"email",
            message:"What is your email?"
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
        },
        {
            type: "input",
            name: "install",
            message: "Describe your project's installation instructions?"
        },
        {
            type: "input",
            name: "usage",
            message: "Describe your projects usage:"
        },
        {
            type : "input",
            name: "license",
            message: "What kind of license should your software have?",
        },
        {
            type:"input",
            name:"contributing",
            message: "Information about making contributions: "
        },
        {
            type:"input",
            name: "tests",
            message: "What command should be run to make tests?"
        } 
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
    //user input
    const answers = await questions();
    //adds github pic from api call
    answers.gitPic = await api.getUser(answers.gitName)
    //creates the markdown
    const html = generateMarkdown(answers)
    //writes the markdown to the file
    writeToFile("output/ReadMe.md", html)
}

init();
