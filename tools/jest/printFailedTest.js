import fs from 'node:fs';
import path from 'node:path';
import chalk from 'chalk';

const results = JSON.parse(fs.readFileSync('.cache/jest-results.json', 'utf8'));
const failed = results.testResults.filter((r) => r.status === 'failed');

if (failed.length === 0) {
  console.log(chalk.green('✅ No failed test files'));
} else {
  console.log(chalk.red('❌ Failed test files:\n'));
  failed.forEach((r) => {
    const fullPath = r.name;
    const fileName = path.basename(fullPath);
    console.log(chalk.red(fileName));
    console.log(chalk.gray(fullPath) + '\n');
  });
}
