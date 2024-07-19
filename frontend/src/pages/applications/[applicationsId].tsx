import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/applications/applicationsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

import { hasPermission } from '../../helpers/userPermissions';

const EditApplications = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    applicant: '',

    job: '',

    status: '',

    organization: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { applications } = useAppSelector((state) => state.applications);

  const { currentUser } = useAppSelector((state) => state.auth);

  const { applicationsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: applicationsId }));
  }, [applicationsId]);

  useEffect(() => {
    if (typeof applications === 'object') {
      setInitialValues(applications);
    }
  }, [applications]);

  useEffect(() => {
    if (typeof applications === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = applications[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [applications]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: applicationsId, data }));
    await router.push('/applications/applications-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit applications')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit applications'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='Applicant' labelFor='applicant'>
                <Field
                  name='applicant'
                  id='applicant'
                  component={SelectField}
                  options={initialValues.applicant}
                  itemRef={'users'}
                  showField={'firstName'}
                ></Field>
              </FormField>

              <FormField label='Job' labelFor='job'>
                <Field
                  name='job'
                  id='job'
                  component={SelectField}
                  options={initialValues.job}
                  itemRef={'job_postings'}
                  showField={'title'}
                ></Field>
              </FormField>

              <FormField label='Status' labelFor='status'>
                <Field name='status' id='status' component='select'>
                  <option value='Received'>Received</option>

                  <option value='UnderReview'>UnderReview</option>

                  <option value='InterviewScheduled'>InterviewScheduled</option>

                  <option value='Hired'>Hired</option>

                  <option value='Rejected'>Rejected</option>
                </Field>
              </FormField>

              {hasPermission(currentUser, 'READ_ORGANIZATIONS') && (
                <FormField label='organization' labelFor='organization'>
                  <Field
                    name='organization'
                    id='organization'
                    component={SelectField}
                    options={initialValues.organization}
                    itemRef={'organizations'}
                    showField={'name'}
                  ></Field>
                </FormField>
              )}

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/applications/applications-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditApplications.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_APPLICATIONS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditApplications;
