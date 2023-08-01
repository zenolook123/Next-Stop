import { Button, Container } from "@mui/material"

function CreateAMeet() {
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
        <div>
            <Container sx={{ justifyContent: 'center', display: 'flex' }}>
                <Button variant="contained" style={{ margin: '40px' }}>Add a meet photo</Button>
                <Button variant="contained" style={{ margin: '40px' }}>Invite</Button>
                <Button variant="contained" style={{ margin: '40px' }}>Address</Button>
                <Button variant="contained" style={{ margin: '40px' }}>Date</Button>
                <Button variant="contained" style={{ margin: '40px' }}>Finish Meet</Button>
            </Container>
            <Container sx={{ backgroundColor: 'lightGray', height: '1000px', marginTop: '20px' }}>
                <Button variant="contained" style={{ margin: '40px' }}>Upload</Button>
                <Button variant="contained" style={{ margin: '40px' }}>Delete</Button>
                <div>
                    <img src="https://weekendspikebucket.s3.us-east-2.amazonaws.com/1690736706279-71172864794__3AFF6FB1-4B09-4D13-B58F-EE0824DE69A9.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLWVhc3QtMiJIMEYCIQCJ4DqDz%2FUyWBD2xkrNO2b1Ee%2FsCIX0nHfSVF7GDgwdcgIhAOJ%2BCqTbt1vPZOwZFta7fAPhluOMT9W%2FUmzBhA2pDvWdKu0CCNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzc5ODA3NDM4MTM3Igz1gU9toYT6l9zJmjEqwQIFNAF84Sipjg1KmtltQ9jOiuOptAoKJR2tvyDEZRIp66NjTHgsK%2Bo6F37WIR4%2B05hhb86saSLzdoz78GEs0UVmBdeeOCQvTDKzA9rWlK6jr34e0YnbJmHx6%2FiCr0R8JnLli40AgV0f4mIMj10d85B%2BLdGEx%2B91ztIZIqjPj7U9yvc5FwnBYaMhRFQAcWQFWmpU31aMTrIDc%2BulGSyotx3a7A9tf01QEfzKNPJTg677r57STD15wqO%2FBcYTdDwhxEg%2BmdkdG2Bd7xBZNPUaiQH4mJycCVIDuxXBTjxsKxL2EaHewAF9dnw%2BAgpDEspHb%2FXaH4k9O%2Bm%2FVpDN2L6TtrPQ1f9e6sCxC6zdtZqZ91r7bzmtHMn1ahWgIZP6XbAqfzP8mV7B3I%2B7186eWXmACc%2FhnXED60eEyiHMIqqHI20HOxQw6%2B%2BkpgY6sgKx2QH9y89fTyeM4vBTzL54CSYiSwK9ULgJRjMwjitmL%2B2kgstpZA8hug2Tjny7bEwrtPiSEghSeJLKts4XxGeiCVMIWEJrwNf0kt%2Fcinfx%2BKCCvhHEdkWyKaPOF0MsgxT42pPGxbnmdz71HotBZnue7gdR0bCEy7unkF4ihczOkP7lhKpKwaP5VMQE2evHnPPRN4sWmxJQSkQd55%2B1as1E7QvGfQ%2BP2p5dfptabuMUM19EhUw2yQOtUtz9S2oGUP%2BstCnUAGJhmJEdOZ8RKtG3ajAxRibWfM6%2FhQpSNfBwTvujBdwKWl7wwvScrLDQsf3wWke4WnCqrQT40BTLCORGgiTu53Tz8sl78wvznelf5WsM0UnRWb2qSYjPhOlerWwqDgZ7RzHaLId5Kbf8zGioVJQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230801T165151Z&X-Amz-SignedHeaders=host&X-Amz-Expires=60&X-Amz-Credential=ASIAVQ3SJSU46OFT2BFA%2F20230801%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=d7887feeae7f8f9f81030fd55bd4e1f4e464479f5f4981558afec7bf0952b08a" style={{ maxHeight: '300px', maxWidth: '300px' }}></img>
                    <form encType='multipart/form-data' onSubmit={handleSubmit}>
                    <input type="file" name='photo' />
                    <button type="submit">Upload</button>
                     </form>
                </div>
            </Container>
        </div>
    )
}

export default CreateAMeet