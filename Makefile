all: dict
	${MAKE} zip

FILES=icon.png icon*.png startup.png main.manifest manifest.webapp
FILES+=index.html jquery.js jquery.autocomplete.js index.css
FILES+=shared README.md toki.js main.js

dict:
	perl text2row.pl < tokipona-dictionary.txt > toki.js 

ffos fxos zip:
	rm -f ../nimiali.zip nimiali.zip
	zip -r ../nimiali.zip ${FILES}
	mv ../nimiali.zip .

clean:
	rm -rf nimiali.zip
