export interface Car {
  id: number;

  brand?: string;        // Kia, Peugeot…
  model?: string;        // Rio, 208…
  year: number;

  price: number;        // Car price
  monthlyPayment: number;   // Leasing monthly

  durationMonths: number;   // 36, 48, 60
  downPayment: number;      // Apport

  fuelType?: string;
  gearbox?: string;
  imageUrl?: string;

  isAvailable: boolean;     // DISPONIBLE / NON DISPO

  createdAt: string;       // ISO date from API
}
