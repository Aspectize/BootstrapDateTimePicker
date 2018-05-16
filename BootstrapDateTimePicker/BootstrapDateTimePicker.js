/* Bootstrap datetimepicker extension */
/* Build with http://eonasdan.github.io/bootstrap-datetimepicker */

Aspectize.Extend("BootstrapDateTimePicker", {
    Properties: { Value: null, MinDate: new Date(0), MaxDate: new Date(0), Stepping: 1, Format: '', Inline: false, ViewMode: 'days', UseCurrent: true, SideBySide: false, DefaultDate: new Date(0), Locale: 'en', Debug: false },
    Events: ['OnValueChanged'],
    Init: function (elem) {

        var initialized = false;

        function newPicker() {
            var options = {
                debug: Aspectize.UiExtensions.GetProperty(elem, 'Debug') || false, /* Use debug = true to keep picker open and inspect control */
                minDate: false,
                maxDate: false,
                stepping: Aspectize.UiExtensions.GetProperty(elem, 'Stepping') || 1,
                format: Aspectize.UiExtensions.GetProperty(elem, 'Format') || 'DD/MM/YYYY HH:mm',
                inline: Aspectize.UiExtensions.GetProperty(elem, 'Inline'),
                viewMode: Aspectize.UiExtensions.GetProperty(elem, 'ViewMode') || 'days',
                useCurrent: Aspectize.UiExtensions.GetProperty(elem, 'UseCurrent'),
                ignoreReadonly: true,
                locale: Aspectize.UiExtensions.GetProperty(elem, 'Locale') || 'en',
                defaultDate: false,
                sideBySide: Aspectize.UiExtensions.GetProperty(elem, 'SideBySide')
            };

            if ($(elem).data("DateTimePicker")) {
                $(elem).data("DateTimePicker").destroy();
            }

            $(elem).datetimepicker(options).on('dp.change', function (e) {
                var value = null;
                if (e.date) {
                    value = e.date.toDate(); $(elem).removeClass('has-error');
                }
                Aspectize.UiExtensions.ChangeProperty(elem, 'Value', value);
                Aspectize.UiExtensions.Notify(elem, 'OnValueChanged', value);
            });
        }

        Aspectize.UiExtensions.AddMergedPropertyChangeObserver(elem, function (sender, arg) {

            if (!initialized) {
                newPicker();
                initialized = true;
            }

            if ('Value' in arg) {
                //$(sender).datetimepicker('date', arg.Value);
                var currentDate = arg.Value; // || new Date();
                $(sender).data("DateTimePicker").date(currentDate);
            }

            if ('UseCurrent' in arg) {
                $(sender).data("DateTimePicker").useCurrent(arg.UseCurrent);
            }

            if ('DefaultDate' in arg) {
                var defaultDate = arg.DefaultDate;
                if (arg.DefaultDate === null || arg.DefaultDate.valueOf() === 0) defaultDate = false;
                $(sender).data("DateTimePicker").defaultDate(defaultDate);
            }

            if (('MinDate' in arg) && ('MaxDate' in arg)) {
                $(sender).data("DateTimePicker").minDate(false);
                $(sender).data("DateTimePicker").maxDate(false);
            }

            if ('MinDate' in arg) {
                var mindate = arg.MinDate;
                if (arg.MinDate === null || arg.MinDate.valueOf() === 0) mindate = false;
                $(sender).data("DateTimePicker").minDate(mindate);
            }

            if ('MaxDate' in arg) {
                var maxdate = arg.MaxDate
                if (arg.MaxDate === null || arg.MaxDate.valueOf() === 0) maxdate = false;
                $(sender).data("DateTimePicker").maxDate(maxdate);
            }

            if ('Stepping' in arg) {
                var stepping = arg.Stepping || 1;
                $(sender).data("DateTimePicker").stepping(stepping);
            }

            if ('Format' in arg) {
                var format = arg.Format || 'DD/MM/YYYY HH:mm';
                $(sender).data("DateTimePicker").format(format);
            }

            if ('Inline' in arg) {
                $(sender).data("DateTimePicker").inline(arg.Inline);
            }

            if ('ViewMode' in arg) {
                $(sender).data("DateTimePicker").viewMode(arg.ViewMode || 'days');
            }

            if ('Locale' in arg) {
                $(sender).data("DateTimePicker").locale(arg.Locale || 'en');
            }

            if ('Debug' in arg) {
                $(sender).data("DateTimePicker").debug(arg.Debug);
            }

            if ('SideBySide' in arg) {
                $(sender).data("DateTimePicker").sideBySide(arg.SideBySide);
            }


        });

        //newPicker();
    }
});


