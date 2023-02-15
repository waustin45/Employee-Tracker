const inquirer = require("inquirer")
const fs = require('fs');
const newArr = ["exit"]
let departments;
function fetchCall (choice) {
    fetch(`http://localhost:3001/api/${choice}`, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
        
        console.table(data)
        return newArr
    }).catch( err => {
        console.log(err)
    })
}
function fetchPost (choice, vari) {
    fetch(`http://localhost:3001/api/${choice}`, {method: 'POST', headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify(vari)})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        return data
    }).catch( err => {
        console.log(err)
    })
}
function departmentPrompt (dep) {
    inquirer.prompt(
        [
            {
                type:"input",
                message: "What is the department name?",
                name:"depChoice"
            },
        ]
    ).then(res => {
        const input = {
           name: res.depChoice
        }
        console.log(input)
        fetchPost(dep, input)
    })
}
function rolePrompt (dep) {
    inquirer.prompt(
        [
            {
                type:"input",
                message: "What is the role title?",
                name:"roleChoice"
            },
            {
                type:"input",
                message: "What is the role salary?",
                name:"role2Choice"
            },
            {
                type:"input",
                message: "What is the Department ID?",
                name:"role3Choice"
            },
        ]
    ).then(res => {
        const input = {
           title: res.roleChoice,
           salary: res.role2Choice,
           department_id: res.role3Choice
        }
        console.log(input)
        fetchPost(dep, input)
    })
}
function employeePrompt (dep) {
    inquirer.prompt(
        [
            {
                type:"input",
                message: "What is the employee's first name?",
                name:"fNameChoice"
            },
            {
                type:"input",
                message: "What is the employee's last name?",
                name:"lNameChoice"
            },
            {
                type:"input",
                message: "What is the role ID?",
                name:"TwoNameChoice"
            },
        ]
    ).then(res => {
        const input = {
           first_name: res.fNameChoice,
           last_name: res.lNameChoice,
           role_id: res.TwoNameChoice
        }
        console.log(input)
        fetchPost(dep, input)
    })
}
function addPrompt () {
    inquirer.prompt(
        [
            {
                type:"list",
                message: "Would you like to add anything?",
                choices: ["departments", "roles", "employees", "add nothing"],
                name:"addChoice"
            },

        ]
    ).then(res => {
        const choice = res.addChoice
        console.log(choice)
        if (choice == "departments") {
            console.log("added")
            departmentPrompt(choice)
        } else if(choice == "roles") {
            console.log(choice)
            rolePrompt(choice)
        } else if (choice == "employees") {
            console.log(choice)
            employeePrompt(choice)
        } else {
            return
        }
    })
}


function startPrompt () {
    inquirer.prompt(
        [
            {
                type:"list",
                message: "Which would you like to see?",
                choices: ["departments", "roles", "employees"],
                name:"startChoice"


            }
        ]
    ).then( async (res) => {
        const choice = res.startChoice
        
        if (choice == "departments") {
            
             fetchCall(choice)
             
           await inquirer.prompt([
               { type:"list",
                message: "Would you like to add a Department?",
                choices: ["Yes", "No"],
                name:"iffChoice"}
            ]).then(sec => {
                const iff = sec.iffChoice
                if (iff == "Yes") {
                    departmentPrompt(choice)
                } else {
                    return
                }
            })
           
           
        } else if(choice == "roles") {
            
            fetchCall(choice)
           await inquirer.prompt([
                { type:"list",
                 message: "Would you like to add a Role?",
                 choices: ["Yes", "No"],
                 name:"iffChoice"}
             ]).then(sec => {
                 const iff = sec.iffChoice
                 if (iff == "Yes") {
                     rolePrompt(choice)
                 } else {
                     return
                 }
             })
        } else {
            
            fetchCall(choice)
           await inquirer.prompt([
                { type:"list",
                 message: "Would you like to add an Employee?",
                 choices: ["Yes", "No"],
                 name:"iffChoice"}
             ]).then(sec => {
                 const iff = sec.iffChoice
                 if (iff == "Yes") {
                     employeePrompt(choice)
                 } else {
                     return
                 }
             })
        }
    })
}
startPrompt()