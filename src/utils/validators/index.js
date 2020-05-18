import * as Yup from 'yup';

function ValidateName(value){
    const size = value.split(" ")
    return size
} 

const Validation = Yup.object({
  cardNumber: Yup.string().min(19, 'O cartão deve conter 16 números').nullable().required('Número do cartão inválido'),
  name: Yup.string().matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, 'Nomes não podem conter números').required('Informe o nome igual ao do cartão').test({
    name: 'validate-name',
    test(value) {
      const validate = ValidateName(value);
      if (validate.length < 2) {
        return this.createError({
          message: 'Insira seu nome completo',
          path: 'name',
        });
      }
      return validate;
    },
  }),
  date: Yup.string().nullable().required('Infome a data de validade do cartão ').test({
    name: 'validate-name',
    test(value) {
      const month = value.substring(0,2)
          const year = value.substring(3,5)
          const createDate = `${month}/20/20${year}`
          const validate = new Date(createDate)
          if(validate < new Date()){
              return this.createError({
                message: 'Data inválida',
                path: 'date',
              })
          }
          return validate
    },
  }),
  code: Yup.string().min(3, 'Código inválido').nullable().required('Código inválido'),
  installments: Yup.string().nullable().required('Insira o número de parcelas'),
});

export default Validation;
