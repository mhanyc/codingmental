# Coding Mental

Coding Mental is a tech blog contributed to and maintained by the tech team at MHA-NYC

## Overview

Coding Mental is built with [Hugo](https://gohugo.io/) and [Bootstrap](http://getbootstrap.com/), with development beginning as a fork of Columbia's [CompilED blog](https://github.com/ccnmtl/compiled).

Unless otherwise noted, the content on this blog is licensed under a [Creative Commons Attribution-ShareAlike 3.0 United States](http://creativecommons.org/licenses/by-sa/3.0/us/) license.

## Building the blog

To install the blog dependencies, use the command `make`

To build the 'public' folder, use the command `hugo`

To run a local server, use the command `make runserver`

## Jenkins

The Jenkinsfile sets up a simple Jenkins pipeline, which builds the blog and deploys the static files to an S3 bucket. __You must enter your AWS credentials into the jenkins credential plugin__. The username is your access key, the password is your secret access key, and the ID is what you use to refer to these credentials in the Jenkinsfile.