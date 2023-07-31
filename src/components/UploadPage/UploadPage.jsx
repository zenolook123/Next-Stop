import axios from 'axios';


function UploadPage() {


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('photo', event.target.photo.files[0]);

    axios.post('/api/upload', formData)
      .then((response) => {
        const imageUrl = response.data.imageUrl;
        console.log('Image URL', imageUrl);
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div className="container">
      <form encType='multipart/form-data' onSubmit={handleSubmit}>
        <input type="file" name='photo' />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadPage;
