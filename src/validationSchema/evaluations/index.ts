import * as yup from 'yup';

export const evaluationValidationSchema = yup.object().shape({
  evaluation_period: yup.string().required(),
  attendance_percentage: yup.number().integer().required(),
  student_id: yup.string().nullable().required(),
});
