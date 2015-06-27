
module.exports = function(variable) {
       var query = document.location.hash.split('?')[1];
       var vars;

       if (!query){return(false);}

       vars= query.split("&");

       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }

       return(false);
};
