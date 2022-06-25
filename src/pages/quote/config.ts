import { createFieldsFromConfigurations } from '../../components/Field/factory';

/*
 * A Question in a Quote widget has both user input and info presentation about the question
 *  - name: string
 *  - id: string
 *  - groupId: string
 *  - component: React.FC
 *  - defaultProps: specific to component
 *  - shouldDisplay: (state: formState) => boolean
 *  - validate: (value: any) => string | undefined
 *  - getFieldId: (state: formState) => string
 *  - getFieldValue: (state: formState) => any
 *  - isActive: (state: formState) => boolean       # get activity from state based on input change (useful to show continue button in the right place)
 *  - nextFieldId: (fieldId: ID) => string
 *  - shouldDisplayNextField: (state: formState) => boolean
 *  - shouldTransitionOnInputChange: boolean
 *  - shouldDisplayAfterValid: string[]
 * Internal computed state based on interaction
 * -
 */
import ProjectCategories from '@/pages/quote/components/ProjectCategories';
import ClosedField from '@/components/ClosedField';
import AdditionalInsured from './components/AdditionalInsured';
import CrewSize from './components/CrewSize';
import ProjectDuration from './components/ProjectDuration';
import AddressField from './components/AddressField';
import { Configuration } from '@/types/field';

const QUESTION_IDS = {
  PROJECT_CATEGORIES: 'projectCategories',
  CREW_SIZE: 'crewSize',
  ADDRESS: 'address',
  INSURED_PARTIES: 'insuredParties',
  SUBROGATION_WAIVER: 'waiverOfSubrogation',
  PROJECT_CALENDAR: 'projectCalendar',
  PROJECT_DURATION: 'projectDuration',
  PROJECT_TIMELINE: 'startDate',
};

export const questions: Record<string, Configuration> = {
  [QUESTION_IDS.PROJECT_CATEGORIES]: {
    name: QUESTION_IDS.PROJECT_CATEGORIES,
    title: 'Project',
    subtitle: 'Select one or multiple categories your project fits in.',
    component: ProjectCategories,
    prompt: 'Now tell us a bit about your project.',
    defaultProps: {
      multiple: true,
    },
  },
  [QUESTION_IDS.CREW_SIZE]: {
    name: QUESTION_IDS.CREW_SIZE,
    title: 'Crew Size',
    subtitle: 'Select the total number of people in your crew.',
    component: CrewSize,
    prompt: 'Now how many people are in your team? (including yourself)',
    shouldDisplayAfterValid: [QUESTION_IDS.PROJECT_CATEGORIES],
  },
  [QUESTION_IDS.ADDRESS]: {
    name: QUESTION_IDS.ADDRESS,
    title: 'Address',
    component: AddressField,
    prompt: 'Where will you be working?',
    shouldDisplayAfterValid: [QUESTION_IDS.CREW_SIZE],
  },
  [QUESTION_IDS.INSURED_PARTIES]: {
    name: QUESTION_IDS.INSURED_PARTIES,
    component: AdditionalInsured,
    prompt: 'Adding any additional insured parties?',
    shouldDisplayAfterValid: [QUESTION_IDS.ADDRESS],
  },
  [QUESTION_IDS.SUBROGATION_WAIVER]: {
    name: QUESTION_IDS.SUBROGATION_WAIVER,
    component: ClosedField,
    prompt: 'Do you require a waiver of subrogation?',
    defaultProps: {
      options: [
        { label: 'No', value: 'no' },
        { label: 'Yes', value: 'yes' },
      ],
    },
    shouldDisplayAfterValid: [QUESTION_IDS.INSURED_PARTIES],
  },
  [QUESTION_IDS.PROJECT_DURATION]: {
    name: QUESTION_IDS.PROJECT_DURATION,
    component: ProjectDuration,
    prompt: 'How long will the project take in total?',
    shouldDisplayAfterValid: [QUESTION_IDS.SUBROGATION_WAIVER],
  },
};

export const configs = createFieldsFromConfigurations('quote', questions);

const quoteWidget = { configs, submitButtonProps: { label: 'Next' } };

export default quoteWidget;
