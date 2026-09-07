// 一次性生成脚本: 读取 content-*.mjs 模块, 产出 content/image-to-pdf/ 下的多语言 markdown
// 用法: node scripts/gen-itp/emit.mjs
import { mkdirSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const root = join(dir, '..', '..', 'content', 'image-to-pdf');

const modules = readdirSync(dir)
  .filter((f) => f.startsWith('content-') && f.endsWith('.mjs'))
  .sort();

let total = 0;
for (const m of modules) {
  const mod = await import(join(dir, m));
  const def = mod.default;
  mkdirSync(join(root, def.section), { recursive: true });
  for (const [lang, c] of Object.entries(def.content)) {
    const frontmatter = [
      '---',
      `title: ${JSON.stringify(c.title)}`,
      `description: ${JSON.stringify(c.description)}`,
      `date: ${def.date}`,
      `lang: ${lang}`,
      `slug: ${def.slug}`,
      '---',
      '',
      '',
    ].join('\n');
    writeFileSync(
      join(root, def.section, `${def.slug}.${lang}.md`),
      frontmatter + c.body.trim() + '\n',
    );
    total++;
  }
  console.log(
    `[gen-itp] ${def.section}/${def.slug}: ${Object.keys(def.content).length} langs`,
  );
}
console.log(`[gen-itp] total ${total} files`);
