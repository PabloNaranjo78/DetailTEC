export interface Sucursal {
    nombreSuc:string,
    fechaApert:string,
    telefono:number,
    pronvincia:string,
    canton:string,
    distrito:string,
    tiempoDispo:number
}

export interface adminSucursal{
    sucursal:string
    fechaGerente:string,
    gerente:number,
}
