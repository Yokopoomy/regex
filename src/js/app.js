export default class Validator {
	constructor() {
		this.username;
	}

	validateUsername(username) {
		const reg1 = new RegExp('^[^-_\d][a-zA-Z-_0-9]*[^\-\_0-9]$');
		const reg2 = new RegExp('(?<!\d)\d{1,3}(?!\d)');
		if (reg1.test(username)) {
			if (reg2.test(username)) {
				return 'Имя подходит';;
			}
			return 'Имя содержит 4 и более цифр подряд';
		}
		return 'Имя содержит недопустимые символы';
 }
}
