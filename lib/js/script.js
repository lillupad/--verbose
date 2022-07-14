let tcount = 1;
let wcount;

const target = document.getElementById('target');
const counter = document.getElementById('wordcount');
const typing = document.getElementById('typing');

function setwordcount () 
{
    tcount = prompt ('set a target word count');
    try 
    {
        if (isNaN (tcount)) throw 'NaNError'; else tcount = parseInt(tcount);
        console.log (`--verbose: target word count set to ${tcount}`);
        target.innerText = `target: ${tcount}`;
    } catch (e) 
    {
        if (e == 'NaNError')
        {
            alert('target word count must be a number');
            setwordcount();
        }
    }
}

typing.addEventListener ("keydown", function() 
{
    contenttext = typing.innerText.replace (/\n/g, " ")
    words = contenttext.split (" ");
    wcount = words.length;
    if (wcount >= tcount)
    {
        counter.style.color = "#18F2B2";
    } else if (wcount < tcount)
    {
        counter.style.color = "#FF6B6B";
    }
    counter.innerText = wcount
});