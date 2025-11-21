import { ITokenBody } from "../interfaces/ITokenBody.js";
import { IUsuarioPermissionsResponse } from "../interfaces/IUsuarioPermissionsResponse.js";


export class TokenBody implements ITokenBody {
    usuarioId: number;
    email: string;
    nombre: string;
    imagenPerfilSrc: string;
    tipoUsuario: string;
    usuarioPermissions?: IUsuarioPermissionsResponse;
    businessPartnersId: string;
    getStreamId: string;
    country: number;
    centrosId: number[]

    constructor(data: any, permissions: IUsuarioPermissionsResponse){
        this.usuarioId = data.usuarioId;
        this.email = data.email;
        this.nombre = data.nombre;
        this.imagenPerfilSrc = data.imagenPerfilSrc;
        this.tipoUsuario = data.tipoUsuario;
        this.usuarioPermissions = permissions;
        this.businessPartnersId = data.businessPartnersId;
        this.getStreamId = data.getStreamId;
        this.country = data.country;
        this.centrosId = data.centrosId;
    }
}