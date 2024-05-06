#! /usr/bin/env node
import inquirer from "inquirer"
import { differenceInSeconds } from "date-fns"
import chalk from "chalk"
import clear from "clear"
import figlet from "figlet"
import chalkAnimation from "chalk-animation"

clear()
const rainbow =  chalkAnimation.rainbow(figlet.textSync("Timer",{horizontalLayout : "full"}));
  
setTimeout(() => {
  rainbow.stop();
  Countdown();
}, 1000);

async function firstAnimate(text:string) {
    for(let char of text){
        process.stdout.write(char);
        await new Promise((resolve) => {
           setTimeout(resolve,5) 
        })
    }
  }

async function Countdown() {
    const ask : any = await inquirer.prompt({
        name : "userInput",
        type : "number",
        message : chalk.cyanBright("Enter the time of second : "),
        validate : (input)=>{
            if(isNaN(input)){
            return chalk.bgRed.whiteBright.italic.underline( "\n\tPlease Enter Valid Number.\n")
            }else if (input > 60){
            return chalk.bgRed.italic.whiteBright.underline("\n\tPlease Enter a Number less than 60.\n") 
            }else {
            return true;
            }
        },
    });
    let input = ask.userInput
    
    function startTime(val : number){
        const intTime = new Date().setSeconds(new Date().getSeconds()+ val)
        const intervalTime = new Date(intTime)
        setInterval(async ()=>{
         const currentTime = new Date();
         const timeDiff = differenceInSeconds(intervalTime, currentTime)
         if(timeDiff <= 0 ){
             await firstAnimate(chalk.bgRed.whiteBright.italic("Timer has Expired"));
                     process.exit()           
         }
         const minute = Math.floor((timeDiff%(3600*24))/3600)
         const second = Math.floor(timeDiff%60);
         console.log(chalk.greenBright(`${minute.toString().padStart(2,"0")} : ${second.toString().padStart(2,"0")}`));
        },1000);
    }
    startTime(input)
}


