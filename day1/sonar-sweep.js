const test = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

const sonarSweep = (value) => {
    return value.map((curr, idx, arr) => {return arr[idx-1] < curr ? 1 : 0}).reduce((prev, cur) => {return prev + cur})
}

console.log(sonarSweep(test))