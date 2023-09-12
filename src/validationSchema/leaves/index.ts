import * as yup from 'yup';

export const leaveValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  reason: yup.string().nullable(),
  student_id: yup.string().nullable().required(),
});
