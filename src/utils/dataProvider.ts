export const loginData = [
  { username: 'basaric.jovana@yahoo.com', password: 'kliker86'},
];

export const loginDataEmpty = [
  { username: ' ', password: ' ' },
];

export const loginDataInvalidPass = [
  { username: 'jovana.basaricpripunic@gmail.com', password: 'mister444', expectedUrl: 'https://my-stage.tractive.com/#/', message: 'wrong email or password' },
];

export const loginDataInvalidEmail = [
  { username: 'jovana@cupakabra.com', password: 'kliker86', expectedUrl: 'https://my-stage.tractive.com/#/' },
];

export const registrationData = [
  { firstName: 'Joca', lastName: 'Saric', email: 'chupka86@gmail.com', password: 'kliker86', expectedText: 'Enter Tracker ID' },
];

export const registrationNoData = [
  { firstName: ' ', lastName: ' ', email: ' ', password: ' ', expectedText: 'This field is required.' },
];

export const e2eData = [
  { firstName: 'Jovana', lastName: 'Basaric', email: 'jovana6@gmail.com', password: 'kliker86', expectedText: 'Enter Tracker ID'},
];

export const registrationDataTwice = [
  { firstName: 'Joca', lastName: 'Saric', email: 'jovana4@gmail.com', password: 'kliker86', expectedText: 'Enter Tracker ID', expectedUrlRegistration: 'https://my-stage.tractive.com/#/signup'},
];

export const registrationNonExistingEmail = [
  { firstName: 'Joca', lastName: 'Saric', email: 'jovana31@cupakabra.com', password: 'kliker86', expectedText: 'The email address is invalid.'},
];

