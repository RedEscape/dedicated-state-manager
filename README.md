# Dedicated State Manager 

A separate State class that can be used separately from React (e.g. in vanilla JS, Node.JS) 


## State<T> class structure 

**state: T** - a private field storing the current state.  
**listeners** - an array of subscriber functions that are notified about changes.  
**getState()** - returns the current state.  
**setState()** - updates the state and notifies subscribers.  
**subscribe/unsubscribe** - methods for adding/removing subscribers.  


## Notifying subscribers is like sending out email notifications:

Function (setState) send an email (new state).  
All listeners receive it instantly.  
Each one processes the email differently (e.g., re-rendering).  
This is the basis of React (useState), Redux, MobX and other state managers. This State is a simplified working version of them!  

## React integration 

Rerender happens because of the useState and useReducer hooks





