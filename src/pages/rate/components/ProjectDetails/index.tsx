import { useState } from 'react';
import { Box, Divider, Stack } from '@mui/material';
import Button from '@/components/Button';
import ProjectSummary from './ProjectSummary';
import EditProjectDetails from './EditProjectDetails';
import classes from './styles.module.scss';

const ProjectDetails = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <div>Project Details</div>
        <Button
          variant="text"
          className={classes.editCancelButton}
          onClick={() => setEditMode(b => !b)}
        >
          {editMode ? 'Cancel' : 'Edit'}
        </Button>
      </Stack>
      <Divider light />
      {editMode ? <EditProjectDetails /> : <ProjectSummary />}
      <Box display="flex" justifyContent="center">
        <Button type="submit" color="secondary" size="large">
          {editMode ? 'Save' : 'Looks Good'}
        </Button>
      </Box>
    </Stack>
  );
};

export default ProjectDetails;
