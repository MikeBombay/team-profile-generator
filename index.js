const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { generateKey } = require('crypto');
const employees = [];

function addEmployee() {
    inquirer.prompt([{
        type: "text",
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
    .then(({name, role, id, email}) => {
        if (role === "Manager") {
            return inquirer.prompt([{
                type:'text',
                name: 'officeNo',
                message:"Enter Manager's office #"
            },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                "yes",
                "no"
                ],
                name: "addMore"
                }]).then(({officeNo, addMore})=>{
                    employees.push(new Manager(name, role, id, email, officeNo))
                        console.log(employees)
                        if (addMore === "yes") {addEmployee();
                        } else {
                            generate()
                        }
                    
        if (role === "Intern") {
            return inquirer.prompt([{
                type:'text',
                name: 'school',
                message:"Enter Intern's school"
            },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                "yes",
                "exit"
                ],
                name: "addMore"
            }])
            .then(({school, addMore})=> {
                employees.push(new Intern(name, role, id, email, school))
                if (addMore === "yes") {
                    addEmployee();
                } else {
                    generate()
                }
            

        if (role === "Engineer") {
            return inquirer.prompt([{
                type:'text',
                name: 'github',
                message:"Enter Engineer's Gihub ID"
                },
                {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no"
                    ],
                    name: "addMore"
                }])
                .then(({github, addMore})=> {
                    employees.push(new Engineer(name, role, id, email, github))
                    if (addMore === "yes") {
                        addEmployee();
                        console.log(employees)
                    } else {
                        generate()
                    }
                })}})}})}})};

                addEmployee()