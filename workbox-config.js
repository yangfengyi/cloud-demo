module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{ico,css,html,js,png}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};