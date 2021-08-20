const Student = require('../model/student.model');

module.exports = {
  CreateStudentService: async (body) => {
    const _studentObj = {
      firstname: body.firstname,
      lastname: body.lastname,
      name: `${body.firstname} ${body.lastname}`,
      email: body.email,
      password: body.password,
      address_line_1: body.address_line_1,
      contact_no: body.contactno,
      birth_date: body.birth_date,
      is_active: body.isactive,
    };

    return new Promise((resolve) => {
      const _queryResult = Student.query().insertGraphAndFetch(_studentObj);
      resolve(_queryResult);
    })
      .then((response) => {
        return { success: true, results: response, error: null };
      })
      .catch((error) => {
        return { success: false, results: {}, error: error.message };
      });
  },

  GettingAllStudentRecordsService: async () => {
    return new Promise((resolve) => {
      const _getQueryResulst = Student.query()
        .select('*')
        .where('is_deleted', '!=', 'true')
        .andWhere('is_enabled', '!=', 'false');
      resolve(_getQueryResulst);
    })
      .then((response) => {
        return { success: true, results: response, error: null };
      })
      .catch((error) => {
        return { success: false, results: {}, error: error.message };
      });
  },

  UpdateStudentService: async (body) => {
    const _updateStudentObj = {
      id: body.id,
      firstname: body.firstname,
      lastname: body.lastname,
      name: `${body.firstname} ${body.lastname}`,
      email: body.email,
      password: body.password,
      address_line_1: body.address_line_1,
      contact_no: body.contactno,
      birth_date: body.birth_date,
      is_active: body.isactive,
    };

    return new Promise((resolve) => {
      const _udpateQueryResult =
        Student.query().upsertGraphAndFetch(_updateStudentObj);
      resolve(_udpateQueryResult);
    })
      .then((response) => {
        return { success: true, results: response, error: null };
      })
      .catch((error) => {
        return { success: false, results: {}, error: error.message };
      });
  },

  DeleteStudentsByIdService: async (body) => {
    const _deleteObj = {
      id: body.id,
      is_deleted: true,
      deleted_on: new Date(),
    };
    return new Promise((resolve, reject) => {
      const _deleteResult = Student.query().upsertGraphAndFetch(_deleteObj);
      resolve(_deleteResult);
    })
      .then((response) => {
        return { success: true, results: response, error: null };
      })
      .catch((error) => {
        return { success: false, results: {}, error: error.message };
      });
  },
};
