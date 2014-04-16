
var ac;
var toki;

function selectLang() {
	var language = $('#language').val ();
	if (language == "russian")
		toki = toki_ru;
	else toki = toki_en;
	if (ac) {
		ac.setOptions ({"lookup": toki});
	}
}

window.addEventListener ('load', function() {
	$('#icon').click (hideAbout);
	$('#query').click (inputClicked);
	$('#tapme').click (showAbout);
	$('#language').change (selectLang);
	selectLang();

	ac = $('#query').autocomplete ({
		deferRequestBy: 100,
		lookup: toki
	});
	onOrientationChange (function (o) {
		ac.container.css ({ width:window.innerWidth-10 });
	});
	
});

function hideAbout () {
	var a = document.getElementById ('about');
	a.style.visibility = 'hidden';
}

function showAbout () {
	const initstr = "o sitelen toki";
	var txt = document.getElementById ('query');
	var tme = document.getElementById ('tapme');
	if (txt.value != "" && txt.value != initstr) {
		txt.value = '';
		tme.innerHTML = ' ? ';
		txt.focus ();
	} else {
		txt.value = initstr;
		document.getElementById ('about').style.visibility = 'visible';
	}
}

function inputClicked() {
	document.getElementById ('query').value='';
	ac.onValueChange ();
}

function onOrientationChange(callback) {
        var layout = undefined;
	var ow = window.innerWidth;
        var onResize = function () {
		var w = window.innerWidth;
		if (w != ow) {
			/* do not redraw when keyboard is shown */
			const lay = w>window.innerHeight?
				"landscape": "portrait";
			if (!layout || layout != lay) {
				callback (lay);
				layout = lay;
			}
			ow = w;
		}
		window.removeEventListener ("resize", onResize);
                window.addEventListener ("resize", onResize);
        }
	window.removeEventListener ("resize", onResize);
        window.addEventListener ("resize", onResize);
        onResize ();
}
