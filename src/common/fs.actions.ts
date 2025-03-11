'use server';

import fs from 'node:fs/promises';
import path from 'node:path';

export async function listFilesInFolder(
  folderPath: string,
  extension: string
): Promise<string[]> {
  return (await fs.readdir(path.join(process.cwd(), folderPath)))
    .filter((filename) => filename.endsWith('.' + extension))
    .map((filename) =>
      filename.substring(0, filename.length - extension.length - 1)
    );
}
