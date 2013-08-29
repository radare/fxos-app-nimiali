(function() {
const project = "nimiali";
const manifest_url = "http://"+project+".ffos.lolcathost.org/packaged.webapp";

function install() {
	var myapp = navigator.mozApps.installPackage (manifest_url);
	myapp.onsuccess = function(data) {
		this.parentNode.removeChild(this);
	};
	myapp.onerror = function() {
		alert (this.error.name);
	};
};

var request = navigator.mozApps.checkInstalled (manifest_url);
request.onsuccess = function() {
	if (!request.result)
		install ();
};
request.onerror = function() {
	alert('Error checking installation status: ' + this.error.message);
};
})();
