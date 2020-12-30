import React from "react";

import { useDispatch, useSelector } from 'react-redux';

import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';

import { homeReducer } from './reducer';
import homeSaga from './saga';
import View from "./components";

const Home = (props) => {
	useInjectReducer({ key: 'homeReducer', reducer: homeReducer });
	useInjectSaga({ key: 'homeSaga', saga: homeSaga });
	const dispatch = useDispatch();
	const reducerState = useSelector((state)=> state.homeReducer);
	console.log(reducerState);
	return  (
		reducerState ? <View {...props} state={reducerState}  dispatch={dispatch} /> : <div></div>
	);
  
}

// function mapStateToProps(props) {
//   return {
//     ...props,
//   };
// }
export default Home;
// export default connect(mapStateToProps)(Home);

