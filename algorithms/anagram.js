/**
 * 
 * @param String str1 
 * @param String str2 
 * @returns Boolean
 */
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const chars1 = {}, chars2 = {};

    for (let val of str1) {
        chars1[val] = (chars1[val] || 0) + 1;
    }

    for (let val of str2) {
        chars2[val] = (chars2[val] || 0) + 1;
    }

    for (let key in chars1) {
        if (!chars2[key]) {
            return false;
        }

        if (chars1[key] !== chars2[key]) {
            return false;
        }
    }


    return true;
}

// simple test function :)
function test(fn)
{
    return (str1, str2, expected) => {
        const result = fn(str1, str2);

        if(result === expected){
            console.log('Passed!');
        }else{
            console.log(`Failed: expected ${expected}, got ${result}`);
        }
    }
}

testAnagram = test(validAnagram);

testAnagram('', '', true);
testAnagram('aaz', 'zza', false);
testAnagram('anagram', 'nagaram', true);
testAnagram("rat", "car", false);
testAnagram('awesome', 'awesom', false);
testAnagram('amanaplanacanalpanama', 'acanalmanplanpamana', false);
testAnagram('qwerty', 'qeywrt', true);
testAnagram('texttwisttime', 'timetwisttext', true);