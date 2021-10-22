const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let employees = [];

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
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "exit"
            ],
            name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            generate(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addEmployee();
                } else {
                    finish();
                }
            });
            
        });
    });
}

function generate(member) {
   return new Promise(function(resolve, reject) {
       let html = ""
       const name = member.getName();
       const role = member.getRole();
       const id = member.getId();
       const email = member.getEmail();
       if (role === "Engineer") {
        const gitHub = member.getGithub();
        html = `<div class="col-4">
        <div class="card mx-auto mb-3" style="width: 14rem">
        <h5 class="card-header" style="background-color:cornflowerblue;">${name}<br />Engineer</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">GitHub: ${gitHub}</li>
        </ul>
        </div>
    </div>`;
    } else if (role === "Intern") {
            const school = member.getSchool();
            html = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 14rem">
            <h5 class="card-header" style="background-color:cornflowerblue;">${name}<br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
    } else {
        const officeNo = member.getOfficeNo();
        html = `<div class="col-4">
        <div class="card mx-auto mb-3" style="width: 14rem">
        <h5 class="card-header" style="background-color:cornflowerblue;">${name}<br />Manager</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">Office Phone: ${officeNo}</li>
        </ul>
        </div>
    </div>`
    }
        
   console.log("Team member added")
   fs.appendFile("./src/page.html", html, function (err) {
       if (err) {
           return reject(err);
       };
       return resolve();
   });
});
}
function finish() {
    const close = ` </div></div>
</body>
</html>`;

    fs.appendFile("./src/page.html", close, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}
addEmployee()