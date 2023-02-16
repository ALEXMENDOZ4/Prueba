export interface IUser {
  id?: string | null;
  name: string;
  lastName: string;
  birthDate: string;
  identification: string;
  profession: string;
  monthlyIncome: string;
  vehicle: string;
  married: number;
  createdAt?: string | null;
}

export interface IVehicles {
  id?: string | null;
  Brand: string;
  model: string;
  numberDoors: number;
  plate: string;
  vehicleType: string;
  createdAt?: string | null;
}