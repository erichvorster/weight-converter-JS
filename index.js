document.getElementById('output').style.visibility = 'hidden';


input = document.getElementById('kg-input').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let kilos = e.target.value;
    document.getElementById('gramsOutput').innerHTML = kilos*1000;
    document.getElementById('poundsOutput').innerHTML = kilos*2.20462;
    document.getElementById('ozOutput').innerHTML = kilos*35.274;
})