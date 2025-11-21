import { UUID } from "crypto";

export interface IUsuarioRequest {
    loginUsr: string,
    email: string,
    nombre: string,
    clienteId?: number,
    indExterno: boolean,
    servicioExternoId: number,
    indEstado: boolean,
    password: string,
    imagenPerfilSrc: string,
    note: string,
    tipoUsuario: userTypeEnum,
    indActive: UUID,
    businessPartnersId: number,
    GPSphoneNumber: string,
    roles: IRolesUsuario[],
    center: ICenterUsuario[]
}

interface ICenterUsuario {
    centerId: number
}

export interface IRolesUsuario {
    roleId: number
}

enum userTypeEnum {
    Oficina = 'oficina',
    Cuidador = 'cuidador',
    Paciente = 'paciente'
}