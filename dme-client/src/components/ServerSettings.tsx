import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


type Props = {}


const ServerSettings: React.FC<Props> = (props: Props) => {
  const [serverPort, setServerPort] = React.useState<string>('');
  const [serverHost, setServerHost] = React.useState<string>('');

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="host"
            label="Server Host"
            style={{ margin: 8 }}
            placeholder="Server Host"
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
            placeholder="Port"
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
