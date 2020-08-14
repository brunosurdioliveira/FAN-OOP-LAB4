// Create a set and map to save the info
let dataSet = new Set();
let dataMap = new Map();

// *************************************************************
// event handler is shared by the pulldown and checkbox controls
// to ensure that the only "Ontario" customers are members
function testMemberProvince() {
    let ref = $gel("selProvinces");
    let selectedProv = ref.options[ref.selectedIndex].text;
        
    if ($gel("chkMember").checked && selectedProv !== "Ontario") {
        alert("Only Ontario Customers are able to be members");
        $gel("chkMember").checked = false;
    }
}

// ****************************************************
// event handler which is attached to the submit button
// tests all the text boxes for valid input
function submit() {
    testEmpty("txtFirst");
    testEmpty("txtLast");
    testEmpty("txtAddress");
    testEmpty("txtCity");
    testEmpty("txtPostal");
    testEmpty("txtPhone");

    // Add data to dataSet - using .add method 
    dataSet.add($gel("txtFirst").value);
    dataSet.add($gel("txtLast").value);
    dataSet.add($gel("txtAddress").value);
    dataSet.add($gel("txtCity").value);
    dataSet.add($gel("selProvinces").value);
    dataSet.add($gel("txtPostal").value);
    dataSet.add($gel("txtPhone").value);
    dataSet.add($gel("chkMember").checked);

    // Add data to dataMap - using .set method
    dataMap.set("txtFirst", $gel("txtFirst").value);
    dataMap.set("txtLast", $gel("txtLast").value);
    dataMap.set("txtAddress", $gel("txtAddress").value);
    dataMap.set("txtCity", $gel("txtCity").value);
    dataMap.set("selProvinces", $gel("selProvinces").value);
    dataMap.set("txtPostal", $gel("txtPostal").value);
    dataMap.set("txtPhone", $gel("txtPhone").value);
    dataMap.set("chkMember", $gel("chkMember").checked);

    // Call the functions dumpSet() and dumpMap()
    dumpSet(dataSet);
    dumpMap(dataMap);
}

// Function dumpSet(dataSet) - print out to the console the values of the set
function dumpSet(dataSet) {
        dataSet.forEach(element => {
            console.log(element);
        });
}

// Function dumpMap(dataSet) - print out to the console the keys and values of the map
function dumpMap(dataMap){
    for (let [key, value] of dataMap) {
          console.log(key + " = " + value);
    }
}

// *********************************************
// helper function is used to test each text box
// to ensure that something was entered
function testEmpty(id) {
    if ($gel(id).value === "") {
        $gel(id).style.backgroundColor = "pink";
    }
    else {
        $gel(id).style.backgroundColor = "white";
    }
}

// *********************************************************************
// helper function serves as a "wrapper" around document.getElementById
// the only benefit to using this function is to reduce typing elsewhere 
function $gel(id) {
    return document.getElementById(id);
}