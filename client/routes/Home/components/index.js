import React, { useState, useEffect } from "react";
import { func, shape } from "prop-types";
import { debounce } from "lodash";
import { getGitData } from "../actions";

import ResultContainer from "./ResultContainer";
import { parent, elementsParent } from "./styles";
import Heading from "./Heading";

const View = (props) => {
	const { dispatch, state } = props;
	const [ loading, updateLoading] = useState(false);
	
	const results = state.data;
	
	const apiCall = state.apiCall;

	const [type, selectType] = useState('user');
	const [search, updateSearch] = useState('');
	useEffect(()=>{
		// Show loading effect
		setTimeout(()=>{
			updateLoading(false);
		}, 500)
	},[results])
	const performSearch = (e) => {
		console.log(e);
		let searchVal = e.target.value;
		searchVal= searchVal.trim();
	
		
			dispatch(getGitData({
				search: searchVal,
				type,
			}))
			if(searchVal) {
				updateLoading(true);
			}

		updateSearch(searchVal);

	}
	const getData = debounce(performSearch, 500);

	const onChange = (e) => {
		if(search) {
			dispatch(getGitData({
				search,
				type: e.target.value
			}))
			updateLoading(true);
		}
		selectType(e.target.value);
	}
  return(
    <div className={parent}>

			<Heading />
      
      <div className={elementsParent}>
      	<input type="text" placeHolder={"Start typing to search"} onChange={getData}/>
        <select onChange={onChange} >
					<option selected={type === 'user'} value="user">Users</option>
					<option selected={type === 'repo'} value={"repo"}>Repositories</option>
				</select>
      </div>
		
			{ results  ? <ResultContainer results={results} type={type} apiCall={apiCall} loading={loading}/> : ""}
				
		
    </div>
  )
};

View.propTypes={
	dispatch: func.isRequired,
	state: shape({}).isRequired
};

export default View;