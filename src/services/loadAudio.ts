import { join } from 'path';
import { getAudioDirectory } from './utils/getAudioDirectory';
import { listAudioFiles } from './utils/listAudioFiles';
import { parseAudioFile } from './utils/parseAudioFile';

export interface IAudioPath {
  uk?: string;
  us?: string;
}

interface ILoadAudio {
  word: string;
  audioFiles: Record<string, IAudioPath>;
}

/**
 * Load audio file paths for a given word, structured with filenames as keys.
 *
 * @param word - The word for which to load audio files
 * @returns Object containing filenames as keys and their audio paths grouped by region (UK/US), or null if not found
 */
export function loadAudio(word: string): ILoadAudio | null {
  const wordDir: string | null = getAudioDirectory(word);
  if (!wordDir) {
    return null;
  }

  const files: string[] = listAudioFiles(wordDir);

  const audioFiles: Record<string, IAudioPath> = {};
  files.forEach((file) => {
    const parsed = parseAudioFile(file);
    if (parsed) {
      const { baseName, region } = parsed;

      if (!audioFiles[baseName]) {
        audioFiles[baseName] = {};
      }

      audioFiles[baseName][region] = join(wordDir, file);
    }
  });

  return {
    word,
    audioFiles,
  };
}
