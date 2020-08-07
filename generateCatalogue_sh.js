const fs = require("fs")

fs.readdir('./', (err, directories) => {
	if (err) {
		console.error(err)
	}
	let writeContent = ''
	directories.forEach(dir => {
		if (
			fs.statSync(dir).isDirectory() &&
			!['.', '_'].includes(dir[0])
		) {
			writeContent += `## ${dir}\n`
			fs.readdirSync(dir).forEach(file => {
				const reg = /^「(.+)」(.+)\.md$/
				const matchGroup = file.match(reg)
				const tag = matchGroup[1]
				const title = matchGroup[2]
				writeContent += `- [${tag} - ${title}](${tag}/${file})\n`
			})
		}
	})
	fs.writeFileSync('./READMEE.md', writeContent)
})
