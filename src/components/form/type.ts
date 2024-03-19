import { InjectionKey } from "vue";
import {Rules,Values} from "async-validator"

export type FormDate ={
    model:Record<string, unknown>
    rules?:Rules
}

export type FormItem={
    validate:() =>Promise<Values>
}

export type FormType={
    validate:(cb:(isValid:boolean)=> void) =>void
}

export const key:InjectionKey<FormDate>=Symbol('form-date')