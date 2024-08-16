import { Role } from "./enum/Role"

export abstract class Personne {

    id!:number
    nom!:string
  email!:string
    password!:string
    role!:Role | undefined
}
