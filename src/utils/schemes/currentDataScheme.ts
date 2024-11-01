export interface CurrentData {
  doing: [
    {
      bookTitle: string;
      bookAuthor: string;
      bookCover: string;
    },
    {
      bookTitle: string;
      bookAuthor: string;
      bookCover: string;
    },
    {
      songTitle: string;
      songArtist: string;
      albumCover: string;
    },
  ];
}

// export function validateCurrentData(a: unknown) {
//   return check<CurrentData, false>(a);
// }

export function validateCurrentData(a: CurrentData): [CurrentData, string[]] {
  return (() => {
    const value_1 = [];
    if (typeof a !== 'object' || a === null) {
      value_1.push('Expected a to be CurrentData');
    } else {
      const { doing: doing_1 } = a;
      if (!Array.isArray(doing_1)) {
        value_1.push('Expected a.doing to be [object, object, object]');
      } else {
        const [t_1, t_2, t_3] = doing_1;
        if (typeof t_1 !== 'object' || t_1 === null) {
          value_1.push('Expected a.doing[0] to be an object');
        } else {
          if (typeof t_1.bookTitle !== 'string') {
            value_1.push('Expected a.doing[0].bookTitle to be a string');
          }
          if (typeof t_1.bookAuthor !== 'string') {
            value_1.push('Expected a.doing[0].bookAuthor to be a string');
          }
          if (typeof t_1.bookCover !== 'string') {
            value_1.push('Expected a.doing[0].bookCover to be a string');
          }
        }
        if (typeof t_2 !== 'object' || t_2 === null) {
          value_1.push('Expected a.doing[1] to be an object');
        } else {
          if (typeof t_2.bookTitle !== 'string') {
            value_1.push('Expected a.doing[1].bookTitle to be a string');
          }
          if (typeof t_2.bookAuthor !== 'string') {
            value_1.push('Expected a.doing[1].bookAuthor to be a string');
          }
          if (typeof t_2.bookCover !== 'string') {
            value_1.push('Expected a.doing[1].bookCover to be a string');
          }
        }
        if (typeof t_3 !== 'object' || t_3 === null) {
          value_1.push('Expected a.doing[2] to be an object');
        } else {
          if (typeof t_3.songTitle !== 'string') {
            value_1.push('Expected a.doing[2].songTitle to be a string');
          }
          if (typeof t_3.songArtist !== 'string') {
            value_1.push('Expected a.doing[2].songArtist to be a string');
          }
          if (typeof t_3.albumCover !== 'string') {
            value_1.push('Expected a.doing[2].albumCover to be a string');
          }
        }
      }
    }
    return [a, value_1];
  })();
}

// https://f.ptcdn.info/090/085/000/shwn7z1p28uuOrOY2l2al-o.jpg
