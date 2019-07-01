import { isCellphone } from './Validation'

export default function (Validator) {
  Validator.extend('cel', {
    getMessage: () => 'Informe um nº de celular válido.',
    validate: value => isCellphone(value)
  })
}
