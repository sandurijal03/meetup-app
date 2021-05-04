import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

const NewMeetup = () => {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch(
      'https://practicing-typescript-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'content-type': 'application/json',
        },
      },
    ).then(() => {
      history.replace('/');
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
