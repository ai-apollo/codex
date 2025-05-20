const fs = require('fs');
const data = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
const lines = ['| id | title |', '| --- | --- |'];
for (const task of data) {
  lines.push(`| ${task.id} | ${task.title} |`);
}
fs.writeFileSync('tasks.md', lines.join('\n') + '\n');
