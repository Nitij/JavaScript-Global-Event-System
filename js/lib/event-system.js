;(function (w) {
    w.App = w.App || {};

    var eventSystem = {

        'AddEvent': function (name, handler) {
            (this.Events[name])
            ? this.Events[name].Handlers.push(handler)
            : this.Events[name] = { Handlers: [handler] };            
        },

        'RaiseEvent': function (name, args) {
            var i = 0;
            if (this.Events[name]) {
                for(;i<this.Events[name].Handlers.length;i++) {
                    this.Events[name].Handlers[i].call(null, args);
                }
            }
        },

        'RemoveEvent': function (name, handler) {
            var idx = this.Events[name].Handlers.indexOf(hander);
            if (idx > -1) {
                this.Events[name].Handlers.splice(idx, 1);
            }            
        },

        'Events': {}
    };

    w.App.EventSystem = eventSystem;
})(window);