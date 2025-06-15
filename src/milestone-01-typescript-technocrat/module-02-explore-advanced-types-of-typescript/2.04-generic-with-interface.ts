{
  // GENERIC INTERFACE

  interface Developer<X, Z = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: X;
    bike?: Z;
  }

  interface WatchBrand1 {
    brand: string;
    model: string;
    display: string;
  }

  const developer1: Developer<WatchBrand1> = {
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

  interface WatchBrand2 {
    brand: string;
    model: string;
    heartTrack: boolean;
  }

  interface BikeBrand1 {
    model: string;
    engineCapacity: string;
  }

  const developer2: Developer<WatchBrand2, BikeBrand1> = {
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
}
