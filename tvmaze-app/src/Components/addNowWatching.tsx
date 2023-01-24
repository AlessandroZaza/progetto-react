import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';

export default function AddNowWatching() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button style={{ color: "green" }} size="small" onClick={handleClose}>
        OKAY
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" color='error' />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <IconButton onClick={handleClick} size="large" style={{ color: 'rgb(32, 104, 197)' }}>
        <RemoveRedEye />
      </IconButton>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="inserito nei Now Watching "
        action={action}
      />
    </div>
  );
}

