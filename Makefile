STAGING_URL=https://compiled.stage.ccnmtl.columbia.edu/
PROD_URL=https://compiled.ccnmtl.columbia.edu/
STAGING_BUCKET=compiled.stage.ccnmtl.columbia.edu
PROD_BUCKET=compiled.ccnmtl.columbia.edu
INTERMEDIATE_STEPS ?= make $(PUBLIC)/js/all.json

JS_FILES=static/js/src

all: jshint jscs

include *.mk

$(PUBLIC)/js/all.json: $(PUBLIC)/json/all/index.html
	mkdir $(PUBLIC)/js/ || true
	mv $< $@ && ./checkjson.py

runserver-zarina:
	hugo --buildDrafts --verboseLog=true -v
	hugo server --baseUrl=http://kodos.ccnmtl.columbia.edu/ --bind=0.0.0.0 --port=13093 --watch --buildDrafts --verboseLog=true -v