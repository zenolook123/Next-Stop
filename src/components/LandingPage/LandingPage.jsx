import './LandingPage.css';

// CUSTOM COMPONENTS
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import AllMeetCard from '../AllMeetsCard/AllMeetsCard';

function LandingPage() {

  const user = useSelector(store => store.user);


  const checkLogged = () => {
    return user.id ? "/meetdashboard" : "/registration";
  }

  return (<>
    <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div style={{ flex: '1' }}>
        <h1>Are you tired of unorganized car meets?</h1>
        <h2>Are you looking to discover exciting car meets but struggling to locate them?
          Do you find yourself always scouring Snapchat, Discord, or Facebook for the latest updates?</h2>
        <Link to={checkLogged} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button variant='contained' style={{ width: '200px', height: '50px' }}>Find Meets Near You</Button>
        </Link>
      </div>
        <img src='../images/NSLogoNoBG.png' alt='Next Stop Logo' style={{ height: '400px', width: '600px', marginTop:'10px'}} />
    </Container>
    <Link to={checkLogged} style={{ textDecoration: 'none', color: 'inherit' }}>
    <AllMeetCard />
    </Link>
    </>
  );
}

export default LandingPage;
