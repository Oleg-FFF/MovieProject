// import React from "react";
//
// export const Counter = (props) => {
//     console.log(props);
//     const {counter, userIsAuth} = props.counter;
//     const {decrement, increment, logToggle} = props.actions;
//
//     return (
//         <div>
//             <div>{userIsAuth ?`You are logged in`: `You are not logged in`}</div>
//             <div><button onClick={logToggle}>{userIsAuth? 'Log out': 'Log in'}</button></div>
//             {userIsAuth && (<div>
//                 <button onClick={increment}>Increment</button>
//                 <button onClick={decrement}>Decrement</button>
//                 <h1>Counter: {counter}</h1>
//             </div>)}
//         </div>
//     )
// };
