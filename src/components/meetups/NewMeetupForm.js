import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';


function NewMeetupForm(props){
  return (
    <Card>
      <form className={class.form}>
        <div className={class.control}>
          <label htmlFor='Title'>Meetup Title</label>
          <input type='text' required id='Title'/>
        </div>
        <div className={class.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image'/>
        </div>
        <div className={class.control}>
          <label htmlFor='address'>Meetup address</label>
          <input type='text' required id='address'/>
        </div>
        <div className={class.control}>
          <label htmlFor='description'>Meetup address</label>
          <input type='text' required id='address'/>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
