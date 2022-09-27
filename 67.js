function addBinary(a, b) {

    let add = 0

    let i = a.length - 1
    let j = b.length - 1

    let res = ''


    while (i >= 0 || j >= 0 || add === 1) {
        const aNum = i >= 0 ? Number(a[i--]) : 0
        const bNum = j >= 0 ? Number(b[j--]) : 0

        const sum = aNum + bNum + add

        if (sum === 3) {
            add = 1
            res = `${1}${res}`
        } else if (sum === 2) {
            add = 1
            res = `${0}${res}`
        } else if (sum === 1) {
            add = 0
            res = `${1}${res}`
        } else {
            add = 0
            res = `${0}${res}`
        }

    }

    return res;
};