import path from "path"

// join two or more file
const fullPath = path.join('/path', 'public', 'index.html')
console.log(fullPath); //[ \path\index.py\file.jsva ]


// absolute path
const absoulutePath = path.resolve() // D:\NodeJS-Mastery\03-pathModule
const extensionName = path.extname('resume.pdf') // .pdf