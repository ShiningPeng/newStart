export enum methodsEnum {
  log, info, warn, debug, error
}

export type EnumKeys = keyof typeof methodsEnum

export type methodEnumInterface = {
  [key in EnumKeys]: (...args:any[]) => void
}

export interface LogInfos {
  logType:EnumKeys,
  infos:any[]
}