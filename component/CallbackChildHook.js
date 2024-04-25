"use client";
import React, { useEffect } from "react";

const CallbackChildHook = ({ handlerCounterOne }) => {
	useEffect(() => {
		console.log("hello");
	}, [handlerCounterOne]);
	return <div>CallbackChildHook</div>;
};

export default CallbackChildHook;
