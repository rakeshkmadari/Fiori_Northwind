/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list
// * All 3 Products have at least one Category

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/pages/App",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/pages/Browser",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/pages/Master",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/pages/Detail",
	"com/mycompany/northwind/Fiori_Northwind/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.mycompany.northwind.Fiori_Northwind.view."
	});

	sap.ui.require([
		"com/mycompany/northwind/Fiori_Northwind/test/integration/MasterJourney",
		"com/mycompany/northwind/Fiori_Northwind/test/integration/NavigationJourney",
		"com/mycompany/northwind/Fiori_Northwind/test/integration/NotFoundJourney",
		"com/mycompany/northwind/Fiori_Northwind/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});