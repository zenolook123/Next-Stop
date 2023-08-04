
const defaultMeet = [
    {
      id: 0,
      meetup_name: 'Meetup',
      meetup_description: 'This is a default meetup. Click create a meet to get started!',
      meetup_picture: 'http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2020/03/04125001/DSC00202-1200x800.jpg',
      meet_address: 'Default Address',
      meet_date: '2023-08-01',
    }
  ]

const allMeetReducer = (state = defaultMeet, action) => {

switch (action.type) 
{
case 'SET_ALL_MEETS':
return action.payload
case 'UNSET_MEETS':
return {};
default:
return state;
}
};

// user will be on the redux state at:
// state.user
export default allMeetReducer;
