import fs from 'fs';
import path from 'path';

// Настройки фильтрации
const IGNORE_DIRS = ['node_modules', '.git', 'dist', 'build', '.idea'];
const IGNORE_EXTS = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.webp', '.mp4'];
const IGNORE_FILES = ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 'dump.mjs'];
const OUTPUT_FILE = 'portfolio_dump.txt';

let dumpContent = '=== PROJECT CONTEXT DUMP ===\n';

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (!IGNORE_DIRS.includes(file)) {
                scanDir(fullPath);
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            if (!IGNORE_EXTS.includes(ext) && !IGNORE_FILES.includes(file) && file !== OUTPUT_FILE) {
                const content = fs.readFileSync(fullPath, 'utf8');
                dumpContent += `\n--- FILE: ${fullPath} ---\n\n${content}\n`;
            }
        }
    }
}

try {
    scanDir('./');
    fs.writeFileSync(OUTPUT_FILE, dumpContent, 'utf8');
    console.log(`[SUCCESS] Дамп успешно собран в файл: ${OUTPUT_FILE}`);
} catch (err) {
    console.error(`[ERROR] Критическая ошибка при сборке дампа:`, err);
}