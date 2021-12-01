function openNav(element) {
    // Expand
    element.style.minWidth = "120px";

    // Adapt text
    const sections = new Map;
    sections.set(0, "Quien soy?");
    sections.set(1, "Educacion");
    sections.set(2, "Experiencia");
    sections.set(3, "Proyectos");
    sections.set(4, "Intereses");
    sections.set(5, "Premios");
    $(".nav_element").each(function (index) {
        $(this).text(function () {
            return sections.get(index);
        });
    });
}

function closeNav(element) {
    // Collapse
    element.style.minWidth = "55px";

    // Adapt text
    const romanNumerals = new Map;
    romanNumerals.set(0, "I");
    romanNumerals.set(1, "II");
    romanNumerals.set(2, "III");
    romanNumerals.set(3, "IV");
    romanNumerals.set(4, "V");
    romanNumerals.set(5, "VI");
    $(".nav_element").each(function (index) {
        $(this).text(function () {
            return romanNumerals.get(index);
        });
    });
}

function expandP(paragraphNum) {
    $($("p")[paragraphNum]).html(function () {
        return paragraphs[paragraphNum];
    });
}

function expandLibrary() {
    const bookshelf = $("#library");
    fadeRight(bookshelf[0]);
    bookshelf.html(function () {
        return library;
    });
}

function fadeRight(element) {
    element.style.maxWidth = "100%";
    element.style.width = "100%";
    element.style.marginLeft = "0";
}

function openProject(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabProjects");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("projectLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "grid";
    evt.currentTarget.className += " active";
}

function openInterest(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabInterests");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("interestLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "grid";
    evt.currentTarget.className += " active";
}

// Default tabs
document.getElementById("defaultProject").click();
document.getElementById("defaultInterest").click();