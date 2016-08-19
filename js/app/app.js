;(function (w, d) {
    w.App = w.App || {};
    window.addEventListener('DOMContentLoaded', function () {

        //create the input module
        var txtName = new App.InputModule(d.getElementById('txtName'));
        txtName.setValidation('Required', 'change', function () {
            var args = {};
            args.IsValid = this.control.value.length;
            App.EventSystem.RaiseEvent('SetButtonState', args);
        })

        //create the button module
        var btnSubmit = new App.ButtonModule(d.getElementById('btnSubmit'))
    });
})(window, document);