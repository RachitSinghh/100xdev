// creating an HTTP server
const express = require("express");

const fs = require("fs");
const path = require("path")
const app = express();
const port = 3000;

const directory = "./files/";

// there's a folder names files
// and return list of files present in the folder in array in JSON format
app.get("/files", (req, res) => {
  // V  let fileName = []
  //  fs.readdirSync(directory).forEach(file => {
  //     console.log("file ==========", file)
  //     fileName.push(file)
  //  })
  //  console.log("fileName ======== ", fileName)
  //   res.send(fileName)
  fs.readdir(directory, (err, files) => {
    // step 2 : error handling
    if (err) {
      // what status code makes sense?
      // what message do you want to send?
      return res.status(404).json({
        message: "Couldn't able to find the files",
      });
    }

    // step 3: success response
    // files already contain what you need
    res.json(files);
  });
});

// inside the folder every file has some content inside it the goal is to send it
app.get("/file/:filename", (req, res) => {
  const fileName = req.params.filename;
  console.log(fileName)
  // step 1: build full path
  const filePath = path.join(directory, fileName)
  console.log(filePath)
  //step 2: read file
  fs.readFile(filePath, "utf-8", (err, data) => {
    // step 3: handle error
    if (err) {
      // think file not found vs other errors
      return res.status(404).send({
        message: "file not found",
      });
    }
    // step 4: success
    console.log(data)
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
