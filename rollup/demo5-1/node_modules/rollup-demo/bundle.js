(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('the-answer')) :
    typeof define === 'function' && define.amd ? define(['the-answer'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rollupDemo = factory(global.theAnswerToTheQuestionOfLifeTheUniverseAndEverything));
}(this, (function (answer) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var answer__default = /*#__PURE__*/_interopDefaultLegacy(answer);

    var result = (function(answer){
        return answer+222;
    })(answer__default['default']);

    return result;

})));
