var Framework = {
    language : "",
    languages :  [
        "Parsers",
        "C++", 
        "C#",
        "Java", 
        "PHP", 
        "Python",
        "JavaScript", 
        "Swift", 
        "Bash", 
        "Batch"
    ],

    parse : function(script) {
        var errors = [];
        if (Framework.language == "Parsers") {
            // Framework is just a placeholder.  Do not implement.
        }
        else {

        }
        return errors;
    },

    setLanguageFromShebang : function(script) {
        var lines = script.split(/\r*\n/);
        var shebang = lines[0];
        if (shebang.includes("#include ")) {
            Framework.language = "C++";
            return;
        }
        if (shebang.includes("using ")) {
            Framework.language = "C#";
            return;
        }
        else {
            if (shebang.charAt(0) != "#" && shebang.charAt(1) != "!") {
                return;
            }
            var comps = shebang.split("/");
            if (comps.length < 1) {
                return;
            }
            var shebangLanguage = comps[comps.length - 1];
            Framework.languages.forEach(function(cursor) {
                if (cursor.toLowerCase().includes(shebangLanguage.toLowerCase().trim())) {
                    Framework.language = cursor;
                }
            });
        }
    }
}
