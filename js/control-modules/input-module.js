;(function (w) {
    w.App = w.App || {};
    var inputModule = function (c) {
        this.control = c || null;
        this.Validations = [];

        //initialize the control
        init();

        this.setValidation = function (name, event, func) {
            var handler = (func).bind(this);
            this.control.addEventListener(event, handler);
            this.Validations.push({ 'Name': name, 'Handler': handler });
        }

        function init() {

        };
    };

    w.App.InputModule = inputModule;
})(window);