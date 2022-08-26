import { componentFromStream, createEventHandler } from 'recompose';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import Home from './Home/';
import Navbar from './Navbar/Navbar';
import Search from './Home/Search'
import { createRoot } from 'react-dom/client'
import './observableConfig';
import './index.css'


const App = componentFromStream(prop$ => {
  const { handler, stream } = createEventHandler();
  const value$ = stream.pipe(
    map(e => e.target.value.trim()),
    startWith('')
  );

  return combineLatest(prop$, value$).pipe(
    map(([props, value]) => (
      <div className="m-auto" style={{width: '1100px'}}>
        <Navbar/>
        <Search handler={handler}/>
        <Home user={value} />
      

      </div>
    ))
  );
});

createRoot(document.getElementById('root')).render(<App/>)

