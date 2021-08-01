const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = [];

function addEmployee() {
    inquirer.prompt([{
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
    }])
    .then(({employee, id, email, role}) => {
        if (role === "Manager") {
            return inquirer
                .prompt([{
                    type:'text',
                    name: 'officeNo',
                    message:"Enter Manager's office number"
                },
    
               
    // else if (role === "Engineer") {
            return inquirer
                .prompt([{
                    type: 'text',
                    name: 'github',
                    message: "Enter Engineer's Github username"
           
     // else if (role === 'Intern') {
             return inquirer
                .prompt([{
                    type:'text',
                    name:'school',
                    message: "What is the Intern's school?"
                },
                
};

   
}