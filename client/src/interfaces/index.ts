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