export class ProfesorModel{
    constructor(
        public id_profesor: string,
        public numero_emp: string,
        public nombre: string,
        public ap_paterno: string,
        public ap_materno:string,
        public hora_semana: number,
        public prioridad: number
        //public fecha_nac: Date
    ){

    }
}
