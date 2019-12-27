/**
* Libraries
*/

import React,{
   Component
} from 'react';

import {
   Route
} from 'react-router-dom';

/**
* Components
*/

import Tutorial from './components/Tutorial/tutorial';
import Cube from './components/Cube/cube';
import EquirectangularMap from './components/EquirectangularMap/equirectangularMap';
import Transparency from './components/Transparency/transparency';

/**
* Styles
*/

import './app.scss';


/**
* App component definition and export
*/

export class App extends Component {

   /**
   * Markup
   */

   render(){
      return(
         <div className="app">
            <Route 
               exact
               path="/"
               component={ Transparency }
            />
         </div>
      );
   }
}

export default App;
