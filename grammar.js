module.exports = grammar({
	name: 'plaintext',

	rules: {
		source_file: $ => /.*/
	}
});
