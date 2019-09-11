var SR = {
    __SITE_TITLE__ : "Syntax Checker",
    __LOGO_TEXT__ : "Syntax-Checker",
    __COPYRIGHT_NAME__ : "Abel Gancsos Productions"
}

var Common = {
    getCopyrightYear : function() {
        var fullDate = new Date();
        return fullDate.getFullYear();    
    },
    numberWithCommas : function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    findGetParameter : function(parameterName) {
        var result = null,
        tmp = [];
        location.search.substr(1).split("&").forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
        return result;
    }
}
