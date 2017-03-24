'use strict';

var React = require('react'),
    GA = require('./ga-tracking-code'),
    _ = require('lodash'),

SilentYolocaust = React.createClass({
    displayName : 'Silent Yolocaust',
    handlePageView : function (page, title) {
        var overrides = {},

        start = function () {
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

            ga('send','pageview',overrides);
        }

        start();

    },
    createTrackingEvent : function () {
        var start = function () {
            return tracking_event;
        },
        tracking_event = function (event_object) {
            ga('send',event_object);
        }

        start();
    },
    bindDown : function (element,event_listener,event_object) {
        var tracking_event = this.createTrackingEvent();
        start = function () {
            try {
                element.addEventListener(event_listener,tracking_event(event_object));
            }
            catch (err) {
                console.err(err);
            }
        }
        start();
    },
    render : function () {
        var self = this,

        start = function () {
            if(_.has(self.props,'ua_tracking_code')){
                GA.initialize();
                ga('create',this.props.ua_tracking_code,'auto');
                return false;
            }

            console.err("No UA tracking code has been provided");
            return false;
        }

        start();
    }
});

module.exports = SilentYolocaust;
