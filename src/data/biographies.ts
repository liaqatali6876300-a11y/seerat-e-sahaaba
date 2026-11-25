import { BIOGRAPHIES_PART_1 } from './biographiesPart1';
import { BIOGRAPHIES_PART_2 } from './biographiesPart2';
import { SahabiBiography } from '../types/seerah';

export const ALL_BIOGRAPHIES: SahabiBiography[] = [
  ...BIOGRAPHIES_PART_1,
  ...BIOGRAPHIES_PART_2,
].sort((a, b) => a.volumeNumber - b.volumeNumber);
