let student=new Object();
number=prompt("Enter the number of properties the object should contain:");
for(let i=0;i<number;i++){
    keys=prompt(`Enter ${i} Key: `);
    values=prompt(`Enter ${i} Value: `);
    student[keys]=values; 
}
for(let j in student){
    console.log(j,student[j]);
}