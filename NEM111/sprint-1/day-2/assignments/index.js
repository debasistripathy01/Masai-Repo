const fileSystem = require("fs");
//console.log(fileSystem);

fileSystem.readFileSync("./test.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Error Found Out");
    console.log(err);
  }
  console.log(data);
});

fileSystem.appendFileSync("./test.txt", ", We are in NEM111", (err) => {
  if (err) {
    console.log(" Error ");
    console.log(err);
  }
});

fileSystem.unlinkSync("./fileNew.txt", (err) => {
  if (err) {
    console.log("Error Found Out");
    console.log(err);
  }
  console.log("File Delete successfully");
});

fileSystem.writeFileSync("test.txt", "Hey There Dev", (err) => {
  if (err) {
    console.log("Error Found ");
    console.log(err);
  }
});

fileSystem.renameSync("./test.txt", "fileNew.txt", (err) => {
  if (err) {
    console.log("Error Found Out");
    console.log(err);
  }
  console.log("Rename Successfully");
});

fileSystem.link("./index.js", "./", (err) => {
  if (err) {
    console.log("Error Found Out");
    console.log(err);
  } else {
    console.log("Success");
  }
});