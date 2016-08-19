;(function (w) {
    w.App = w.App || {};
    var buttonModule = function (c) {
        this.control = c || null;

        //initialize the control
        init();

        function init() {
            //add the global event here
            App.EventSystem.AddEvent('SetButtonState', eventSetState)
        };

        var setState = (function (d) {
            this.control.disabled = d;
        }).bind(this);

        function eventSetState(args) {
            setState(!args.IsValid);
        }
    };

    w.App.ButtonModule = buttonModule;
})(window);