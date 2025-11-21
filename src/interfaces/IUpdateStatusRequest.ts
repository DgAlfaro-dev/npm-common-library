export interface IUpdateStatusRequest {
    status: UserStatus
}

export enum UserStatus {
    AVAILABLE = 'available',
    BUSY = 'busy',
    NOT_DISTURB = 'not_disturb',
    OFFLINE = 'offline',
    ON_CALL = 'on_call',
  }