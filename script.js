const cards = document.querySelectorAll(".card");

let  matchedCard = 0
let cardOne , cardTwo;
let disableDeck = false;

function flipcard(e){// getting user clicked card
    let clickedCard = e.target;
    if(clickedCard !== cardOne && !disableDeck){
        clickedCard.classList.add("flip");
        if(!cardOne){
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector("img").src;
        let cardTwoImg = cardTwo.querySelector("img").src;
        console.log(cardOneImg,cardTwoImg)
        matchCards(cardOneImg,cardTwoImg);
    }

}

function matchCards(img1,img2){
    if(img1 === img2){
        matchedCard++;
        if(matchedCard == 8){
            setTimeout(()=>{
                return shuffleCard();
            },1000);
            
        }
        cardOne.removeEventListener("click", flipcard);
        cardTwo.removeEventListener("click", flipcard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    console.log("here")
    //if two cards not matched
    setTimeout(()=>{
        //adding shake class to both card after 400ms
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");

    },400);

    setTimeout(()=>{
        //remove shake and flip  class to both card after 400ms
        cardOne.classList.remove("shake","flip");
        cardTwo.classList.remove("shake","flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    },1200);


}   

function shuffleCard(){
    matchedCard = 0;
    cardOne = cardTwo = "";
    disableDeck = false;
    let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
    arr.sort(()=> Math.random()>0.5?1:-1);

    cards.forEach((card,index) =>{ 
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = "images/img-"+arr[index]+".png";
        card.addEventListener("click",flipcard);
    });
}
shuffleCard()
cards.forEach(card =>{ // adding click event to all cards
    card.addEventListener("click",flipcard);
});