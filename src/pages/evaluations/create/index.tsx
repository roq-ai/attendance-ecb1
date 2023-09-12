import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createEvaluation } from 'apiSdk/evaluations';
import { evaluationValidationSchema } from 'validationSchema/evaluations';
import { StudentInterface } from 'interfaces/student';
import { getStudents } from 'apiSdk/students';
import { EvaluationInterface } from 'interfaces/evaluation';

function EvaluationCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: EvaluationInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createEvaluation(values);
      resetForm();
      router.push('/evaluations');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<EvaluationInterface>({
    initialValues: {
      evaluation_period: '',
      attendance_percentage: 0,
      student_id: (router.query.student_id as string) ?? null,
    },
    validationSchema: evaluationValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Evaluations',
              link: '/evaluations',
            },
            {
              label: 'Create Evaluation',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Evaluation
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.evaluation_period}
            label={'Evaluation Period'}
            props={{
              name: 'evaluation_period',
              placeholder: 'Evaluation Period',
              value: formik.values?.evaluation_period,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Attendance Percentage"
            formControlProps={{
              id: 'attendance_percentage',
              isInvalid: !!formik.errors?.attendance_percentage,
            }}
            name="attendance_percentage"
            error={formik.errors?.attendance_percentage}
            value={formik.values?.attendance_percentage}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('attendance_percentage', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<StudentInterface>
            formik={formik}
            name={'student_id'}
            label={'Select Student'}
            placeholder={'Select Student'}
            fetcher={getStudents}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/evaluations')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'evaluation',
    operation: AccessOperationEnum.CREATE,
  }),
)(EvaluationCreatePage);
