import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';


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

const createRows = (
  baseAddr: number,
  bytesPerRow: number,
  memoryContents: string
): RowContents[] => {
  let i: number = 0;
  let rows: RowContents[] = [];
  while (i < Math.ceil(memoryContents.length)) {
    let row: RowContents = {
      'baseAddr': baseAddr.toString(16),
      'byteValues': [],
      'description': 'temp string',
    };
    for (let ci = 0; ci < bytesPerRow; ci++) {
      row['byteValues'].push(memoryContents.slice(i, i+2));
      i += 2;
    }
    rows.push(row);
    baseAddr += bytesPerRow;
  }
  return rows
}

const MemoryViewerTBL: React.FC<Props> = (props: Props) => {
  const bytesPerRow = props.bytesPerRow === undefined ? 16 : props.bytesPerRow;
  let baseAddr: number = props.startAddr;
  let rows: RowContents[] = createRows(baseAddr, bytesPerRow, props.memoryContents);

  return (
    <React.Fragment>
      <Typography variant="h6" align="left" gutterBottom>
        Memory Dump
      </Typography>
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
