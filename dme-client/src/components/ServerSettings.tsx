import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useGlobalState } from '../state/GlobalState';


type Props = {}


const ServerSettings: React.FC<Props> = (props: Props) => {
  const [serverHost, setServerHost] = useGlobalState('serverHost');
  const [serverPort, setServerPort] = useGlobalState('serverPort');
  return (
    <div>
      <Typography variant="h6" align="left" gutterBottom>
        Settings
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="host"
            label="Server Host"
            style={{ margin: 8 }}
            placeholder={ serverHost }
            defaultValue={ serverHost }
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(event: any) => { setServerHost(event.target.value); }}
          />
        </Grid>
        <Grid item xs={3}>
        <TextField
            id="port"
            label="Port"
            style={{ margin: 8 }}
            placeholder={ serverPort.toString() }
            defaultValue={ serverPort.toString() }
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(event: any) => { setServerPort(event.target.value); }}
          />
        </Grid>
      </Grid>
    </div>
  )
}


export default ServerSettings;
