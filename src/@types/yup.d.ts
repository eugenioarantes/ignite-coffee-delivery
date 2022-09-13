import 'yup'

declare module 'yup' {
  export declare type ObjectShape = Record<string, any>

  export declare type Assign<T extends {}, U extends {}> = {
    [P in keyof T]: P extends keyof U ? U[P] : T[P]
  } & U
}
