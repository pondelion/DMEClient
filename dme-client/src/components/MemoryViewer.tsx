import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


type Props = {
  memoryContents: string,
  startAddr: number,
  bytesPerRow?: number
}

type RowContents = {
  baseAddr: string,
  byteValues: string[],
  description: string,
}

const MemoryViewerTBL: React.FC<Props> = (props: Props) => {
  const bytesPerRow = props.bytesPerRow === undefined ? 16 : props.bytesPerRow;
  let baseAddr: number = props.startAddr;
  let i: number = 0;
  let rows: RowContents[] = [];
  while (i < Math.ceil(props.memoryContents.length)) {
    let row: RowContents = {
      'baseAddr': baseAddr.toString(16),
      'byteValues': [],
      'description': 'temp string',
    };
    for (let ci = 0; ci < bytesPerRow; ci++) {
      row['byteValues'].push(props.memoryContents.slice(i, i+2));
      i += 2;
    }
    rows.push(row);
    baseAddr += bytesPerRow;
  }
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ADDRESS</TableCell>
            {
              [...Array(bytesPerRow)].map((_, i) => {
                return (
                  <TableCell>{`${i+1}`}</TableCell>
                )
              })
            }
            <TableCell>DESCRIPTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.baseAddr}>
              <TableCell>{row.baseAddr}</TableCell>
              {row.byteValues.map((byteVal: string) => (
                <TableCell>{byteVal}</TableCell>
              ))}
              <TableCell align="center">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default MemoryViewerTBL;
