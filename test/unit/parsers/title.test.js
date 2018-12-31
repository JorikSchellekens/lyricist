import { getMetadata } from '../../../js/utils/parsers/title';

/**
 * Utility function to make metadata object for a song.
 */
const metaDataObject = (artist, title) => ({ artist, title });

/**
 * Test song names with the - separator, which have spaces around
 * it.
 */
test('Song names with the - separator', () => {
  [
    [
      'Kasabian - Rewired',
      metaDataObject('Kasabian', 'Rewired')
    ],
    [
      'Dylan, Bob - A Hard Rain\'s A-Gonna Fall',
      metaDataObject('Dylan, Bob', 'A Hard Rain\'s A-Gonna Fail')
    ],
    [
      'Lekman, Jens - Friday Night at the Drive-in Bingo',
      metaDataObject('Lekman, Jens', 'Friday Night at the Drive-in Bingo')
    ],
  ]
  .map(([ fullname, songObject ]) => [ `${fullname} - YouTube`, songObject ])
  .forEach(([ fullname, songObject ]) => {
    document.title = fullname;
    expect(getMetadata()).toEqual(songObject);
  });
});
