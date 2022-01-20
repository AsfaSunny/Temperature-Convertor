
//selectedIndex:
//this is a property. And this property sets or returns the index of the selected
//option in a drop-down list.
//1.if the drop down list allows multiple selection it will only return the index of the first option selected.
//2.if no option is selected than the value will -1.


const calculateTemp = () => {
    const numTemp = document.getElementById('temp').value;
    // console.log(numTemp);

    const TempSelector = document.getElementById('temp_diff');
    const SelectIndex = temp_diff.options[TempSelector.selectedIndex].value; //watch carefully on the link of the page after selection submition
    //console.log(SelectIndex);


    const CelToFah = (cel) => {
        let Fah = Math.round((cel * 9/5) + 32);
        return Fah; //by return Fah first gone to CelToFah and than to result = CelToFah(numTemp);
    }

    const FahToCel = (fah) => {
        let Cel = Math.round((fah - 32) * 5/9);
        return Cel; //by return Cel first gone to FahToCel and than to result = FahToCel(numTemp);
    }


    let result;
    
    if(SelectIndex == 'cel') {
        result = CelToFah(numTemp); //argument numTemp pass to parameter (cel) of function CelToFah
        document.getElementById('result-container').innerHTML = `${result} Fahrenheit`;
    }else{
        result = FahToCel(numTemp); //same as before, argument numTemp pass to parameter (fah) of function FahToCel
        document.getElementById('result-container').innerHTML = `${result} Celsius`;
    }
}