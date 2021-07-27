
    var showall = 0;
    var list = [

      { "Course": "BRG251", "Title": "FRD", "Hours": "11", "Availability": "Open", "date": "July 21 2021", "name": "TxDOT Environmental Process for Local Governments", "location": "VIR-VIRTUAL Instructor-led Training" },
      { "Course": "SRG250", "Title": "GRD", "Hours": "12", "Availability": "Waitlist", "date": "July 28 2021", "name": "TxDOT Environmental Process for Local Governments test1", "location": "VIR-VIRTUAL Instructor-led Training" },
      { "Course": "test", "Title": "FRD", "Hours": "13", "Availability": "Open", "date": "July 21 2021", "name": "TxDOT Environmental Process for Local Governments testing", "location": "VIR-VIRTUAL Instructor-led Training" },
      { "Course": "Abcd", "Title": "OWD", "Hours": "14", "Availability": "Not Scheduled", "date": "JUNE 24 2021", "name": "TxDOT Environmental Process for Local Governments test", "location": "VIR-VIRTUAL Instructor-led Training" },
      

    ];
    var temp_list = list;
    var temp_list1 = list;
    var course1 = 0;
    var title1 = 0;
    var hour1 = 0;
    var avail1 = 0;
    function courseclick() {

      if (course1 == 0) {
        listsort = temp_list1.sort(GetSortOrder("Course"));
        var el_up = document.getElementById("table");
        el_up.innerHTML = "";
        constructTable(el_up, listsort);
        course1 = 1;

      }
      else if (course1 == 1) {
        course1 = 0;
        listsort = temp_list1.sort(GetreSortOrder("Course"));
        var el_up = document.getElementById("table");
        el_up.innerHTML = "";
        constructTable(el_up, listsort);

      }
      console.log(course1)

    }
    function titleclick() {

      if (title1 == 0) {
        listsort = temp_list1.sort(GetSortOrder("Title"));
        var el_up = document.getElementById("table");
        el_up.innerHTML = "";
        constructTable(el_up, listsort);
        title1 = 1;

      }
      else if (title1 == 1) {
        title1 = 0;
        listsort = temp_list1.sort(GetreSortOrder("Title"));
        var el_up = document.getElementById("table");
        el_up.innerHTML = "";
        constructTable(el_up, listsort);

      }
      console.log(course1)

    }
    function hourclick() {

      if (hour1 == 0) {
        listsort = temp_list1.sort(GetSortOrder("Hours"));
        var el_up = document.getElementById("table");
        el_up.innerHTML = "";
        constructTable(el_up, listsort);
        hour1 = 1;

      }
      else if (hour1 == 1) {
        hour1 = 0;
        listsort = temp_list1.sort(GetreSortOrder("Hours"));
        var el_up = document.getElementById("table");
        el_up.innerHTML = "";
        constructTable(el_up, listsort);

      }
      console.log(course1)

    }
    function availclick() {

      if (avail1 == 0) {
        listsort = temp_list1.sort(GetSortOrder("Availability"));
        var el_up = document.getElementById("table");
        el_up.innerHTML = "";
        constructTable(el_up, listsort);
        avail1 = 1;

      }
      else if (avail1 == 1) {
        avail1 = 0;
        listsort = temp_list1.sort(GetreSortOrder("Availability"));
        var el_up = document.getElementById("table");
        el_up.innerHTML = "";
        constructTable(el_up, listsort);

      }
      console.log(course1)

    }

    function GetSortOrder(prop) {
      return function (a, b) {

        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      }
    }
    function GetreSortOrder(prop) {
      return function (a, b) {

        if (a[prop] < b[prop]) {
          return 1;
        } else if (a[prop] > b[prop]) {
          return -1;
        }
        return 0;
      }
    }

    function generate_year_range(start, end) {
      var years = "";
      for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
      }
      return years;
    }

    today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    selectYear = document.getElementById("year");
    selectMonth = document.getElementById("month");


    createYear = generate_year_range(1970, 2050);
    /** or
     * createYear = generate_year_range( 1970, currentYear );
     */

    document.getElementById("year").innerHTML = createYear;

    var calendar = document.getElementById("calendar");
    var lang = calendar.getAttribute('data-lang');

    var months = "";
    var days = "";

    var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    if (lang == "en") {
      months = monthDefault;
      days = dayDefault;
    } else if (lang == "id") {
      months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
      days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    } else if (lang == "fr") {
      months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
      days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    } else {
      months = monthDefault;
      days = dayDefault;
    }


    var dataHead = "<tr>";
    for (dhead in days) {
      dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
    }
    dataHead += "</tr>";


    document.getElementById("thead-month").innerHTML = dataHead;


    monthAndYear = document.getElementById("monthAndYear");
    showCalendar(currentMonth, currentYear);



    function next() {
      currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
      currentMonth = (currentMonth + 1) % 12;
      showCalendar(currentMonth, currentYear);
    }

    function previous() {
      currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
      currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
      showCalendar(currentMonth, currentYear);
    }

    function jump() {
      currentYear = parseInt(selectYear.value);
      currentMonth = parseInt(selectMonth.value);
      showCalendar(currentMonth, currentYear);
    }



    function daysInMonth(iMonth, iYear) {
      return 32 - new Date(iYear, iMonth, 32).getDate();
    }






    function constructTable(selector, list) {
      for (var i = 0; i < list.length; i++) {
        var row = '<tr><td>' + list[i].Course + '</td><td>' + list[i].Title + '</td><td>' + list[i].Hours + '</td><td>' + list[i].Availability + '</td></tr>';

        el_up = document.getElementById("table").innerHTML += row;

      }


    }
    function constructTable1(selector, list) {

      for (var i = 0; i < list.length; i++) {
        var divs = "<div class='d-flex'> <div class='calendarDate text-center'>" + list[i].date + "</div><div class='courseDetails ml-2'><h5>" + list[i].name + "</h5><p>" + list[i].Title + "</p><p><i class='fas fa-map-marker-alt'></i>" + list[i].location + "</p><p><i class='fas fa-user-friends'></i> 5/ 11</p></div></div>";

        el_up = document.getElementById("calendarcols").innerHTML += divs;
      }
    }

    //load Json to the page
    window.onload = (event) => {

      document.getElementById('Calender').style.display = "none";


      var el_up = document.getElementById("table");
      var el_up1 = document.getElementById("calendarcols");
      var item = document.getElementById("items");
      item.innerHTML = list.length;
      constructTable(el_up, list);
      constructTable1(el_up1, list);
    };
    function optionfilter(value) {
      var el_up1 = document.getElementById("calendarcols");
      var el_up = document.getElementById("table");
      if (value == "Open") {
        showall = 1;
      }
      else {
        showall = 0;
      }
      var newlist = [];
      for (var i = 0; i < list.length; i++) {

        if (list[i].Availability == value) {
          newlist.push(list[i]);
          //alert(i);
        }
      }
      if (value == "Availability") {
        newlist = list;
      }
      if (newlist.length == 0) {
        el_up.innerHTML = "No Data";
        el_up1.innerHTML = "No Data";
      } else {
        el_up.innerHTML = "";
        el_up1.innerHTML = "";
      }
      var item = document.getElementById("items");
      item.innerHTML = newlist.length;
      temp_list = newlist;
      constructTable1(el_up1, newlist);

      constructTable(el_up, newlist);
      showCalendar(currentMonth, currentYear);

      temp_list1 = newlist;

    }
    function search(value) {
      var newlist = [];
      for (var i = 0; i < list.length; i++) {

        if (list[i].Course.toUpperCase().includes(value.toUpperCase()) || list[i].Title.toUpperCase().includes(value.toUpperCase())) {
          newlist.push(list[i]);
          //alert(i);
        }
      }
      if (value == "Availability") {
        newlist = list;
      }
      var el_up = document.getElementById("table");
      var el_up1 = document.getElementById("calendarcols");
      if (newlist.length == 0) {
        el_up.innerHTML = "No Data";
        el_up1.innerHTML = "No Data";
      } else {
        el_up.innerHTML = "";
        el_up1.innerHTML = "";
      }
      var item = document.getElementById("items");
      item.innerHTML = newlist.length;
      temp_list = newlist;
      constructTable1(el_up1, newlist);
      constructTable(el_up, newlist);
      showCalendar(currentMonth, currentYear);

      temp_list1 = newlist;

    }
    function showCalendar(month, year) {

      var firstDay = (new Date(year, month)).getDay();

      tbl = document.getElementById("calendar-body");


      tbl.innerHTML = "";


      monthAndYear.innerHTML = months[month] + " " + year;
      selectYear.value = year;
      selectMonth.value = month;

      // creating all cells
      var date = 1;
      for (var i = 0; i < 6; i++) {

        var row = document.createElement("tr");


        for (var j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            cell = document.createElement("td");
            cellText = document.createTextNode("");
            cell.appendChild(cellText);
            row.appendChild(cell);
          } else if (date > daysInMonth(month, year)) {
            break;
          } else {
            cell = document.createElement("td");
            cell.setAttribute("data-date", date);
            cell.setAttribute("data-month", month + 1);
            cell.setAttribute("data-year", year);
            cell.setAttribute("data-month_name", months[month]);
            cell.className = "date-picker";
            cell.innerHTML = "<span>" + date + "</span>";
            for (let index = 0; index < temp_list.length; index++) {
              // if(date===Date.parse(list[index].date).getDate()){
              //     cell.className = "date-picker selected";
              // }
              var count = 0;
              var d = new Date(temp_list[index].date);
              if (date === d.getDate() && month === d.getMonth() && year === d.getFullYear() && temp_list[index].Availability == "Open") {
                for (let index1 = 0; index1 < temp_list.length; index1++) {
                  if (temp_list[index].date == temp_list[index1].date) {
                    count++;
                  }
                }
                if (showall == 0) {
                  cell.className = "date-picker selected";

                }
                else {
                  cell.innerHTML = count;
                  cell.className = "date-picker selectedblue";
                }

              }
              else if (date === d.getDate() && month === d.getMonth() && year === d.getFullYear()) {
                cell.className = "date-picker selected";
              }
            }
            if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth() && showall == 0) {
              cell.className = "date-picker  todaysAvailabilityDate";
            }
            else if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth() && showall == 1) {
              cell.className = "date-picker  todaysOpenDate";
            }
            row.appendChild(cell);
            date++;
          }


        }

        tbl.appendChild(row);
      }

    }
    function displayCalendar(){
      document.getElementById('navListActiveID').setAttribute('class','nav-link');
      document.getElementById('navCalendarActiveID').setAttribute('class', 'nav-link active');
      document.getElementById('myTabContent').style.display = "none";
      document.getElementById('Calender').style.display = "flex";
    }
    function displayList(){
      document.getElementById('navListActiveID').setAttribute('class', 'nav-link active');
      document.getElementById('navCalendarActiveID').setAttribute('class', 'nav-link');
      document.getElementById('myTabContent').style.display = "block";
      document.getElementById('Calender').style.display = "none";
    }