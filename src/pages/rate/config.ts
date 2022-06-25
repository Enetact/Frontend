import { createFieldsFromConfigurations } from '@/components/Field/factory';
import ProjectDetails from './components/ProjectDetails';

const QUESTION_IDS = {
  BUSINESS_LIABILITY_LIMIT: 'businessLiabilityLimit',
  ATTESTATION: 'attestation',
};

export const questions = {
  [QUESTION_IDS.BUSINESS_LIABILITY_LIMIT]: {
    name: QUESTION_IDS.BUSINESS_LIABILITY_LIMIT,
    component: ProjectDetails,
    prompt: [
      'Below is your project summary. You can edit & update your information.',
      'Here’s a refresher on what’s covered and what’s not.',
    ],
  },
};

export const coverageConfigs = createFieldsFromConfigurations('coverage', questions);
