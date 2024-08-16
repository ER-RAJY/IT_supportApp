import { Equipements} from "./Equipements";

import { Ticket } from "./Ticket";
import {Personne} from "./personne";

export class User extends Personne{

  equipements!: Equipements[]
  tickets!:Ticket[]

}
