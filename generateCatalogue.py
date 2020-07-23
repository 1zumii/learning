import os
import re

with open('./README.md', 'w', encoding='utf_8') as f:
	fileWrite = ['<h1 style="border:none;text-align:center">目 录</h1>\n']
	directories = os.listdir()
	for d in directories:
		if os.path.isdir(d) and d[0] not in ['_', '.']:
			fileWrite.append('## {}\n'.format(d))
			mdList = os.listdir(d)
			for md in mdList:
				matchFileName = re.match(r'^「(.+)」(.+)\.md$', md)
				tag = matchFileName.group(1)
				title = matchFileName.group(2)
				fileWrite.append('- [{} - {}]({}/{})\n'.format(tag, title, d, md))
	f.writelines(fileWrite)
