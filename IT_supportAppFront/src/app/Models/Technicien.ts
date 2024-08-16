import { Personne } from "./personne";
import { Ticket } from "./Ticket";

export class Technicien extends Personne{

  tickets!:Ticket[]
}
