/*
Available commands

"Concatenate all the JS file"
- grunt concat:js
    -> this would make /vagrant/application/build/scripts/assetconcat-js.sh absolete

"Compile all the LESS files to 1 CSS file"
- grunt less:development
    -> this would make the following files obsolete
        -> /vagrant/application/less/compile_less.sh
        -> /vagrant/application/less/watch_less.sh
            ^ didn't work anyway, so be gone

"Automate all the things :)"

    "Watch for LESS file changes and issue target less:development if needed"
    - grunt watch:less
    "Watch for JS file changes and issue target concat:js if needed"
    - grunt watch:js
    "Perform both watches"
    - grunt watch:all
    
*/

module.exports = function(grunt) {
    "use strict";

    // grunt.initConfig({
    //     "less": {
    //         "development": {
    //             files: {
    //                 "../application/public/css/style.css": "../application/less/style.less",
    //                 "../application/public/css/style-ssi.css": "../application/less/style-ssi.less"
    //             }
    //         }
    //     },
    //     "watch": {
    //         "all": {
    //             files : ["../application/less/**/*.less", "../application/js/**/*.js"],
    //             tasks : ["jshint:all", "concat:js", "less:development", "bless"]
    //         },
    //         "less": {
    //             files : ["../application/less/**/*.less"],
    //             tasks : ["less:development", "bless"]
    //         },
    //         "jshint": {
    //             files : ["../application/js/**/*.js"],
    //             tasks : ["jshint:all"]
    //         },
    //         "js": {
    //             files : ["../application/js/**/*.js"],
    //             tasks : ["jshint:all", "concat:js"]
    //         }
    //     },
    //     "jshint": {
    //         "options": {
    //             "jshintrc": true
    //         },
    //         "all": [
    //             "../application/js/**/*.js"
    //         ]
    //     },
    //     "lesslint": {
    //         "ziggo": ['../application/less/**/*.less']
    //     },
    //     "bless": { /*Bless css for IE9- compatibility: http://blesscss.com/*/
    //       "css": {
    //         "options": {},
    //         "files": {
    //             '../application/public/css/style-bless.css': '../application/public/css/style.css'
    //         }
    //       }
    //     },
    //     "concat": {
    //         "js": {
    //             files :[{
    //                 // src : "js/**/*.js",
    //                 src : [
    //                     "../application/js/jquery/jquery-1.10.2.min.js",
    //                     "../application/js/jquery/jquery.cookie.js",
    //                     "../application/js/jquery/jquery.easing.js",
    //                     "../application/js/jquery/jquery.equalheight.js",
    //                     "../application/js/jquery/jquery.dotimeout.js",
    //                     "../application/js/jquery/jquery.placeholder.js",
    //                     "../application/js/jquery/jquery.grayscale.js",
    //                     "../application/js/jquery/jquery.touchSwipe.min.js",
    //                     "../application/js/bootstrap.min.js",
    //                     "../application/js/enrise.js",
    //                     "../application/js/modernizr.js",
    //                     "../application/js/responsive-img.min.js",
    //                     "../application/js/ziggo.js",
    //                     "../application/js/ziggo/ziggo.component.js",
    //                     "../application/js/ziggo/component/ziggo.component.collapsible.js",
    //                     "../application/js/ziggo/component/ziggo.component.faq.js",
    //                     "../application/js/ziggo/component/ziggo.component.cookie.bar.js",
    //                     "../application/js/ziggo/component/ziggo.component.cookie.settings.js",
    //                     "../application/js/ziggo/ziggo.plugin.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.mobilemenu.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.urlrewriter.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.responsivefonts.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.pricedecimals.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.livecomchat.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.maxlines.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.validation.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.svgfallback.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.analytics.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.expandable.js",
    //                     "../application/js/ziggo/component/ziggo.component.feedback.js",
    //                     "../application/js/ziggo/component/ziggo.component.selector.js",
    //                     "../application/js/ziggo/component/ziggo.component.stappenplan.step.js",
    //                     "../application/js/ziggo/component/ziggo.component.stickyheader.js",
    //                     "../application/js/ziggo/component/ziggo.component.linkblocks.js",
    //                     "../application/js/ziggo/component/ziggo.component.imagelink.js",
    //                     "../application/js/ziggo/component/ziggo.component.tabview.js",
    //                     "../application/js/ziggo/component/ziggo.component.tooltip.js",
    //                     "../application/js/ziggo/component/ziggo.component.restcall.js",
    //                     "../application/js/ziggo/component/ziggo.component.carousel.js",
    //                     "../application/js/ziggo/component/ziggo.component.verticaltabs.js",
    //                     "../application/js/ziggo/component/ziggo.component.basket.js",
    //                     "../application/js/ziggo/component/ziggo.component.counter.js",
    //                     "../application/js/ziggo/component/ziggo.component.alziggoklant.js",
    //                     "../application/js/ziggo/component/ziggo.component.voordeelkiezer.js",
    //                     "../application/js/ziggo/component/ziggo.component.anchorlink.js",
    //                     "../application/js/ziggo/component/ziggo.component.productavailability.js",
    //                     "../application/js/ziggo/component/ziggo.component.choicetable.js",
    //                     "../application/js/ziggo/component/ziggo.component.mini-ankeiler.js",
    //                     "../application/js/ziggo/component/ziggo.component.offcanvastoggle.js",
    //                     "../application/js/ziggo/component/ziggo.component.filter.js",
    //                     "../application/js/ziggo/component/ziggo.component.anchorlink.js",
    //                     "../application/js/ziggo/component/ziggo.component.callmenow.js",
    //                     "../application/js/ziggo/component/ziggo.component.tess.js",
    //                     "../application/js/ziggo/component/ziggo.component.ciplus.js",
    //                     "../application/js/ziggo/component/ziggo.component.autocomplete.js",
    //                     "../application/js/ziggo/component/ziggo.component.enotice.js",
    //                     "../application/js/ziggo/component/ziggo.component.interruptchecker.js",
    //                     "../application/js/ziggo/component/ziggo.component.autocomplete.js",
    //                     "../application/js/ziggo/component/ziggo.component.channelfinder.js",
    //                     "../application/js/ziggo/component/ziggo.component.dropdown.js",
    //                     "../application/js/ziggo/component/ziggo.component.metrixlab.js",
    //                     "../application/js/ziggo/component/ziggo.component.form.js",
    //                     "../application/js/ziggo/component/ziggo.component.sellingpoint.js",
    //                     "../application/js/ziggo/component/ziggo.component.search.js",
    //                     "../application/js/ziggo/component/ziggo.component.videoplayer.js",
    //                     "../application/js/ziggo/component/ziggo.component.feed-carousel.js",
    //                     "../application/js/ziggo/component/ziggo.component.frequency.js",
    //                     "../application/js/ziggo/component/ziggo.component.navigation.js",
    //                     "../application/js/ziggo/component/ziggo.component.socialshare.js",
    //                     "../application/js/ziggo/component/ziggo.component.obsoletebrowser.js",
    //                     "../application/js/ziggo/component/ziggo.component.newsletter.js",
    //                     "../application/js/ziggo/component/ziggo.component.webspace.js",
    //                     "../application/js/ziggo/component/ziggo.component.calculator.js",
    //                     "../application/js/ziggo/component/ziggo.component.slider.js",
    //                     "../application/js/bower_components/dragdealer/dragdealer.min.js" //slider core
    //                 ],
    //                 dest: "../application/public/js/source.js"
    //             }, {
    //                 src: [
    //                     "../application/js/jquery/jquery-1.10.2.min.js",
    //                     "../application/js/jquery/jquery.cookie.js",
    //                     "../application/js/jquery/jquery.easing.js",
    //                     "../application/js/jquery/jquery.dotimeout.js",
    //                     "../application/js/jquery/jquery.placeholder.js",
    //                     "../application/js/jquery/jquery.touchSwipe.min.js",
    //                     "../application/js/bootstrap.min.js",
    //                     "../application/js/enrise.js",
    //                     "../application/js/modernizr.js",
    //                     "../application/js/responsive-img.min.js",
    //                     "../application/js/ziggo.js",
    //                     "../application/js/ziggo/ziggo.component.js",
    //                     "../application/js/ziggo/component/ziggo.component.cookie.bar.js",
    //                     "../application/js/ziggo/component/ziggo.component.cookie.settings.js",
    //                     "../application/js/ziggo/ziggo.plugin.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.mobilemenu.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.responsivefonts.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.svgfallback.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.analytics.js",
    //                     "../application/js/ziggo/component/ziggo.component.socialshare.js",
    //                     "../application/js/ziggo/component/ziggo.component.obsoletebrowser.js",
    //                     "../application/js/ziggo/component/ziggo.component.newsletter.js",
    //                     "../application/js/ziggo/component/ziggo.component.search.js"
    //                 ],
    //                 dest: "../application/public/js/source-ssi.js"
    //             }, {
    //                 src: [
    //                     "../application/js/jquery/jquery.cookie.js",
    //                     "../application/js/jquery/jquery.easing.js",
    //                     "../application/js/jquery/jquery.dotimeout.js",
    //                     "../application/js/jquery/jquery.placeholder.js",
    //                     "../application/js/jquery/jquery.touchSwipe.min.js",
    //                     "../application/js/bootstrap.min.js",
    //                     "../application/js/enrise.js",
    //                     "../application/js/modernizr.js",
    //                     "../application/js/responsive-img.min.js",
    //                     "../application/js/ziggo.js",
    //                     "../application/js/ziggo/ziggo.component.js",
    //                     "../application/js/ziggo/component/ziggo.component.cookie.bar.js",
    //                     "../application/js/ziggo/component/ziggo.component.cookie.settings.js",
    //                     "../application/js/ziggo/ziggo.plugin.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.mobilemenu.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.responsivefonts.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.svgfallback.js",
    //                     "../application/js/ziggo/plugin/ziggo.plugin.analytics.js",
    //                     "../application/js/ziggo/component/ziggo.component.socialshare.js",
    //                     "../application/js/ziggo/component/ziggo.component.obsoletebrowser.js",
    //                     "../application/js/ziggo/component/ziggo.component.newsletter.js",
    //                     "../application/js/ziggo/component/ziggo.component.search.js"
    //                 ],
    //                 dest: "../application/public/js/source-no-lib-ssi.js"
    //             }]
    //         }
    //     }
    // });

    // grunt.loadNpmTasks("grunt-contrib-jshint");
    // grunt.loadNpmTasks("grunt-contrib-less");
    // grunt.loadNpmTasks('grunt-lesslint')
    // grunt.loadNpmTasks("grunt-contrib-watch");
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-bless');

    // the default task can be run just by typing "grunt" on the command line
    // for now we only have specific tasks
    // grunt.registerTask("default", ["watch:less"]);
    grunt.registerTask("default", []);

    // grunt.registerTask('build', ['jshint', 'concat', 'less', 'bless']);
    // grunt.registerTask('js', ['jshint', 'concat']);
};

