const constraints = {
    username: {
        presence: {
            message: "Cannot be blank."
        },
        length: {
            minimum: 5,
            message: 'must be at least 5 characters'
        }
        },
    password: {
        presence: {
            message: "Cannot be blank."
        },
        length: {
            minimum: 5,
            message: 'must be at least 5 characters'
        }
    },
    platName: {
        presence: {
            message: "Cannot be blank."
        },
        length: {
            minimum: 3,
            message: 'must be at least 3 characters'
        }
    },
    platPrice: {
        presence: {
            message: "Cannot be blank."
        },
        numericality: {
            strict: true
        }
    },
    platCategory: {
        presence: {
            message: "Cannot be blank."
        }
    }
}
  
export default constraints

// const validation = (val, rules) => {
//     let isValid = true;
//     for(let rule in rules) {
//         switch (rule) {
//             case 'isEmail':
//                 isValid = isValid && emailValidator(val);
//                 break;
//             case 'password':
//                 isValid = isValid && password(val);
//                 break;
//             case 'isNumber':
//                 isValid = isValid && phoneValidator(val);
//                 break
//             case 'length':
//                 break
//             default:
//             isValid = isValid && lengthValidator(val, rules[rule]);
//                 isValid = true;
//         }
//     }
//     return isValid;
// }

// const emailValidator = email => {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }

// const password = pw => {
//     return /[A-Z]/       .test(pw) &&
//            /[a-z]/       .test(pw) &&
//            /[0-9]/       .test(pw) &&
//         //    /[^A-Za-z0-9]/.test(pw) &&
//            pw.length > 7;
// }

// const lengthValidator = (val, length) => {
//     return val.length  === length;
// }

// const phoneValidator = (val) => {
//     return !isNaN(val);
// }

// export default validation;