const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = [];

function addEmployee() {
    inquirer.prompt([{
        type: "text",
        message: "Enter team member's name",
        name: "name"
    },

    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
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
    },])
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
                    employees.push(new Manager(name, id, email, role, officeNo))
                        console.log(employees)
                        if (addMore === "yes") {addEmployee();
                        }
                        else generate()
                    })}
                
        else if (role === "Intern") {
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
                }
            })}
        
        else if (role === "Engineer") {
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
                       
                   
                }})}})};

                addEmployee();

//function generate(member) {
  //  return new Promise(function(resolve, reject) {
  //      let html = ""
  //      const name = member.getName();
  //      const role = member.getRole();
   //     const id = member.getId();
   //     const email = member.getEmail();
  //      if (role === "Manager") {
  //          const office = member.getOfficeNo
  //      html = `<div class="col-2" style="align-items: center;"></div>
  //      <h4>${name} - Manager</h4>
  //      <p>ID:${id}, Email: ${email}, Office#: ${office}</p>
 //   </body>
 //   </html>`
        
  //  console.log("Team member added")
 //   fs.appendFile("./src/page.html", html, function (err) {
  //      if (err) {
   //         return reject(err);
 //       };
 //       return resolve();
 //   });
//})};
