"use client";
import React from "react";
import useOnlineHook from "../utils/useOnlineHook";
import useConunterHook from "../utils/useConunterHook";

const CompA = () => {
	const { myHookCounter, increment } = useConunterHook(3);
	return (
		<>
			<div>--------------------------</div>
			<h2>Comp A</h2>
			<div>--------------------------</div>
			<h3>Custom Hook Example 1</h3>

			<div>is CompA- {useOnlineHook() ? "online" : "offline"}</div>
			<div>
				<h3>Custom Hook Example 2</h3>

				<div> increment by customHook: {myHookCounter}</div>
				<button onClick={increment}>Increment By </button>
			</div>
			<div>
				<h3>Custom Hook Example 3</h3>
			</div>
		</>
	);
};

export default CompA;
