import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

function EventAddButton() {
  return (
    <Button size="small" startIcon={<AddIcon />} variant="contained">
      Add New Event
    </Button>
  );
}

export default EventAddButton;
