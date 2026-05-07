function check() {
    var wasborn = parseInt(document.getElementById('birth').value);
    var res = document.getElementById('result');
    var clientAge = document.getElementById('age');

    if(isNaN(wasborn)){
        res.textContent = 'Type only numbers';
        res.style.color = 'red';
        return;
    }
    const thisYear = new Date().getFullYear();
    const age = thisYear - wasborn;

    if(age < 18){
        res.textContent = 'Sai fora pai!';
        res.style.color = 'red';
        clientAge.textContent = `Your age is ${age}`;
        document.getElementById('v1').style.display = 'block';
        document.getElementById('v2').style.display = 'none';

    } else {
        res.textContent = 'Pode entrar filho!';
        res.style.color = 'green';
        clientAge.textContent = `Your age is ${age}`;
        document.getElementById('v1').style.display = 'none';
        document.getElementById('v2').style.display = 'block';
    }
}