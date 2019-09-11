var EventService = {
    isResizing : false,
    isPaused : false,

    addLines : function(source) {
        document.getElementById("ruler-lines").innerHTML = "";
        var lines = source.value.split(/\r*\n/);
        for(var i = 0; i < lines.length; i++) {
            row = document.createElement("tr");
            rowCell = document.createElement("td");
            rowCell.innerText = i.toString().padStart(10, "0");
            row.appendChild(rowCell);
            document.getElementById("ruler-lines").appendChild(row);
        }
    
        EventService.listErrors(document.getElementById("code").value);
    },
    
    addLangs : function() {
        var selectItem = document.getElementById("langs");
        selectItem.innerHTML = "";
        Framework.languages.forEach(function(element) {
            var option = document.createElement("option");
            option.value = element;
            option.text = element;
            selectItem.appendChild(option);
        });
    },
    
    bootstrap : function() {
        EventService.addLangs();
        EventService.addLines(document.getElementById('code'));
        EventService.resizeContainer();
    },
    
    changeLangugage : function(lang) {
        Framework.language = lang;
    },
    
    listErrors : function(script){
        Framework.setLanguageFromShebang(script);
        if (Framework.language != "") {
            document.getElementById("langs").value = (Framework.language);
        }
        if (EventService.isPaused == true) {
            return;
        }
        var errors = Framework.parse(script);
        var errorsTable = document.getElementById("error-list-table");
        errorsTable.innerHTML = "";
        if (script.trim() == "") {
            //errorsTable.innerHTML = "No script to parse....";
        }
        else {
            if (errors.length == 0) {
                errorsTable.innerHTML = "No errors found....";
            }
            else {
        
            }
        }
    },
    
    resizeContainer : function() {
        var editor = document.getElementById("code");
        var errorsContainer = document.getElementById("error-container");
        editor.style.height = screen.height / 2 + "px";
        errorsContainer.style.height = editor.style.height;
    },

    reset : function(e) {
        document.getElementById("code").value = "";
        document.getElementById("langs").value = "Parsers";
    },

    setPaused() {
        if (EventService.isPaused == true) {
            EventService.isPaused = false;
            EventService.listErrors(document.getElementById("code").value);
        }
        else {
            EventService.isPaused = true;
        }
        document.getElementById("pause-button").innerText = (EventService.isPaused ? "Resume" : "Pause");
    }
};