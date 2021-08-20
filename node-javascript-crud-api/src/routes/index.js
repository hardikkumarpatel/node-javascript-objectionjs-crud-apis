const express = require('express');
const routes = express.Router();
const {
  CreateStudent,
  GetStudents,
  UpdateStudents,
  DeleteStudentById,
} = require('../controller/index');

routes.post('/CretateStudents', CreateStudent);
routes.get('/GetStudents', GetStudents);
routes.put('/UpdateStudents', UpdateStudents);
routes.delete('/DeleteStudents', DeleteStudentById);

module.exports = routes;
