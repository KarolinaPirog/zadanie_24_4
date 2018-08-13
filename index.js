const formatDate = (secondsOS) => {
    if (secondsOS >= 0) { 
        var hours = Math.floor((secondsOS/3600)).toFixed(0);
        var minutes = Math.floor((secondsOS - (hours * 3600))/60).toFixed(0);
        var seconds = Math.floor(secondsOS - (hours * 3600) - (minutes*60)).toFixed(0);

        if (hours == 0) {
            if (minutes == 0) {
                return seconds + "s";
            } else {
                return minutes + "m " + seconds + "s";
            };
        } else {
            return hours + "h " + minutes + "m " + seconds + "s"; 
        };
    } else {
        return "0s";
    };
};
  
  module.exports = formatDate;