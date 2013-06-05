all: dict
	${MAKE} zip

dict:
	perl text2row.pl < tokipona-dictionary.txt > toki.js 
	ln -fs toki.js toki-offline.js

ffos fxos zip:
	rm -f ../nimiali.zip
	zip -r ../nimiali.zip *
	mv ../nimiali.zip .

clean:
	rm -rf nimiali.zip
