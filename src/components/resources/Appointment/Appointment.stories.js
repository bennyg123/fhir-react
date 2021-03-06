import React from 'react';
import { object } from '@storybook/addon-knobs';

import Appointment from './Appointment';

import exampleAppointmentDSTU2 from '../../../fixtures/dstu2/resources/appointment/example1.json';
import example2AppointmentDSTU2 from '../../../fixtures/dstu2/resources/appointment/example2.json';
import example1AppointmentSTU3 from '../../../fixtures/stu3/resources/appointment/example1.json';
import example2AppointmentSTU3 from '../../../fixtures/stu3/resources/appointment/example2.json';
import example3AppointmentSTU3 from '../../../fixtures/stu3/resources/appointment/example3.json';

export default { title: 'Appointment' };

export const DefaultVisualizationDSTU2 = () => {
  const fhirResource = object('Resource', exampleAppointmentDSTU2);
  return <Appointment fhirResource={fhirResource} />;
};

export const Example2OfDSTU2 = () => {
  const fhirResource = object('Resource', example2AppointmentDSTU2);
  return <Appointment fhirResource={fhirResource} />;
};

export const Example1OfSTU3 = () => {
  const fhirResource = object('Resource', example1AppointmentSTU3);
  return <Appointment fhirResource={fhirResource} />;
};
export const Example2OfSTU3 = () => {
  const fhirResource = object('Resource', example2AppointmentSTU3);
  return <Appointment fhirResource={fhirResource} />;
};
export const Example3OfSTU3 = () => {
  const fhirResource = object('Resource', example3AppointmentSTU3);
  return <Appointment fhirResource={fhirResource} />;
};
