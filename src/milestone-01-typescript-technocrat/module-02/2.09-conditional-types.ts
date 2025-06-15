{
  // CONDITIONAL TYPE

  type a = null;
  type b = undefined;

  type x = a extends null ? true : false; // conditional type

  type y = a extends null ? string : number;

  type z = a extends number ? number : b extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  // T extends "bike" | "car" | "ship" ? true : false;
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"bike">;
  type HasTractor = CheckVehicle<"tractor">;
}
