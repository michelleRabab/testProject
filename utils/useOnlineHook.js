"use client";
import React, { useState, useEffect } from "react";

const useOnlineHook = () => {
	const [isOnline, setIsOnline] = useState(navigator.onLine);
	useEffect(() => {
		window.addEventListener("online", () => setIsOnline(true));
		window.addEventListener("offline", () => setIsOnline(false));
	}, []);
	return isOnline;
};

export default useOnlineHook;
