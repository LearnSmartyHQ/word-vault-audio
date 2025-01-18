import { existsSync } from 'fs';
import { join } from 'path';

export function getAudioDirectory(word: string): string | null {
  const basePath = join('../../../data/audio');
  const firstLetter = word[0].toLowerCase();
  const wordLowercase = word.toLowerCase();
  const wordDir = join(basePath, firstLetter, wordLowercase);

  if (existsSync(wordDir)) {
    return wordDir;
  } else {
    console.error(`Audio directory for word "${word}" does not exist.`);
    return null;
  }
}
