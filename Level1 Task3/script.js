const convertTemp = () =>{
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('unit_select');
    const valueTemp = unit_select.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) =>{
        let fehrenheit = ((cel * 9/5)+32).toFixed(1);
        return fehrenheit;
    }

    const fahToCel = (fah) =>{
        let celsius = ((fah-32)*5/9).toFixed(1);
        return celsius;
    }
    if(valueTemp == 'cel'){
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176;F";
    }
    else{
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176;C";
    }
}