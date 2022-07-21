export const API = {
  baseURL: 'http://localhost:3001',
  Endpoints: {
    files: {
      getFileData: (host)=>({
        method: 'get',
        url: host + '/files/data',
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json'
        }
      })
    }
  }
}