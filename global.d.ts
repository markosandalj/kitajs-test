/* eslint-disable @typescript-eslint/no-empty-object-type */
// src/global.d.ts
import React from "react";

// Override JSX.Element globally to be typed as React.ReactNode
declare global {
	namespace JSX {
		type Element = React.ReactNode;
	}
}
