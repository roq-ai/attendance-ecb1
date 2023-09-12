import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  birthdate: yup.date().required(),
  division: yup.string().required(),
  group_name: yup.string().required(),
  school_id: yup.string().nullable().required(),
});
