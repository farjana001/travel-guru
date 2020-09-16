// import React, { useContext } from 'react';
// import { UserContext } from '../../App';
// import { Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({ children, ...rest }) => {
//     const [destination, setDestination] = useContext(UserContext);
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 destination.id ? (
//                     children
//                 ) : (
//                         <Redirect
//                             to={{
//                                 pathname: "/home",
//                                 state: { from: location }
//                             }}
//                         />
//                     )
//             }
//         />
//     );
// };

// export default PrivateRoute;