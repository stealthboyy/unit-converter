function convertLength(){
    const lengthValue = parseFloat(document.getElementById('lengthValue').value);
    const lengthFrom = document.getElementById('lengthFrom').value;
    const lengthTo = document.getElementById('lengthTo').value;

    let result;

    // Length conversion factors (base unit: meters)
    const conversionRates =  {
        mm: 0.001,
        cm: 0.01,
        m: 1,
        km: 1000,
        in: 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        mi: 1609.34
    }
    if (!lengthValue || isNaN(lengthValue)) {
        alert("Please enter a valid number for the length to convert.");
        return;  // Exit the function if the input is invalid
    };


    // Convert input to meters first, then to the target unit.
    if (conversionRates[lengthFrom] && conversionRates[lengthTo]) {
        const valueInMeters = lengthValue * conversionRates[lengthFrom];
        result = valueInMeters / conversionRates[lengthTo];
    } else {
        result = "Unsupported conversion.";
    }

    // Display the result in the result section 
    document.getElementById('conversionResult').innerText = `${lengthValue} ${lengthFrom} = ${result} ${lengthTo}`;
    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
}

function convertWeight() {
    const weightValue =  parseFloat(document.getElementById('weightValue').value);
    const weightFrom = document.getElementById('weightFrom').value;
    const weightTo = document.getElementById('weightTo').value;

    let result;

    // Base unit --kg
    const conversionRates = {
        g : 1/1000,
        kg : 1 ,
        N: 1/9.81, 
        t : 1/0.001,
        lb : 1/2.20462 , 
    }
    if (!weightValue || isNaN(weightValue)) {
        alert("Please enter a valid number for the weight to convert.");
        return;  // Exits the function if the input is invalid
    };

    if (conversionRates[weightFrom] && conversionRates[weightTo]) {
        const valueInKilogram = weightValue * conversionRates[weightFrom]
        result = valueInKilogram / conversionRates[weightTo]
    }

    // Display the result in the result section 
    document.getElementById('conversionResult').innerText = `${weightValue} ${weightFrom} = ${result} ${weightTo}`;
    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
}




function resetLengthPage() {
    document.getElementById('lengthValue').value = ''

    document.getElementById('lengthFrom').value = 'mm';  // setting a default value
    document.getElementById('lengthTo').value = 'mm';    // Default value
    document.getElementById('inputSection').style.display = "block";
    document.getElementById('resultSection').style.display = "none";
}

    function resetWeightPage () {   
        document.getElementById('weightValue').value = ''
        document.getElementById('weightFrom').value = 'g';  // setting a default value
        document.getElementById('inputSection').style.display = "block";
        document.getElementById('resultSection').style.display = "none";

}

function resetTempPage () {   
    document.getElementById('tempValue').value = ''
    document.getElementById('tempFrom').value = '';  // setting a default value
    document.getElementById('inputSection').style.display = "block";
    document.getElementById('resultSection').style.display = "none";

}