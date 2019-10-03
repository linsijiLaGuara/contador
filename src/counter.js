//Realizar un tool list

import React from 'react';
import { Button } from 'semantic-ui-react';
// siempre para que la libreria react este disponible
export default class Counter extends React.Component {

  state = { counter: 0 };

  // decrement = ()=>this.setState({counter:this.state.counter-1});
   decrement = () => this.setState(({ counter }) => ({ counter: counter - 1 }));

   increment = () => this.setState(({ counter }) => ({ counter: counter + 1 }));



   render() {
     const { counter } = this.state;
     return (

     <div>
         <h1>Counter</h1>
         <h2>{counter}</h2>

         <Button type="button" onClick={this.decrement}>-</Button>
         <Button type="button" onClick={this.increment}>+</Button>
      </div>


     );
   }
}
