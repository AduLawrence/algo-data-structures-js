/**
 * 
 * @param Array arr1 
 * @param Array arr2 
 * @returns Array
 */
function merge(arr1, arr2)
{
    let i = 0;
    let j = 0;
    const result = [];

    while(i<arr1.length && j<arr2.length)
    {
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i ++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function sort(arr)
{
    if(arr.length <= 1){
        return arr;
    }

    let middle = Math.floor(arr.length/2);
    
    let left = sort(arr.splice(0, middle));
    let right = sort(arr);

    return merge(left, right);
}


console.log(sort([3,4,6,100,3,4,9,7,2,1,17,23,22,98,94,57]));