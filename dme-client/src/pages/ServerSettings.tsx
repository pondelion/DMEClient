import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ServerSettingsComponent from '../components/ServerSettings';
import SideMenu from '../layouts/SideMenu';


type Props = {
}

const ServerSettings: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <SideMenu />
      <Container maxWidth='md'>
        <Paper style={{padding: "10px 50px 30px", marginTop: 20}}>
          <ServerSettingsComponent />
        </Paper>
      </Container>
    </div>
  )
}

export default ServerSettings;
