"use client";
import React, { useCallback, useState } from "react";
import CallbackChildHook from "./CallbackChildHook";

const CallBackHook = () => {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);

	const handlerCounterTwo = () => {
		setCounter2(counter2 + 1);
	};

	// const handlerCounterOne = () => {
	// 	setCounter1(counter1 + 1);
	// };

	const handlerCounterOne = useCallback(() => {
		setCounter1(counter1 + 1);
	}, [counter1]);

	return (
		<>
			<div>----------------------------------</div>
			<div>
				<h2>useCallBack</h2>
				<h3>counter2</h3>
				<h3>{counter2}</h3>
				<button onClick={handlerCounterTwo}>counter 2 increment</button>
				<div>----------------------------------</div>
				<h3>{counter1}</h3>
				<CallbackChildHook handlerCounterOne={handlerCounterOne} />
				<button onClick={handlerCounterOne}>counter 1 increment</button>
			</div>
			<div>----------------------------------</div>
		</>
	);
};

export default CallBackHook;
