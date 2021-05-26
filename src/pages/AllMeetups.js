import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'Picture 1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/African_bush_elephants_%28Loxodonta_africana%29_female_with_six-week-old_baby.jpg/1280px-African_bush_elephants_%28Loxodonta_africana%29_female_with_six-week-old_baby.jpg',
    address: 'Matetsi Safari Area, Zimbabwe',
    description: 'African bush elephants (Loxodonta africana) female with six-week-old baby.'
  },
  {
    id: 'm2',
    title: 'Picture 2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/African_bush_elephants_%28Loxodonta_africana%29_female_with_six-week-old_baby.jpg/1280px-African_bush_elephants_%28Loxodonta_africana%29_female_with_six-week-old_baby.jpg',
    address: 'Matetsi Safari Area, Zimbabwe',
    description: 'African bush elephants (Loxodonta africana) female with six-week-old baby.'
  }

];


function AllMeetups () {
  return (
    <section>
      <h1>All meetup</h1>
        <MeetupList meetups={DUMMY_DATA}/>
    </section>
    
  )
}

export default AllMeetups
