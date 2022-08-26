import React from 'react';
import ReactDOM from 'react-dom';
import { componentFromStream, createEventHandler } from 'recompose';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import Home from './Home';
import { createRoot } from 'react-dom/client'
import './observableConfig';
import Search from './Home/Search';


const App = componentFromStream(prop$ => {
  const { handler, stream } = createEventHandler();
  const value$ = stream.pipe(
    map(e => e.target.value.trim()),
    startWith('')
  );

  return combineLatest(prop$, value$).pipe(
    map(([props, value]) => (
      <div>
        <Search handler={handler}/>
        <Home user={value} />
      </div>
    ))
  );
});

createRoot(document.getElementById('root')).render(<App/>)

