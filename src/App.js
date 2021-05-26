
import {Route, Switch} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorities';

function App() {
  return (
    <div> 
      <Switch>
      <Route path='/' exact>  
        <AllMeetupsPage/>
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage/>
      </Route>
      <Route path='/favorites'>
        <FavoritesPage/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
