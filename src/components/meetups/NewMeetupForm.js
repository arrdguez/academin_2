import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';


function NewMeetupForm(props){
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='Title'>Meetup Title</label>
          <input type='text' required id='Title'/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image'/>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup address</label>
          <input type='text' required id='address'/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Meetup address</label>
          <textarea id='description' required rows='5'></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
