STAGING_URL=https://dev.codingmental.mhaofnyc.org
PROD_URL=https://codingmental.mhaofnyc.org
STAGING_BUCKET=codingmental_stage
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
	hugo server --baseUrl=https://codingmental.mhaofnyc.org --bind=0.0.0.0 --port=13093 --watch --buildDrafts --verboseLog=true -v