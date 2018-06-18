module.exports = {
	extends: 'airbnb-base',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	env: {
		browser: true,
		es6: true
	},
	rules: {
		'arrow-parens': [ 'error', 'always' ],
		'func-names': [ 'warn', 'as-needed'],
		'new-cap': [ 'error', { properties: false } ],
		'no-plusplus': [ 'error', { allowForLoopAfterthoughts: true } ],
		'no-tabs': 'off',
		indent: [ 'error', 'tab' ],
	}
};
