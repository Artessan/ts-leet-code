import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const args = process.argv.slice(2);

const nameArg = args.find(arg => !arg.startsWith('--'));
const difficulty = args.find(arg => arg.startsWith('--'))?.replace('--', '');

if (!nameArg || !difficulty) {
  console.error('Usage: pnpm gen <problemName> --<difficulty>');
  process.exit(1);
}

const toKebabCase = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const kebabName = toKebabCase(nameArg);
const dirs = [
  `docs/${difficulty}`,
  `src/${difficulty}`,
  `tests/unit/${difficulty}`
];

const files = [
  {
    path: `docs/${difficulty}/${kebabName}.md`,
    content: `# ${nameArg}\n\n## Description\n\n_TODO_\n`
  },
  {
    path: `src/${difficulty}/${kebabName}.ts`,
    content: `export function ${nameArg}(/* params */): any {\n  // TODO: implement\n}\n`
  },
  {
    path: `tests/unit/${difficulty}/${kebabName}.test.ts`,
    content: `import { ${nameArg} } from '../../../src/${difficulty}/${kebabName}'\n\ndescribe('${nameArg}', () => {\n  it('should work', () => {\n    expect(${nameArg}(/* args */)).toBe(/* expected */);\n  });\n});\n`
  }
];

dirs.forEach(dir => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
});

files.forEach(file => {
  if (!existsSync(file.path)) {
    writeFileSync(file.path, file.content);
    console.log('Created:', file.path);
  } else {
    console.log('Skipped (already exists):', file.path);
  }
});
