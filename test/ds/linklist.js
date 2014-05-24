/**
 * Created by XadillaX on 2014/5/24.
 */
var Linklist = require("../../").ds.Linklist;

var linklist = new Linklist();
linklist.push_back(1);
linklist.push_back(2);
linklist.push_back("abc");
linklist.push_back(new Object());
linklist.push_back(null);
linklist.push_back(undefined);
linklist.push_back(NaN);
linklist.push_back(12.3);
linklist.push_back(true);
linklist.push_back(new Date());
linklist.push_front(new Linklist.LinklistNode(false));

linklist.insert(0, "I'm the first queue jumper!");
linklist.insert(linklist.length, "I'm the second queue jumper!");
linklist.insert(linklist.length - 1, "I'm the third queue jumper!");

console.log("popping front: " + linklist.pop_front());
console.log("popping back: " + linklist.pop_back());
console.log("removing the 4th element: " + linklist.removeAt(4));

console.log(linklist);
