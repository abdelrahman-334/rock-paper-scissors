
   let plyrWins=0
   cpuWins=0
   draw=0;
   function getComputerChoice()
    {
        let choice=Math.floor(Math.random()*3);
        if(choice==0)
        {
            return "rock";
        }
        else if (choice==1) 
        {
            return "paper";
        }
        else
        {
            return "scissors";
        }
    }
    function round(choice)
    {
        //choice=choice.toLowerCase();
        // rock=0 paper=1 scissors=2
        let cpuChoice=getComputerChoice();
        if(choice!=cpuChoice)
        {
            if(choice=="rock")
            {
                if(cpuChoice=="paper")
                {
                    div.textContent=`you lose..${cpuChoice} beats ${choice}`;
                    return 2; 
                }
                else
                {
                    div.textContent=`you win! ${choice} beats ${cpuChoice}`;
                    return 1;
                }
            }
            if(choice=="paper")
            {
                if(cpuChoice=="scissors")
                {
                    div.textContent=`you lose..${cpuChoice} beats ${choice}`;
                    return 2; 
                }
                else
                {
                    div.textContent=`you win! ${choice} beats ${cpuChoice}`;
                    return 1;
                }
            }

           if(choice=="scissors")
            {
                if(cpuChoice=="rock")
                {
                    div.textContent=`"you lose..${cpuChoice} beats ${choice}`;
                    return 2; 
                }
                else
                {
                    div.textContent=`"you win! ${choice} beats ${cpuChoice}`;
                    return 1;
                }
            }
        }
        else
        {
            div.textContent=`draw: ${choice} vs ${cpuChoice}`;
            return 0;
        }
    }
    function game(holder)
    {
     
        if(holder==1)
        {
            plyrWins++;
            console.log(plyrWins);
            div2.textContent=`player:${plyrWins}/ cpu:${cpuWins}`;
        }
        else if(holder==2)
        {
            cpuWins++;
            div2.textContent=`player:${plyrWins}/ cpu:${cpuWins}`;
        
        }
        else
        {
            draw++;
            div2.textContent=`player:${plyrWins}/ cpu:${cpuWins}`;
        }
        if(plyrWins==5 || cpuWins==5)
        {
            plyrWins=0;
            cpuWins=0;
            draw=0;
            if(plyrWins>cpuWins)
            {
            div2.textContent='you win the game';
            }
            else
            {
            div2.textContent='you lose the game';
            }
        }
    }

const div= document.querySelector('#results');
const div2= document.querySelector('#score')
const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissors=document.querySelector('#scissors');
rock.addEventListener('click',function(){
    game(round('rock'));
});
paper.addEventListener('click',function(){
    game(round('paper'));
});
scissors.addEventListener('click',function(){
    game(round('scissors'));
});


function removeText()
{
    this.textContent=''
}
