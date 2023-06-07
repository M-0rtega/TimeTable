export class MateriaModel{
    constructor(
        public id_materia: string,
        public cve_materia: string,
        public descripcion:string, 
        public ht: number,
        public hp: number,
        public credito:number,
        public reticula:string 
    ){

    }
}