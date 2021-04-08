(function() {
  'use strict';

  Polymer({
    is: 'source-alert-service',

    properties: {
      /**
       * API root of eAndon services. The root URL should end with a forward slash.
       * */
      rootUrl: {
        type: String,
        value: 'https://test-source-alert-processor.run.aws-usw02-pr.ice.predix.io'
      },
      /**
       * UAA Bearer token with access to the Brilliant Apps Hub
       *
       * Best practice: use a proxy server to inject tokens & Predix Zone ID
       * */
      token: {
        type: String
      }
    },

    /**
     * Get all scheduled databases in asset service for recovery app
     * @param {String} siteId
     * @return {Promise}
     * */
    getSourceMappingsBySiteId: function(siteId) {
      if (typeof siteId === 'undefined') {
        console.error('Unable to get sourcemappings without site id.');
      }

      return this.$.promiseUtility.sendRequest({
        url: this.rootUrl + '/api/v1/sourceMappings/site/' + siteId,
        method: 'GET'
      });
    },

    /**
     * Get all scheduled databases in asset service for recovery app
     * @param {Array} configuredRoutes
     * @return {Promise}
     * */
    updateSourceMappings: function(configuredRoutes) {
      if (typeof configuredRoutes === 'undefined') {
        console.error('Unable to save undefined sourcemappings');
      }

      return this.$.promiseUtility.sendRequest({
        url: this.rootUrl + '/api/v1/sourceMappings',
        method: 'PUT',
        body: configuredRoutes
      });
    }
  });
})();
