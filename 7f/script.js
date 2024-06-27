function temperaturaniOzgartirish(number,son) {
    if (son === 'C') {
        let celsiy = (number - 32) * 5 / 9;
        return `${Math.round(celsiy)}C`;
    } else if (unit === 'F') {
        let faranget = number * 9 / 5 + 32;
        return `${Math.round(faranget)}F`;
    } else {
        return ' "C" or "F".';
    }
}