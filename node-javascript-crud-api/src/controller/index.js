const {
  CreateStudentService,
  GettingAllStudentRecordsService,
  UpdateStudentService,
  DeleteStudentsByIdService,
} = require('../service/index');
const Loggger = require('../logger/index');
const logger = new Loggger(process.env.NODE_ENV).logger;
const NAMESPACE = 'Student Controller';

module.exports = {
  CreateStudent: async (req, res, next) => {
    logger.info(`${NAMESPACE} : [${req.url}]`);
    try {
      const _student = await CreateStudentService(req.body);
      _student.success
        ? res.status(200).send(_student)
        : res.status(500).send(_student);
    } catch (error) {
      res.status(500).send({ success: false, error: error });
    }
  },

  GetStudents: async (req, res, next) => {
    logger.info(`${NAMESPACE} : [${req.url}]`);
    try {
      const studentResults = await GettingAllStudentRecordsService();
      studentResults.success
        ? res.status(200).send(studentResults)
        : res.status(500).send(studentResults);
    } catch (error) {
      res.status(500).send({ success: false, error: error });
    }
  },

  UpdateStudents: async (req, res, next) => {
    logger.info(`${NAMESPACE} : [${req.url}]`);
    try {
      const updateStudentResults = await UpdateStudentService(req.body);
      updateStudentResults.success
        ? res.status(200).send(updateStudentResults)
        : res.status(500).send(updateStudentResults);
    } catch (error) {
      res.status(500).send({ success: false, error: error });
    }
  },

  DeleteStudentById: async (req, res, next) => {
    logger.info(`${NAMESPACE} : [${req.url}]`);
    try {
      const deleteStudentResult = await DeleteStudentsByIdService(req.body);
      deleteStudentResult.success
        ? res.status(200).send(deleteStudentResult)
        : res.status(500).send(deleteStudentResult);
    } catch (error) {
      res.status(500).send({ success: false, error: error });
    }
  },
};
