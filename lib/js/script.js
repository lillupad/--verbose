let count;

function setwordcount () 
{
    count = prompt ('set a target word count');
    try 
    {
        if (isNaN (count)) throw 'NaNError'; else count = parseInt(count);
        console.log (`--verbose: target word count set to ${count}`);
        target.innerText = `target: ${count}`;
    } catch (e) 
    {
        if (e == 'NaNError')
        {
            alert('target word count must be a number');
            setwordcount();
        }
    }
}