const print=console.log;
const chalk=require("chalk");
const figlet=require("figlet");
const readline=require("readline");

console.clear();

print(chalk.blue(figlet.textSync("Tasker")));

print("Type a command (Type help to see the list of commands)");

const reader=readline.createInterface({
input: process.stdin,
output:process.stdout,
prompt:">"
});

reader.prompt();

const arr=[];

reader.on("line",function(data){
    var cmd=data.split(" ")[0];
    var darr=data.split(" ");
    darr.shift();

    var task=darr.join(" ");
if(cmd=="help"){
    print("Available commands:\n1. add task_name\n2. ls(to list all tasks\n3. delete id (enter id to delete it)");
}
else if(cmd=="add"){
    arr.push(task);
    print(task+" task is added...")
}
else if(cmd=="ls"){
    if(arr.length>0){
        print(chalk.blue("Tasks"));
    for(i in arr){
        print((chalk.yellow(`${+i+1} ${arr[i]}`)));
    }
}
    else{
        print(chalk.blue("No Tasks"));
    }
    
    
}
else if(cmd=="delete" && task.split(" ")[0]>0 && task.split(" ")[0]<arr.length){
    id=task.split(" ")[0];
    arr.splice(id-1,1);
    print(chalk.green('One task deleted'));
}
else{
    print(chalk.red("Wrong command"));
}
reader.prompt();
});


reader.on("close",function(){
    console.clear();
    console.log(chalk.bgBlue.black("Thanks for using our todo"));
});