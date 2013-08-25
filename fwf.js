/*
 * Featherweight Framework
 *
 * William DiStefano
 * 2013-08-25 18:15
 *
*/

function _(id) {

	var fwf = {
		version: '20130825dev',
	}

	if (id) {

		// recursively create a new _ object and return it
		// this helps to make sure we don't accidentially call the constructor without the 'new' keyword, which prevents accidentially assigning objects to the 'window' namespace
		if (window === this) {
			return new _(id);
		}

		// initialize element and return it
		this.e = document.getElementById(id);
		return this;
	} else {
		return this;
	}
}

_.prototype = {
	hide:	function () {
				this.e.style.display = 'none';
				return this;
			},

	show:	function () {
				this.e.style.display = 'inherit';
				return this;
			},

	bgcolor: function (color) {
				this.e.style.background = color;
				return this;
			},

	val:	function (newval) {
				this.e.value = newval;
				return this;
			},

	toggle: function () {
				if (this.e.style.display !== 'none') {
					this.e.style.display = 'none';
				} else {
					this.e.style.display = '';
				}
				return this;
			},

	size:	function (height, width) {
				this.e.style.height = height + 'px';
				this.e.style.width = width + 'px';
				return this;
			}
};