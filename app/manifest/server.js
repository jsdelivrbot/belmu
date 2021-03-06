// This file is generated by Sapper — do not edit it!
import * as route_style from '../../routes/style.css';
import index from '../../routes/index.html';
import root from '../../routes/_layout.html';
import error from '../../routes/_error.html';

export const manifest = {
	server_routes: [
		{
			// style.css
			pattern: /^\/style\/?$/,
			handlers: route_style,
			params: () => ({})
		}
	],

	pages: [
		{
			// index.html
			pattern: /^\/?$/,
			parts: [
				{ name: "index", component: index }
			]
		}
	],

	root,

	error
};

// this is included for legacy reasons
export const routes = {};