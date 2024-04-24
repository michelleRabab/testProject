"use client";
import React from "react";
import useOnlineHook from "../utils/useOnlineHook";
import useConunterHook from "../utils/useConunterHook";

const CompB = () => {
	const { myHookCounter, decrement } = useConunterHook(1);
	return (
		<>
			<div>--------------------------</div>
			<h2>Comp B</h2>
			<div>--------------------------</div>
			<h3>Custom Hook Example 1</h3>
			<div> {useOnlineHook() ? "online" : "offline"}</div>
			<div>
				<h3>Custom Hook Example 2</h3>

				<div> increment by customHook: {myHookCounter}</div>
				<button onClick={decrement}>Increment By </button>
			</div>
			<div>
				<h3>Custom Hook Example 3</h3>
			</div>
		</>
	);
};

export default CompB;
