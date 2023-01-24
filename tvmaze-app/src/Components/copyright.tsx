import { Link, useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';

function CopyrightText(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to={"/home"}>
        TvMaze-App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default CopyrightText;
