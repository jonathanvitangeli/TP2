import Person from "../models/Person.js";

class PersonService {
  async getAllPersons() {
    return await Person.findAll();
  }

  async getPersonById(id) {
    return await Person.findByPk(id);
  }

  async createPerson(data) {
    const person = await Person.create(data);
    return person;
  }

  async updatePerson(id, data) {
    const person = await Person.findByPk(id);
    if (!person) return null;
    await person.update(data);
    return person;
  }

  async deletePerson(id) {
    const person = await Person.findByPk(id);
    if (!person) return null;
    await person.destroy();
    return true;
  }
}

export default PersonService;
