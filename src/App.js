import { memo, useEffect, useState } from 'react';
import './App.css';
import Colors from "./Colors";

const App = memo(() => {

  return (
    <div>
    < Colors height={128} width={256}/>
    </div>
  );
});

export default App;
