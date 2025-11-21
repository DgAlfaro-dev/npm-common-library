import { IUsuarioPermissionsResponse } from './IUsuarioPermissionsResponse.js';

export interface ITokenBody {
  usuarioId: number;
  email: string;
  nombre: string;
  imagenPerfilSrc: string;
  tipoUsuario: string;
  usuarioPermissions?: IUsuarioPermissionsResponse;
  businessPartnersId: string;
  getStreamId: string;
  country: number;
  centrosId: number[];
}
