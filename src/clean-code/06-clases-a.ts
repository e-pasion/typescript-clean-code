(() => {
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date
    ) {}
  }

  const newPerson: Person = new Person("Orlando", "M", new Date("2003-06-11"));
  console.log({ newPerson });
})();
