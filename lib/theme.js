(function(module) {
	"use strict";

	var Theme = {
		defineWidgetAreas: function ( areas, callback ) {
			areas = areas.concat( [
				{
					widget: "categoriesheader",
					name: "Categories Header",
					template: "categories.tpl",
					location: "header"
				}
			] );
			callback( null, areas );
		}
	};

	module.exports = Theme;

}(module));