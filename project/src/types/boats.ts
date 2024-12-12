export interface BoatModel {
  id: string;
  name: string;
  type: string;
  image: string;
  specs: {
    length: string;
    beam: string;
    weight: string;
    capacity: string;
    engines: string;
    fuelTank?: string;
    waterTank?: string;
    depth?: string;
    maxHp?: string;
  };
  features: string[];
}

export interface BoatDetails extends BoatModel {
  description: string;
  gallery: string[];
}