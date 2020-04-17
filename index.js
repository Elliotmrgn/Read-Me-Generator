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
        }

    ]);
}

function writeToFile(fileName, data) {
    
}

async function init() {
    const answers = await questions();
    console.log("init -> answers", answers)
    
    const html = generateMarkdown(answers)
    console.log("init -> html", html)
}

init();
