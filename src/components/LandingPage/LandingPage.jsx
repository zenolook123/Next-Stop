import './LandingPage.css';

// CUSTOM COMPONENTS
import { Button } from '@mui/material';

function LandingPage() {
  return (
    <div className="container">
      <h1 style={{margin:'55px'}}>Are you tired of unorganized car meets?</h1>
      <div className="grid">
        <div className="grid-col grid-col_8">
          <h3 style={{margin:'50px'}}>
            Have you ever wanted to go to car meets but haven't been able to find them?
            Are you someone who's
            constantly on Snapchat/Discord/Facebook trying to keep up to date with the latest information?
          </h3>

      
          <h1 style={{margin:'50px'}}>
            Next Stop is your one stop solution to getting all your car meet info in one place!
          </h1>
          <Button variant='contained' style={{margin:'50px'}}>Find Meets Near You</Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
