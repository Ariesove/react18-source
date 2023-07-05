import { Action } from 'shared/ReactTypes';
// is this.setState((prev)=>prev+1) or this.setState(state)
export interface Update<State> {
  action: Action<State>
}