{
  // generic interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type brandX = {
    brand: string;
    model: string;
    display: string;
  };

  const developer1: Developer<brandX> = {
    name: "Abul",
    computer: {
      brand: "Dell",
      model: "S2h",
      releaseYear: 2011,
    },
    smartWatch: {
      brand: "X",
      model: "Y",
      display: "OLEd",
    },
  };

  interface brandZ {
    brand: string;
    model: string;
    heartTrack: boolean;
  }

  interface bikeBrand {
    model: string;
    engineCapacity: string;
  }

  const developer2: Developer<brandZ, bikeBrand> = {
    name: "Abul",
    computer: {
      brand: "Dell",
      model: "S2h",
      releaseYear: 2011,
    },
    smartWatch: {
      brand: "Z",
      model: "Y",
      heartTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
