# GatorTec Service Tracker

### Deployed Site:
https://gatortec-service-tracker.herokuapp.com/#!/login


### Dev Team:
+ Renzo Rodriguez, (786) 426-8468, renzo@ufl.edu
+ Macy Weston, (321) 848-4259, macyweston1@ufl.edu
+ Zachary Shields, (850) 362-8570, shieldsy24@ufl.edu
+ William Santry, (321) 281-7791, wil.santry@ufl.edu 
+ Aaron Hanuschak, (954) 326-4401, ahanuschak@ufl.edu


### Summary
This is a device service tracker that allows three different types of users.  Admins, Technicians, and Customers.  The primary purpose of the service tracker is for the customers to login and see the progress of the service on their device(s).  The admin is allowed to create/delete new employees, including technicians and admins, while the technician is only allowed to view and update customers without the abillity to deleted them.


### Credits:
+ AngularJS
+ Bootstrap
+ PapaParse

### How to run locally:
+ Clone Repository here https://github.com/SoftwareEngineering-2B/GatorTec-Service-Tracker.git
+ Go into the repository and npm install
+ Navigate to modules/GatorTec/config.js
+ Within config.js replace all code with:
	```
	'use strict';

	module.exports = {
  	db: 'mongodb://<dbuser>:<dbpassword>.mlab.com:59235/gatortec-service-tracker',
	}
	
	```
+ Navigate to modules/GatorTec/
+ To run the app open terminal and run:
```
    node server.js
```
+ On your browser navigate to localhost:8080

### Possible Future Updates:
+ Sending e-mails to new customers
+ Sending e-mails to customers that need to call GatorTec
+ Automate the upload portion of the project
