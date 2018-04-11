/**
 * 一维数组排列与组合
 */

 var ArrCount = {};

 ArrCount['C'] = C;
 ArrCount['A'] = A;
 
//组合
function C(arr, num){
    var r=[];
    (function f(t,a,n){
        if (n==0) return r.push(t);
        for (var i=0,l=a.length; i<=l-n; i++){
            f(t.concat(a[i]), a.slice(i+1), n-1);
        }
    })([],arr,num);
    return r;
}

//排列
function A(arr, num){
    var r=[];
    (function f(t,a,n){
        if (n==0) return r.push(t);
        for (var i=0,l=a.length; i<l; i++){
            f(t.concat(a[i]), a.slice(0,i).concat(a.slice(i+1)), n-1);
        }
    })([],arr,num);
    return r;
}

/**
 * 二维数组
 * cartesian([0,1,2],[2,3,4])
 */
function cartesianES6 (...lists) {
    return lists
        .map(list => list.map(item => [item]))
        .reduce((listsA, listsB) =>
        listsA.reduce((list, listA) =>
            list.concat(
            listsB.map(listB => listA.concat(listB))
            ), []
        )
        )
}

function cartesian() {
    for (var _len = arguments.length, lists = Array(_len), _key = 0; _key < _len; _key++) {
        lists[_key] = arguments[_key];
    }

    return lists.map(function (list) {
        return list.map(function (item) {
            return [item];
        });
    }).reduce(function (listsA, listsB) {
        return listsA.reduce(function (list, listA) {
            return list.concat(listsB.map(function (listB) {
                return listA.concat(listB);
            }));
        }, []);
    });
}
