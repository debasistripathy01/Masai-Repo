//---------------------- Power of 2 

function check(num, N) {
    if (checkAgain(num, N)) console.log("True");
    else console.log("False");
}


function checkAgain(num, N) {
    if (num === 0) return false;
    while (num !== 1) {
        if (num % 2 !== 0) return false;
        num = num / 2;
    }
    return true;
}

//------------------------ Multiply all the numbers ------------//

function check(len, arr1, arr2) {
    // console.log(len, arr1,arr2);
    var mul1 = 1;
    var mul2 = 1;
    for (var i = 0; i < len; i++) {

        mul1 = mul1 * arr1[i];
        mul2 = mul2 * arr2[i];

    }
    console.log(mul1 * mul2);
}

// ---------------------- Spirally traversal ---------------------//

function spirallyTraversingAMatrix(N, matrix) {
    //write code here

    var top = 0;
    var bottom = N - 1;
    var left = 0;
    var right = N - 1;
    var size = N * N;
    var arr = [];

    while (arr.length < size) {
        for (var i = left; i <= right; i++) {
            arr.push(matrix[top][i]); // 00 01 02 03
        }
        top++;
        for (var i = top; i <= bottom; i++) {
            arr.push(matrix[i][right]); // 03 13 23 33
        }
        right--;
        for (var j = right; j >= left; j-- && arr.length < size) {
            arr.push(matrix[bottom][j]); // 30 31 32 33
        }
        bottom--;
        for (var i = bottom; i >= top; i-- && arr.length < size) {
            arr.push(matrix[i][left]);
        }
        left++;
    }

    console.log(arr.join(" "));
    return arr;

}


//-------------------------- Swastika and Sum ---------------------//

function check(arr, N, M) {

    var a = first_sum(arr, N, M);
    var b = second_sum(arr, N, M);
    console.log(Math.abs(a - b));

}

function first_sum(arr, N, M) {
    var n = N;
    var m = M;
    var sum = 0;
    for (var i = 0; i <= Math.floor(n / 2); i++) {
        sum = sum + arr[i][0];
    }
    for (var i = 1; i < m; i++) {
        sum += arr[Math.floor(n / 2)][i];
    }
    for (var i = Math.floor(n / 2) + 1; i < n; i++) {
        sum += arr[i][m - 1];
    }
    //console.log(sum);
    return sum;
}

function second_sum(arr, N, M) {
    var n = Math.floor(N);
    var m = M;
    var sum1 = 0;
    for (i = 0; i <= Math.floor(m / 2); i++) {
        sum1 += arr[n - 1][i];
    }
    for (i = n - 2; i >= 0; i--) {
        sum1 += arr[i][Math.floor(m / 2)];
    }
    for (i = Math.floor(m / 2) + 1; i < m; i++) {
        sum1 += arr[0][i];
    }
    //console.log(sum1);
    return sum1;
}


// ------------------ Anagram detection ------------------------------//

function check(String_a, String_b) {
    map1 = generateKeyValuePair(a) //key - value pair is generated for the string a
    map2 = generateKeyValuePair(b) //key - value pair is generated for the string a
    if (checkEquality(map1, map2) == true) // this is to check if the two key value pairs are equal or not
        return true
    else
        return false
}

// ------------------- Reverse the array part-2 ------------------------//

function check(N, arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        swap(arr, left, right);
        left++;
        right--;
    }
    console.log(arr.join(" "));
}

function swap(arr, left, right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}


//