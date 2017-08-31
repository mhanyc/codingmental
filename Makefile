STAGING_URL=TBD
PROD_URL=TBD
STAGING_BUCKET=TBD
PROD_BUCKET=codingmental
INTERMEDIATE_STEPS ?= make $(PUBLIC)/js/all.json

JS_FILES=static/js/src

all: jshint jscs

include *.mk

$(PUBLIC)/js/all.json: $(PUBLIC)/json/all/index.html
	mkdir $(PUBLIC)/js/ || true
	mv $< $@ && ./checkjson.py

runserver-mha:
	hugo --buildDrafts --verboseLog=true -v
	hugo server --baseUrl=TBD --bind=0.0.0.0 --port=13093 --watch --buildDrafts --verboseLog=true -v