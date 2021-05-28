import MeetupList from '../components/meetups/MeetupList'
import { useState, useEffect} from 'react';



 function AllMeetups () {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
   
      
      fetch('https://academin2-default-rtdb.firebaseio.com/meetups.json').then(response =>{
        return response.json();
      }).then(data=>{
        console.log(data);
        const meetups = [];
        for(const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
 


  if (isLoading) {
    return (<section>
      <p>Loading...</p>
    </section>);
  }
  return (
    <section>
      <h1>All meetup</h1>
        <MeetupList meetups={loadedMeetups}/>
    </section>
    
  )
}

export default AllMeetups
