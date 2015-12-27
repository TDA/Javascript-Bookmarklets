/**
 * Created by schandramouli on 12/27/15.
 */

javascript:
for (var startno = 31010104007; startno < 31010104085; startno++) {
  document.forms[0].regno.value = startno;
  document.forms[0].querySelector('input[type="submit"]').click();
  // do what you want with the results
  var table = document.getElementsByTagName('table')[0];
  // export as pdf? use jspdf here
}
