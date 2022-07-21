import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

function DataTable({data}) {

  return (
    <>
      {
        (data.length > 0)?
        <Table striped bordered hover>
          <thead>
            <tr>
              {Object.keys(data[0]).map((i, key)=>(
                <th key={`head-${key}`}>{i}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              data.map((r, rkey)=>(
                <tr key={`row-${rkey}`}>
                  {Object.values(r).map((i, ikey)=>(
                    <td key={`col-${ikey}`}>{i}</td>
                    ))}
                </tr>
              ))
            }
          </tbody>
        </Table>
      : <Alert variant={'info'}>
            No hay registros que mostrar
        </Alert>
      }
    </>
  );
}

export default DataTable;