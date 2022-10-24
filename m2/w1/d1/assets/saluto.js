var data = new Date();
var ora = data.getHours();

saluto()
function saluto(){
    if (ora > 6, ora < 14){
        document.getElementById('saluto').innerHTML = 'Buongiorno!';
    } else if (ora > 14, ora < 18){
        document.getElementById('saluto').innerHTML = 'Buon Pomeriggio!';
    }else if (ora > 18, ora < 23){
        document.getElementById('saluto').innerHTML = 'Buonasera!';
    } else{
        document.getElementById('saluto').innerHTML = 'Buona Notte!';
    }
}