import React, { useState } from "react";

const useConunterHook = (val) => {
	const [myHookCounter, setMyHookCounter] = useState(0);

	const increment = () => {
		return setMyHookCounter(myHookCounter + val);
	};

	const decrement = () => {
		return setMyHookCounter(myHookCounter - val);
	};

	return { myHookCounter, increment, decrement };
};

export default useConunterHook;
