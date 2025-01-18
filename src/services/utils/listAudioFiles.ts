import { readdirSync } from 'fs';

export function listAudioFiles(dir: string): string[] {
  try {
    return readdirSync(dir);
  } catch (error) {
    console.error(`Error reading directory: ${dir}`, error);
    return [];
  }
}
