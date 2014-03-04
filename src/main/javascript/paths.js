(function() {
	/*
	* Defines common path configuration information for SPX modules. This is used
	* in node and AMD environments
	*
	*/

	function paths() {
		return {
			jquery: '../libs/jquery-1.7.2',
			lodash: '../libs/lodash'
		};
	}

	if(typeof define === 'function' && define.amd) {
		define(paths);
	} else if(typeof module !== 'undefined' && module.exports) {
		module.exports = paths;
	}

}());
