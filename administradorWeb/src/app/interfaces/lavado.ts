export interface Lavado {
    nombreLav:string,
    duracion:number,
    precio:number,
    costo:number,
    puntos:number
}


export interface InsumoRequeridos{
    lavado:string,
    marcaPro:string,
    nombrePro:string

}

export interface PersonalRequerido{
    lavado:string,
    personal:string
}