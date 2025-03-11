import { expect } from '@jest/globals';
import { listFilesInFolder } from '@/common/fs.actions';

jest.mock('node:fs/promises', () => ({
  readdir: jest.fn(() =>
    Promise.resolve(['file1.mdx', 'file2.mdx', 'file3.js', 'file4.mdx'])
  ),
}));

describe('listFilesInFolder', () => {
  test('should return the filenames without extension matching the extension', async () => {
    expect(await listFilesInFolder('/folder', 'mdx')).toEqual([
      'file1',
      'file2',
      'file4',
    ]);
    expect(await listFilesInFolder('/folder', 'js')).toEqual(['file3']);
  });

  test('should return empty array if no files matching the extension are found', async () => {
    expect(await listFilesInFolder('/folder', 'ts')).toEqual([]);
  });
});
