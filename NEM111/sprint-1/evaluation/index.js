 const { address, writeinfile , enternames, alldetails, deleteFile, makeCowSay } = require("./anotherFile");


 const input = process.argv;



adddress("masaischool.com");
writeinfile("employee.txt", "Employee names are as follows:");
alldetails("employee.txt")
deleteFile("employee.txt");

makeCowSay("employee.txt")


