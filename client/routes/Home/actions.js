/*
 * Home Actions
 *
 */


export function getGitData(obj) {

  return {
    type: "GET_DATA",
    payload: {
      ...obj,
    },
  };
}

export const updateResults = (obj) => {
	return {
    type: "UPDATE_RESULTS",
    payload: {
      ...obj,
    },
  };
}