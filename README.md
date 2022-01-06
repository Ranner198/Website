# Website

## DevOps Exportation
- I decided to explore more with DevOps fundimentals and did the following steps

* Spun up a new Ubuntu Linux environent via Linode
* Designed a new Repo to house this website in and added some boilerplate code
* I added NGINX to serve as my backend on the system
* Enabled my Port 80 and Port 443 for web traffic
* Configured my NGINX to run a reverse proxy to hit my Express.js applications
* Stood up a Jenkin's instance and opened a port for me to log into 
* Configured a Jenkin's Workspace for my website to be built on
* Once I got it working I added in webhooks for Jenkins to trigger builds on git push's
* Now anytime I make an update to the repo it takes about 2 seconds for my Node Deamon thread to terminate, rebuild the package, install the dependencies, and deploy the new website
