'use strict';

var React = require('react'),
    GA = require('ga-tracking-code'),
    _ = require('lodash');

SilentYolocaust = React.createClass({
    displayName : 'Silent Yolocaust',
    handlePageView : function (page, title) {
        var overrides;
        
        if( !(page || title) ) {
            ga('send','pageview');
            return;
        }

        if (page) {
            overrides.page = page;
        }
        if (title) {
            overrides.title = title;
        }
        
        ga('send','pageview');
    },
    render : function () {

        if(_.has(this.props,'ua_tracking_code')){
            GA.initialize();
            ga('create',this.props.ua_tracking_code,'auto');
            return false;
        }

        console.err("No UA tracking code has been provided");
        return false;

    }
});

module.exports = SilentYolocaust;
