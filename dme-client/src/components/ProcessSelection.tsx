import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';


type Props = {
  processList: string[],
  handleChangeSelectedProc: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const ProcessSelection: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Typography variant="h6" align="left" gutterBottom>
        Process Selection
      </Typography>
      <Select
        multiple
        native
        // value={personName}
        onChange={ props.handleChangeSelectedProc }
        // inputProps={{
        //   id: 'select-multiple-native',
        // }}
        displayEmpty
        variant="outlined"
      >
        {props.processList.map((proc) => (
          <option key={proc} value={proc}>
            {proc}
          </option>
        ))}
      </Select>
    </div>
  )
}


export default ProcessSelection;