export interface IUsuarioPermissionsResponse {
  userRoles: string[];
  userPermissions: string[];
  menuItems: IMenuItemPermision[];
  favorites: string[];
  pagePermissions: { [key: string]: IPagePermission };
}

export interface IMenuItemPermision {
  id: string;
  requiredPermission: string;
}

export interface IPagePermission {
  [key: string]: string;
}
