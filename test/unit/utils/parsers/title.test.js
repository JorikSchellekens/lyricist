import { getMetadata } from '../../../../js/utils/parsers/title';

/**
 * Utility function to make metadata object for a song.
 */
const metaDataObject = (artist, title) => ({ artist, title });

/**
 * Test song titles with the - separator, which have spaces around
 * it.
 */
test('Song titles with the - separator', () => {
  [
    [
      'Kasabian - Re-wired',
      metaDataObject('Kasabian', 'Re-wired'),
    ],
    [
      'Dylan, Bob - A Hard Rain\'s A-Gonna Fall',
      metaDataObject('Dylan, Bob', 'A Hard Rain\'s A-Gonna Fall'),
    ],
    [
      'Lekman, Jens - Friday Night at the Drive-in Bingo',
      metaDataObject('Lekman, Jens', 'Friday Night at the Drive-in Bingo'),
    ],
  ]
    // Add the ` - YouTube` suffix which is added by YouTube to the document
    // title.
    .map(([ fullname, songObject ]) => [ `${fullname} - YouTube`, songObject ])
    .forEach(([ fullname, songObject ]) => {
      document.title = fullname;
      expect(getMetadata()).toEqual(songObject);
    });
});

/**
 * Test song titles with the delimiter between the artist name and the song
 * title other than `-`.
 */
test('Song titles with separators other than -', () => {
  [
    [
      'Kasabian:Rewired',
      metaDataObject('Kasabian', 'Rewired'),
    ],
    [
      'Kasabian : Rewired',
      metaDataObject('Kasabian', 'Rewired'),
    ],
    [
      'Dylan, Bob///A Hard Rain\'s A-Gonna Fall',
      metaDataObject('Dylan, Bob', 'A Hard Rain\'s A-Gonna Fall'),
    ],
    [
      'Dylan, Bob /// A Hard Rain\'s A-Gonna Fall',
      metaDataObject('Dylan, Bob', 'A Hard Rain\'s A-Gonna Fall'),
    ],
    [
      'Lekman, Jens|Friday Night at the Drive-in Bingo',
      metaDataObject('Lekman, Jens', 'Friday Night at the Drive-in Bingo'),
    ],
    [
      'Lekman, Jens | Friday Night at the Drive-in Bingo',
      metaDataObject('Lekman, Jens', 'Friday Night at the Drive-in Bingo'),
    ],
  ]
    // Add the ` - YouTube` suffix which is added by YouTube to the document
    // title.
    .map(([ fullname, songObject ]) => [ `${fullname} - YouTube`, songObject ])
    .forEach(([ fullname, songObject ]) => {
      document.title = fullname;
      expect(getMetadata()).toEqual(songObject);
    });
});
