{
  // conditional type

  type a = null;
  type b = undefined;

  type c = a extends null ? true : false; // conditional type

  type d = a extends null ? string : number;

  type e = a extends number ? number : b extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  //   type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasTractor = CheckVehicle<"bike">;

  //
}
