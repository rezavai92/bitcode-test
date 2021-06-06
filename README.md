## Assignment 

This App is implemented using following technologies
* React 
* Typescript
* Bootstrap
* HTML
* CSS

### Instruction 
clone this git repo and run following command to install all the required libraries and packages first. Be sure you are in the project's directory.

      npm istall

Then run following command to run the application on local server 
      
      npm start


### Logic Behind the chosen design

  After analyzing the given postman collection it seemed like we can treat this app as a simple dashboard for managing the medical devices. Furthermore,There
  is option like "adding new model" also triggered me treat it as admin stuff. 
  A table seems to be perfect in terms of visualizing the existing data in the dashboard .For example we could also add some graph based on the collection if 
  and visualize how much of the existing medical devices are in the stock, how much of which get consumed most , which one is more likely to get out of stock 
  e.t.c, provided that  relevant data and api is provided . Since the given data is just some text collection, it seems like , A tabular representation might be a good fit.
  

### Workflow 
  
  This app consists of total 9 components. They are
  
  * App Component : It is actually the mother component that holds the all other components .
  * AppContextPorivder : This component is implemented to enable the context API feature . A context api is a good choice for keeping state in 
      a central component in order to serve them to the consumer component. For exmaple , accesstoken is such an state that most of the components will need 
      it if there is an api call and it needs the accessToken. keeping such common state into a central component gives much more flexibility. remembering who is       signed in now during the whole app life cycle is another vital state that should be stored into a central component.
      
  * Login Component : It deals with user login . After successful login, the received accestoken and  signed in user is saved into the cookie.
  * Home Component  : It holds the all the contents that are supposed to be presented in home route.
  * Layout Component : It holds the base layout for the app .like navbar, main content , footer e.t.c.
  * Navbar Component  : It consists of the common navigation for the app .
  * DeviceModel Component : It deals with inidividual device model that would be mapped down in it's mother component "DeviceModelList".
  * DeviceModelList Component : It deals with the full list of device model, map individual device model to a table , holds necessary methods e.t.c.
  * Overview Modal  : It deals with the overview of selected model and shows all of them in an overlay dialogue.
  * AddNewModel Component : It deals with adding new model into the collection.
    
## Followed Best Practices 

  * making individual component for individual service
  * loose coupling and tight cohesion among  components
  * writing code in typescript that should increase data integrity and flexibility and reduce code breaks significantly as compared to a javascript codebase.
  * Context API
  * saving accessToken and signed in user in the cookie to make sure that , appilcation will remember the logged in user untill the token expires. it means ,
      user will be still logged in even if the page gets reloaded as long as token is not expired.
      
## Feature that could be Added 
  * Pagination  and a simple dropdown that would specify the number of rows to be showed in the table .
  To keep the codebase simple and to the point ,no additional feature has been implemented. 
  
 
      
