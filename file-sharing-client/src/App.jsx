import { useState, useRef, useEffect } from 'react'
import './App.css'
import { uplaodFile } from './services/api';

function App() {
  const fileInputRef = useRef();
  const[file, setFile] = useState();
  const [result, setResult] = useState('');

  // console.log(file);

  useEffect(() => {
   const getImage = async () => {
    if(file){
      const data = new FormData(); // provides a way to construct a set of key/value pairs representing form fields and their values
      data.append("name",file.name);
      data.append("file",file);

      const respones = await uplaodFile(data);
      console.log(respones);
      setResult(respones.path);
    }
   }
   getImage(); 
  },[file])
  
  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  const handleChange = (event) => {
    // console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  }
  return (
    <>
      <div className="main-wrapper" style={{ backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')`}}>
        <div className="container">
          <div className="wrapper">
            <h1>File Sharing Application!</h1>
            <p>Upload and share the download link 🔗</p>
            <button onClick={onUploadClick}>Upload</button>
            <input type ="file" ref={fileInputRef} 
            style={{display:"none"}} 
            // onChange={(e) => setFile(e.target.files[0])}
            onChange={handleChange}
            />
            <a href={result}>{result}</a>
          </div>

        </div>
      </div>

    </>
  )
}

export default App;
