export enum FuelType {
  GASOLINE = "Gasoline",
  GASOLINE_CNG = "Gasoline+CNG",
  GASOLINE_LPG = "Gasoline+LPG",
  DIESEL = "Diesel",
  ELECTRIC = "Electric",
  ETHANOL = "Ethanol",
  HYBRID = "Hybrid",
  PLUG_IN_HYBRID = "Plug-in hybrid",
  HYDROGEN = "Hydrogen",
}

export enum OfferType {
  PRIVATE = "private",
  COMPANY = "company"
}

interface Location {
    description: string;
}

export interface ShortInfo {
  id: string;
  title: string;
  brand: string;
  model: string;
  version: string;
  engineCode: string;
  capacity: number;
  mileage: number;
  fuel: FuelType;
  yearOfProd: number;
  price: string;
  thumbnail: string;
  location: Location;
  offerType: OfferType
}
