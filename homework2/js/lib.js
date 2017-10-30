$(document).ready(function () {
    var input = $('#forCyrs');
    var button = $('#test');

    $('#forCyrs').on('keyup', function (e) {
        if (e.target.value === 'JavaScript') {
          $('input[type="checkbox"]').prop('checked', 'checked');
        }
      });
});