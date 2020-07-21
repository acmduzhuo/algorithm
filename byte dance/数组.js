var arr = [1, 2, 3, 4, 5];
var target = 7;
function f(arr, target) {
    for(let i = 0;i < arr.length-1;i++){
        for(let j = i+1;j < arr.length;j++){
            if(arr[i] + arr[j] === target){
                console.log(i, j);
                break;
            }
        }
    }
}
f(arr, target);

function HashMap() {
    this.length = 0;
    this.obj = new Object();

    HashMap.prototype.isEmpty = function () {
        return this.length === 0;
    };

    HashMap.prototype.containsKey = function(key){
        return (key in this.obj);
    };

    HashMap.prototype.containsValue = function(value){
        for(var key in this.obj){
            if(this.obj[key] === value){
                return true;
            }
        }
        return false;
    };

    HashMap.prototype.indexOfValue = function(value){
        for(var key in this.obj){
            if(this.obj[key] === value){
                return Number(key);
            }
        }
        return null;
    };

    HashMap.prototype.put = function(key, value){
        if(!this.containsKey(key)){
            this.length++;
        }
        this.obj[key] = value;
    };
}
var hashMap = new HashMap();
for(let i = 0;i < arr.length;i++){
    hashMap.put(i, arr[i]);
}
for (let i=0;i<hashMap.length;i++){
    //console.log("hashMap.obj[i] = ", hashMap.obj[i]);
    var previous = target-hashMap.obj[i];
    //console.log("hashMap[i] = " + hashMap.obj[i]);
    //console.log("previous = " + previous);
    if(hashMap.containsValue(previous)){
        console.log(i, hashMap.indexOfValue(previous));
    }
}
