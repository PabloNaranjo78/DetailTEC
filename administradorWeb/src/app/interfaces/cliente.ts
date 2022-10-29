export interface Cliente {
    idCliente:number,
    usuario:string,
    contraseña:string,
    infoContacto:string,
    nombre:string,
    email:string
    puntosRedm:number,
    puntosDispo:number
}

export interface Telefono{
    idCliente:number,
    telefono:number
}

export interface Direccion{
    idCliente:number,
    provincia:string,
    canton:string,
    distrito:string
}


