export interface Lavado {
    nombreLav:string,
    duracion:number,
    precio:number,
    costo:number,
    puntos:number
    puntosOtorgar:number
}


export interface ProductoRequerido{
    lavado:string,
    marcaPro:string,
    nombrePro:string

}

export interface PersonalRequerido{
    lavado:string,
    idTrabajador:number
}