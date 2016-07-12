const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ENTER AGE:', (answer) => {
  // TODO: Log the answer in a database
  var age = parseInt(answer);
  addyears(age,5);
  addyears(age,20);
  addyears(age,30);
  
  rl.close();
});
function addyears(age, increment){
var age1 = age + increment;
if (age1 < 15)
   console.log("After"+increment+"years:I dont have to think about my life yet");
else if ((age1 > 15) && (age1 < 30))
   console.log("After"+increment+"years:Need to finish studies and find a job");
else if ((age1 =>30) && (age1 < 35))
    console.log("After"+increment+"years:I need to marry");
else if ((age1 =>35) && (age1 < 40))
    console.log("After"+increment+"I will rear children");  
else if ((age1 =>40) && (age1 <=59))
    console.log("After"+increment+"Prepare to Retire");  
else if (age1>=60)
    console.log("After"+increment+"I will now retire");      
        
}
