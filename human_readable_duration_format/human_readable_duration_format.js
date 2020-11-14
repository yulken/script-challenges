
function formatDuration (seconds) {
    if (seconds == 0){
      return "now";
    }
    let time = []
    let result_string = "";
    time[0] = calculateTime(seconds, 60 * 60 * 24 * 365)
    seconds = seconds - (60 * 60 * 24 * 365 * time[0])
    time[1] = calculateTime(seconds, 60 * 60 * 24)
    seconds = seconds - (60 * 60 * 24 * time[1])
    time[2] = calculateTime(seconds, 60 * 60)
    seconds = seconds - (60 * 60 * time[2])
    time[3] = calculateTime(seconds, 60)
    seconds = seconds - (60 * time[3])
    time[4] = seconds

    nonZeroElements = time.reduce((total, element) => (element) ? total + 1 : total, 0)

    let i = 0
    time.map(element => {
        if (element != 0){
            if (nonZeroElements >= 3){
                result_string += formatString(time[i], i) + ', ';
            }
            if (nonZeroElements == 2){
                result_string += formatString(time[i], i) + ' and ';
            }
            if (nonZeroElements == 1) {
                result_string += formatString(time[i], i);
            }
            nonZeroElements--;
        }
        i++
    });
    return result_string;
}

const calculateTime = (sec, unit) => (sec >= unit) ?  Math.floor(sec/unit) : 0

function formatString(time, index){
    let units = ['year', 'day', 'hour', 'minute', 'second']
    let str = `${time} ${units[index]}`
    if (time > 1) str += 's';
    return str
}
