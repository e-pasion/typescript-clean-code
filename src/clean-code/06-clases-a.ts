(() => {
  type Gender = "M" | "F";
  //No aplicnado le princcipio de responsabilidad unica
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings= new UserSettings(
    '/usr/home',
    '/home',
    'elkin@gmail.com',
    'Admin',
    'Elkin',
    'M',
    new Date('2003-06-11')
  );

  console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()})
})();
