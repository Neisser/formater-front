import Header from '../components/header';
import DataTable from '../components/datatable';
import getFileData from '../services/getFilesData'
import { useEffect, useState } from 'react';

function Home() {

  const [filedata, setFileData] = useState([])

  const processData = (data) => {
    return data.map(r=>{
      return r.lines.map(i=>{
          return {file: r.file, ...i}
      })
  }).reduce((a,b)=>([...a,...b]))
  }

  const getTableData = async () => {
    const {data} = await getFileData();
    const table = processData(data);
    setFileData(table)
  }
  useEffect(() => {
    getTableData()
  }, [])

  return(
    <>
      <Header />
      <DataTable data={filedata} />
    </>
  )
}

export default Home;