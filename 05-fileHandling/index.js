// readFile
import { readFile } from "fs/promises" // inbuilt module

const read_file = async (filename) => {
	const data = await readFile(filename, {
		encoding: 'utf8'
	})
	console.log(data);
}

// read_file("sample.txt")

// [ -------------------------------------------------------------------------------------- ]

// writeFile
import { writeFile } from "fs/promises" // inbuilt module

const write_file = async (filepath, content) => {
	await writeFile(filepath, content)
	console.log('SUCCESS!!')
}

// write_file("sample_written.txt", "written by riturajps")

// [ -------------------------------------------------------------------------------------- ]

// appendFile
import { appendFile } from "fs/promises" // inbuilt module

const addContent = async (filepath, content) => {
	await appendFile(filepath, `\n${content}`)
	console.log('APPENDED SUCCESS!!');
}

// addContent('sample_written.txt', 'this is a new message')

// [ -------------------------------------------------------------------------------------- ]

// make directory
import { mkdir } from "fs/promises" // inbuilt module

const createDir = async (foldername) => {
	await mkdir(foldername, { recursive: true })
	console.log(`CREATED!!`);
}

createDir('newDir')

// [ -------------------------------------------------------------------------------------- ]