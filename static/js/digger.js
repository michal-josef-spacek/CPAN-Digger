$(document).ready(function()
{
    $('#sort_table').DataTable({
      "paging": false,
      "columnDefs": [
        { "targets": [0, 1, 2, 7], "orderable": true },
        { "targets": "_all", "orderable": false },
      ],
      "order": [[ 2, "desc" ]]
    });

    function set_local_date() {
        // Assume a date format of "2021-04-13T19:00:00+03:00";    });
        // Display time in localtime of the browser.
        const dates = document.getElementsByClassName("localdate");
        //console.log(dates);
        //console.log(dates.length);
        for (let ix=0; ix < dates.length; ix++) {
            const mydate = dates[ix].getAttribute("x-date");
            const date = new Date(mydate);
            dates[ix].innerHTML = date.toLocaleDateString( [], {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                timeZoneName: 'long'
            });
        }
    }
    set_local_date();
});
