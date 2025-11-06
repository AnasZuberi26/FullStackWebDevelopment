const fs = require("fs");
const path = require("path");

const targetFolder = path.resolve("./folder");

function clearTheClutter(folderPath) {
  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) return;

    const ext = path.extname(file).slice(1);

    let folderName;
    if (ext) {
      folderName = ext.toUpperCase();
    } else {
      folderName = "OTHERS";
    }

    const folderToMove = path.join(folderPath, folderName);

    if(!fs.existsSync(folderToMove)){
        fs.mkdirSync(folderToMove)
    }

    const destPath = path.join(folderToMove, file);
    fs.renameSync(filePath, destPath)
  });

  console.log("Clutter cleared successfully");
}

clearTheClutter(targetFolder);
