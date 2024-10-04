import { ReactNode as OriginalReactNode } from "react";

declare global {
	namespace React {
		type ReactNode = string | Promise<string>;
	}
}
