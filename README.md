# FAN-OOP-LAB4
Lab4 of JavaScript 2
1. Take your initial web page, Lab4.html and rename it for use with this exercise. 
2. The purpose of this lab is to extend the “Submit” button event handler to make use of both a set (collection) and a map.
3. Before you make any changes to the “Yourname_Lab4.html” page you should properly test, read and step through the code to make sure you understand how it all works.
4. Begin by converting all “var” declarations to “let” declarations. For any new variables you create, use the “let” (block scope) format.
5. Next create a “set” (collection) object called “dataSet” that contains all the text boxes, province selected and “is member” checkbox (true or false) information. You’ll need to use the .add method to insert each piece of control status information into the set.
6. Alsocreateamapobjectcalled“dataMap”andaddallofthesamecontrol information to this object. You’ll need to use the .set method to perform the insert. Use the control “id” as the “key” and use the relevant information from each control (e.g. text box “value”) as the map “value”
7. CreateafunctioncalleddumpSet(dataSet)andafunctioncalled dumpMap(dataMap) to print out to the console (console.log) all the “value” elements in your “set” and all the “keys and “values” in your map.
8. With this kind of programming activity, you can save yourself a lot of time testing by assigning default values to all the controls within the web page. As such, you won’t need to type data into the text boxes, each time you test your web page.