import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import MemoryViewer from '../components/MemoryViewer';
import SideMenu from '../layouts/SideMenu';


type Props = {
}

const MemoryEdit: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <SideMenu />
      <Container maxWidth='lg'>
        <Paper style={{padding: "10px 50px 30px", marginTop: 20}}>
          <MemoryViewer
            memoryContents="AAAAFAFFSAGHSUJADYDGAUDAAAAFAFFSAGHSUJADYDGAUDAAAAFAFFSAGHSUJADYDGAUDAAAAFAFFSAGHSUJADYDGAUDAAAAFAFFSAGHSUJADYDGAUDAAAAFAFFSAGHSUJADYDGAUD"
            startAddr={123435354}
          />
        </Paper>
      </Container>
    </div>
  )
}

export default MemoryEdit;
