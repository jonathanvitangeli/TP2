import PersonService from "../services/PersonService.js";

class PersonController {
  personService = new PersonService();

  getAllPersonsController = async (req, res) => {
    try {
      const persons = await this.personService.getAllPersonsService();
      res.status(200).send({
        success: true,
        message: persons,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getPersonByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const person = await this.personService.getPersonByIdService(id);
      res.status(200).send({
        success: true,
        message: person,
      });
    } catch (error) {
      res.status(404).send({
        success: false,
        message: error.message,
      });
    }
  };

  createPersonController = async (req, res) => {
    try {
      const { name, lastName, dni, phone } = req.body;
      const person = await this.personService.createPersonService({
        name,
        lastName,
        dni,
        phone,
      });
      res.status(201).send({
        success: true,
        message: person,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updatePersonController = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, lastName, dni, phone } = req.body;
      const updatedPerson = await this.personService.updatePersonService(id, {
        name,
        lastName,
        dni,
        phone,
      });
      res.status(200).send({
        success: true,
        message: updatedPerson,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deletePersonController = async (req, res) => {
    try {
      const { id } = req.params;
      await this.personService.deletePersonService(id);
      res.status(200).send({
        success: true,
        message: "Person deleted successfully",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default PersonController;
