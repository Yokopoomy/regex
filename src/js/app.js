export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    return this.username && /^[^-_\d][a-zA-Z-_0-9]*[^-_\d]$/.test(this.username) && !/\d{4,}/.test(this.username);
  }
}
