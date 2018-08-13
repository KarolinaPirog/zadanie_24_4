const formatDate = (secondsOS) => {
    if (secondsOS >= 0) { 
        var hours = Math.floor((secondsOS/3600)).toFixed(0);
        var minutes = Math.floor((secondsOS - (hours * 3600))/60).toFixed(0);
        var seconds = Math.floor(secondsOS - (hours * 3600) - (minutes*60)).toFixed(0);

        if (hours == 0) {
            if (minutes == 0) {
                return seconds + " sec.";
            } else {
                return minutes + " min. " + seconds + " sec.";
            };
        } else {
            return hours + " h. " + minutes + " min. " + seconds + " sec."; 
        };
    } else {
        return "Value should be greater than 0.";
    };
};
  
  module.exports = formatDate;