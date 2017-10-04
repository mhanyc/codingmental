STAGING_URL=http://codingmental.s3-website-us-east-1.amazonaws.com/
PROD_URL=http://codingmental.s3-website-us-east-1.amazonaws.com/
STAGING_BUCKET=codingmental_stage
PROD_BUCKET=codingmental
INTERMEDIATE_STEPS ?= make $(PUBLIC)/js/all.json

JS_FILES=static/js/src

all: jshint jscs

include *.mk

$(PUBLIC)/js/all.json: $(PUBLIC)/json/all/index.html
	mkdir $(PUBLIC)/js/ || true
	mv $< $@ && ./checkjson.py
	cp $@ static/js/all.json

runserver-mha:
	hugo --buildDrafts --verboseLog=true -v
	hugo server --baseUrl=http://codingmental.s3-website-us-east-1.amazonaws.com/ --bind=0.0.0.0 --port=13093 --watch --buildDrafts --verboseLog=true -v