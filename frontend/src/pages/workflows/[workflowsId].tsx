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

import { update, fetch } from '../../stores/workflows/workflowsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

import { hasPermission } from '../../helpers/userPermissions';

const EditWorkflows = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    name: '',

    description: '',

    type: '',

    organization: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { workflows } = useAppSelector((state) => state.workflows);

  const { currentUser } = useAppSelector((state) => state.auth);

  const { workflowsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: workflowsId }));
  }, [workflowsId]);

  useEffect(() => {
    if (typeof workflows === 'object') {
      setInitialValues(workflows);
    }
  }, [workflows]);

  useEffect(() => {
    if (typeof workflows === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = workflows[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [workflows]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: workflowsId, data }));
    await router.push('/workflows/workflows-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit workflows')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit workflows'}
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
              <FormField label='Name'>
                <Field name='name' placeholder='Name' />
              </FormField>

              <FormField label='Description' hasTextareaHeight>
                <Field
                  name='description'
                  id='description'
                  component={RichTextField}
                ></Field>
              </FormField>

              <FormField label='Type' labelFor='type'>
                <Field name='type' id='type' component='select'>
                  <option value='JobPostingNotifications'>
                    JobPostingNotifications
                  </option>

                  <option value='ApplicationAcknowledgement'>
                    ApplicationAcknowledgement
                  </option>

                  <option value='InterviewScheduling'>
                    InterviewScheduling
                  </option>

                  <option value='StatusUpdates'>StatusUpdates</option>

                  <option value='DocumentCollection'>DocumentCollection</option>

                  <option value='ReminderNotifications'>
                    ReminderNotifications
                  </option>

                  <option value='FeedbackCollection'>FeedbackCollection</option>

                  <option value='OnboardingProcess'>OnboardingProcess</option>

                  <option value='DataBackup'>DataBackup</option>

                  <option value='ComplianceChecks'>ComplianceChecks</option>

                  <option value='PerformanceReports'>PerformanceReports</option>
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
                  onClick={() => router.push('/workflows/workflows-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditWorkflows.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_WORKFLOWS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditWorkflows;
