import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    //REACT_APP_URL="http://ec2-52-56-97-212.eu-west-2.compute.amazonaws.com/api/v1/"

    //const url = 'http://localhost:3002/api/v1/files';
    //const url = process.env.REACT_APP_URL + "files";
    const url = 'https://test.app.sociallocket.com/api/v1/files';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
    </div>
  );
}

export default App;
