Silent Yolocaust

A React Component that never renders on a server side rendering page.

It's a component that contains functions to help your
DOM elements interact with your Google Analytics account.

Assumptions :

1.) Your app is built with React for server side rendering.
2.) You have a Property in Google Analytics that has a UA tracking code.

Procedure of Placing into App :

1.) Require the module :

var SilentYolocaust = require(dirname_to_silent_yolocaust); //change to actual directory

This is not yet published to npmjs.org

2.) Instantiate the react component in legal scopes with a UA property. Render it so it can start. It is also recommended to place it inside a variable,
so that functions within the component can be used.

var sy = <SilentYolocaust ua_tracking_code="UA-XXXXX-X"/>
React.render(sy);

Warning : Not including the tracking code will cause SilentYolocaust to do nothing.
