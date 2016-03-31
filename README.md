# BootstrapDateTimePicker
BootstrapDateTimePicker Aspectize integration for https://eonasdan.github.io/bootstrap-datetimepicker/ component.

## 1 - Download

Download extension package from aspectize.com:
- in the portal, goto extension section
- browse extension, and find BootstrapDateTimePicker
- download package and unzip it into your local WebHost Applications directory; you should have a BootstrapDateTimePicker directory next to your app directory.

## 2 - Configuration

Add BootstrapDateTimePicker as Shared Application in your application configuration file.
In your Visual Studio Project, find the file Application.js in the Configuration folder.

add BootstrapDateTimePicker in the Directories list :
```javascript
app.Directories = "BootstrapDateTimePicker";
```

## 3 - Include js and css

In your application.htm.ashx file, add the following lines:
```javascript
<!-- bootstrap datepicker -->
<script src='~BootstrapDateTimePicker/Moment/moment.min.js'></script>
<script src='~BootstrapDateTimePicker/DatePicker/js/bootstrap-datetimepicker.min.js'></script>
<link rel='stylesheet' type='text/css' href='~BootstrapDateTimePicker/DatePicker/css/bootstrap-datetimepicker.min.css' />
```

## 4 - Usage

a/ Html

Insert the following html into your control:
```html
<div aas-name='BootstrapDatePickerSample' aas-type='BootstrapDateTimePicker.BootstrapDateTimePicker' class='input-group date'>
    <input type='text' class="form-control" />
    <span class="input-group-addon">
        <span class="fa fa-calendar"></span>
    </span>
</div>
```
    
b/ Binding

The following properties are bindable (reference of properties are here: https://eonasdan.github.io/bootstrap-datetimepicker/Options/):
- Value: value of date.
- MinDate: Prevents date/time selections before this date.
- MaxDate: Prevents date/time selections after this date.
- Stepping: Number of minutes the up/down arrow's will move the minutes value in the time picker.
- Format: See [momentjs' ](http://momentjs.com/docs/#/displaying/format/) docs for valid formats. Format also dictates what components are shown, e.g. MM/dd/YYYY will not display the time picker.
- Inline: Will display the picker inline without the need of a input field. This will also hide borders and shadows. The default is false
- ViewMode: The default view to display when the picker is shown. The default is 'days'.
- UseCurrent: On show, will set the picker to the current date/time. The default is true.
- DefaultDate: Sets the picker default date/time. Overrides useCurrent. The default is new Date(0).
- Debug: Will cause the date picker to stay open after a blur event (usefull if you want to inspect the control). The default is false.

The control has the following event:
- OnValueChanged: Fired when the date is changed.


