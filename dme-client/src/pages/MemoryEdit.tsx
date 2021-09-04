import React from 'react';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import MemoryViewer from '../components/MemoryViewer';
import ProcessSelection from '../components/ProcessSelection';
import SideMenu from '../layouts/SideMenu';
import { useGlobalState } from '../state/GlobalState';
import ProcessAPI from '../api_client/ProcessAPI';


type Props = {
}

const MemoryEdit: React.FC<Props> = (props: Props) => {
  const [serverHost, setServerHost] = useGlobalState('serverHost');
  const [serverPort, setServerPort] = useGlobalState('serverPort');
  const [procs, setProcs] = React.useState<string[]>(["proc1", "proc2"]);
  const [selectedProc, setSelectedProc] = React.useState<string>("");
  const [errMsg, setErrMsg] = React.useState<string>('');

  const handleChangeSelectedProc = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedProc(event.target.value as string);
  };

  React.useEffect(() => {
    new ProcessAPI(serverHost, serverPort).getProcessList()
      .then(res => {
        const procJsons = res.data['procs'];
        const procs = procJsons.map(
          (data: any) => {
            return `${data["pid"]}/${data["process_name"]}`
        });
        console.log(procs);
        setProcs(procs);
      })
      .catch(err => {
        setErrMsg(`ERROR : Failed to fetch process list data from ${serverHost}:${serverPort}. ${err}`)
      })
  }, procs);

  return (
    <div>
      <SideMenu />
      <div style={{color:'red', fontWeight:'bold'}}>{errMsg}</div>
      <Container maxWidth='lg'>
        <Paper style={{padding: "10px 50px 30px", marginTop: 20, marginRight: "70%"}}>
          <ProcessSelection
            processList={ procs }
            handleChangeSelectedProc={ handleChangeSelectedProc }
          />
        </Paper>
        <Paper style={{padding: "10px 50px 30px", marginTop: 20}}>
          <MemoryViewer
            memoryContents="AAAAFAFFSAGHSUJADYDGAUDAAAAFAFFSAGHSUJADYDGAUDAAAAFAFFSAGHSUJADYDGAUDAAAAFAFFSAGHSUJADYDGAUDAAAAFAFFSAGHSUJADYDGAUDAAAAFAFFSAGHSUJADYDGAUD"
            startAddr={123435354}
          />
        </Paper>
      </Container>
      {selectedProc}
    </div>
  )
}

export default MemoryEdit;
