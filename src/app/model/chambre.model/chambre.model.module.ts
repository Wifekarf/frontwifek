
export interface Chambre {
  idChambre: number;
  numeroChambre: number;
  typeC: string;
  bloc?: any; // You can define a Bloc model if needed
  reservations?: any[]; // Define Reservation model if needed
}
