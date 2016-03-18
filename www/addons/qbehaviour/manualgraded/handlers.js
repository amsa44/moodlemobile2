// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.addons.qbehaviour_manualgraded')

/**
 * Manual graded behaviour handler.
 *
 * @module mm.addons.qbehaviour_manualgraded
 * @ngdoc service
 * @name $mmaQbehaviourManualGradedHandler
 */
.factory('$mmaQbehaviourManualGradedHandler', function() {

    var self = {};

    /**
     * Whether or not the module is enabled for the site.
     *
     * @return {Boolean}
     */
    self.isEnabled = function() {
        return true;
    };

    /**
     * Handle a question.
     *
     * @param {Object} question The question.
     * @return {Void}
     */
    self.handleQuestion = function(question) {
        // Nothing to do.
    };

    return self;
});
