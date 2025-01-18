import { IPronunciationRegion } from "../../types";

export interface IAudioFile {
  baseName: string;
  region: IPronunciationRegion;
}

/**
 * Parse an audio file name to extract the base word and region.
 *
 * @param fileName - The audio file name (e.g., "abandon__gb_1.mp3")
 * @returns An object with the base word and region, or null if invalid
 */
export function parseAudioFile(fileName: string): IAudioFile | null {
    const match = fileName.match(/^(.*?)__(gb|us)_\d+\.mp3$/);
    if (match) {
      return {
        baseName: match[1],
        region: match[2] === 'gb' ? 'uk' : 'us',
      };
    }
    console.warn(`Invalid file name format: ${fileName}`);
    return null;
  }
