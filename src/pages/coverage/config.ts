import Attestation from '@/components/Attestation';
import { createFieldsFromConfigurations } from '@/components/Field/factory';
import LiabilityLimit from '@/pages/coverage/components/LiabilityLimit';

const QUESTION_IDS = {
  BUSINESS_LIABILITY_LIMIT: 'businessLiabilityLimit',
  ATTESTATION: 'attestation',
};

export const questions = {
  [QUESTION_IDS.BUSINESS_LIABILITY_LIMIT]: {
    name: QUESTION_IDS.BUSINESS_LIABILITY_LIMIT,
    component: LiabilityLimit,
    prompt: ['What business liability limit would you like to set?'],
  },
  [QUESTION_IDS.ATTESTATION]: {
    name: QUESTION_IDS.ATTESTATION,
    component: Attestation,
    defaultProps: {
      label: 'I have read and confirmed that I am not doing any excluded activities.',
    },
  },
};

export const coverageConfigs = createFieldsFromConfigurations('coverage', questions);
