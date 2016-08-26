---
author_name: "Susan Dreher"
author_url: http://ctl.columbia.edu/about/team/dreher/
date: 2016-05-31
lede: ""
poster:
poster_source:
poster_sourceurl:
tags: ["javascript", "html5", "testing"]
title: Testing Javascript Interactives 
topics:
- Research and Development
type: post
---

## Background
[In May](https://compiled.ctl.columbia.edu/articles/standalone-interactives/), I detailed our strategy for bundling JavaScript interactives into standard [webpacks](http://webpack.github.io/). We are now the proud authors of over [a dozen webpacks](https://github.com/search?p=1&q=org%3Accnmtl+pack&type=Repositories). The interactives [embedded seamlessly](https://pass.ctl.columbia.edu/adolescents/interview-stakeholders/) into their migrated static sites. A [gallery](https://github.com/ccnmtl/interactives) will be live soon, authored by my colleague [Zarina Mustapha](http://ctl.columbia.edu/about/team/mustapha/).

## Test, test, test
Here at CTL, we are passionate about delivering high quality code that adheres to community standards. Our quality control arsenal includes unit and integration tests, code reviews, static analyzers, style checkers and continuous integration. Our Django/Python projects have excellent unit test coverage. Applications with complex client-side interactions are covered by [Selenium](http://www.seleniumhq.org/) tests.

One noticeable testing gap is the JavaScript supporting our web applications. The script is subject to static code analysis ([JSHint](http://jshint.com/)) and style checks ([JSCS](http://jscs.info/)), but a standard testing approach has proved elusive. As part of the interactives migration effort, I wanted to settle on frameworks for unit tests and client tests, i.e. tests that rely on the presence of the DOM, then start writing tests.

*Note: I'm using the [Elder Issues Dresser](https://pass.ctl.columbia.edu/lib/elderdresser/) interactive as a demo throughout this post. This interactive was designed to convey the daily medical and social issues of older adults. This interactive uses [Backbone.js](http://backbonejs.org/) as a lightweight MVC layer. [Full code](https://github.com/ccnmtl/elderissuesdresser-pack/) is available on Github.*

## Choosing a Test Framework
JavaScript testing utilities are [proliferating](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript). Using [NPMCompare](http://npmcompare.com), I reviewed the most (currently) popular players [Jasmine](http://jasmine.github.io), [Mocha](https://mochajs.org/), [Facebook's Jest](https://facebook.github.io/jest/), [Tape](https://github.com/substack/tape) and [Karma](https://karma-runner.github.io/1.0/index.html).

The [npm comparison](https://npmcompare.com/compare/jasmine,jest,karma,mocha,tape) shows Mocha as the overall leader. "Mocha has been out there for longer (since 2 years ago), it also has more daily downloads, more weekly downloads, more monthly downloads, more stars on Github, more followers on Github and more forks."

A few other compelling features sealed the choice: an easy-to-read BDD style interface, asynchronous support via callback or [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and a [Nyan cat test reporter](https://mochajs.org/images/reporter-nyan.png). Mocha does require an additional assertion library, so I went with [Chai](http://chaijs.com/) for its [multiple assertion styles](http://chaijs.com/guide/styles/#differences).

## Unit Tests
The interactives code is generally broken up into models and views. The models are excellent test targets -- small discrete functions with no DOM requirements. Many step-by-step introductions walk through unit testing with Mocha, i.e. [here](http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.V7ymoz4rJcw) and [here](@todo). I followed the pattern of creating a test directory, with a model-test.js.

```
project  
  |-- test  
  |   |-- model-test.js
```

And added the following to package.json:
```
scripts {
    "test": "mocha -R nyan",
}
```

And wrote a very, very simple test:
```
...
describe('Models', function() {
    it('ItemList', function() {
        var data = [{'name': 'item'}];
        var a = new models.ItemList(data);
        var output = a.toTemplate();

        assert.equal(output.length, 1);
        assert.equal(data[0].name, output[0].name);
    });

});
...
```

Type ```npm test``` and voila. The unit tests run and the Nyan cat moves across the screen.

{{< figure src="/img/assets/nyan-cat-1.png" class="text-center" alt="A screenshot of the Nyan Cat test reporter." >}}

## Client tests

Writing and configuring the unit tests took an hour. Putting together DOM-based view tests that could run through the command line took days. The basic idea is to load a webpage, then interact and introspect the resulting DOM. Judging by the numerous blog posts and pleas for help on StackOverflow, an accepted common solution has not yet emerged. The fragmented world of Javascript frameworks, module bundlers and testing tools obviously complicates everything. Adding webpack to the mix boosts the pain. I ended up cobbling together an approach after *much* trial and error. I'm going to skip the heartache, and just review the stack and my final approach.

### Dependencies

You'll need a few npm packages to make this go:
* phantomjs-prebuilt - [PhantomJS](http://phantomjs.org/) is a headless WebKit with a JavaScript API.
* mocha-phantomjs -  [mocha-phantomjs](https://github.com/nathanboktae/mocha-phantomjs) runs on top of PhantomJS
* jquery - for DOM manipulation.

### Get started

You'll need a test .html file for PhantomJS to load.
```
project  
  |-- test  
  |   |-- view-test.html
```

```
<html>
<head>
    <meta charset="utf-8">
    <!-- encoding must be set for mocha's special characters to render properly -->
    <link rel="stylesheet" href="../node_modules/mocha/mocha.css" />
</head>
<body>
    <div id="mocha"></div>
    <script src="../node_modules/mocha/mocha.js"></script>
    <script src="../node_modules/chai/chai.js"></script>
    <script>
        mocha.ui('bdd')
        expect = chai.expect
    </script>
    <!-- there is MAGIC here! keep reading -->
    <script src="../dist/testBundle.js"></script>
    <script>
        mocha.run()
    </script>
    <div class="steps"></div>
    <div class="infographic-container"></div>
</body>
</html>
```

And a (very simple) test that interacts with the DOM.
```
project  
  |-- test  
  |   |-- view-test.js
```

```
    describe('InfographicView', function() {
        it('initialized', function() {
            assert.isTrue(jQuery('.progressbar-set-initial').is(':visible'));
        });
    });
```

### Where the magic happens

If you noticed, the view-test.html file includes a testBundle.js. In order for Mocha to test the webpack, all the code AND tests are bundled up, loaded and executed in the test page. Creating a testBundle just requires a bit of configuration.

Add a [test.webpack.config.js]() that pulls in view-test.js and outputs testBundle.js.

```
module.exports = {
    entry: './test/view-test.js',
    output: {
        filename: './testBundle.js'
    },
    module: {
        ...
    }
};

```

Update your package.json with the build directive and the test targets. I broke the unit and client tests into separate commands.
```
"scripts": {
    ...
    "test": "npm run test-unit && npm run test-client",
    "test-unit": "mocha -R nyan test/model-test.js",
    "test-client": "mocha-phantomjs -R nyan dist/view-test.html",
    "build": "webpack && webpack --config test/test.webpack.config.js"
  },
``` 

### Run It
```npm build``` to create the bundle. ```npm test``` to run all the tests. Or, you can open ```test/view-test.html``` in a browser to see the tests run.

//@todo - insert nyan cat test passing

### Not so fast...

Easy right? Well, that example was. But, the real point is to verify user interaction. 
In this example, a user clicks a dresser item, the item displays as visited and 
the progress bar increments. This test likely will fail.

```
it('click candies', function() {
    var elt = jQuery('.item-image-candies'); 
    jQuery(elt).click();
    assert.isTrue(jQuery('#item-modal').is(':visible'));
});
```

Why would it fail? A click is an asynchronous event. A user clicks a button, an event is fired, a handler is executed.
After the click, the test needs to hang out and wait a bit until the click flow completes and the modal appears. How to do that?

Long story short, I ended up just writing a little wait function based
on the PhantomJS example [waitfor.js](https://github.com/ariya/phantomjs/blob/master/examples/waitfor.js#L15), and leveraged
[Mocha's asynchronous testing support](https://mochajs.org/#asynchronous-code). Longer term, I think [CasperJS](http://casperjs.org/) 
is a path to explore. But, I had really, really spent enough time on this... Here's what the test looks like now.

```
function waitFor(testFx, doneFx, millis) {
    var timeout = millis ? millis : 3000; // Default Max Timout is 3s
    var start = new Date().getTime();

    var interval = setInterval(function() {
        var condition = testFx();

        if (condition) {
            clearInterval(interval);
            doneFx();
        } else if ((new Date().getTime() - start >= timeout)) {
            clearInterval(interval);
            doneFx(new Error('timeout occurred'));
        }
    }, 250); //< repeat check every 250ms
}
```

```
it('click candies', function() {
    var elt = jQuery('.item-image-candies');
    jQuery(elt).click();

    waitFor(function() {
        jQuery('#item-modal').is(':visible');
    }, done);
});
```


## Summary

Navigating the testing complexities of Webpack + Mocha + PhantomJS took some time, but I'm happy to have a way
forward. Good luck with your own testing efforts. I'd love to hear about any tricks or easier paths. 
Now I have a lot more tests to write...

## Helpful Links
[Testing JavaScript with PhantomJS](http://code.tutsplus.com/tutorials/testing-javascript-with-phantomjs--net-28243)
