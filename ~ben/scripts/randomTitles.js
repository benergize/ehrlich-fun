/*__________________________________________________________________________________
//
//	FILENAME: randomTitles.txt
//	CREATED: 12/11/17
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Randomize the play title!
//
//
*/


var options = ["JABI","SNACK","JANET","CAB","BEAST","JACK","CAKE","BAT","KITE","BEAN","STICK","BEAT","JAB","NICK","SANTA","TIKE","JAACKET"];

play.name = "A " + options[Math.floor(Math.random() * options.length)] + " IN A " + options[Math.floor(Math.random() * options.length)]; 


/*
katjabenisaac

K A T J A B E N I S A A C

EAT A JABI SNACK

JANET K IS A CAB A

A BEAST IN A JACK

A CAKE IS AN J BAT

A KITE NABS A JAAC 

A BEAN, A STICK, A J

KATE J BANS A CIA

ACK JAN IS A BEAT

EAT NICK AS A JAB

BACK EAST IN A JA

A BI SANTA C. JAKE

AS CAN A TIKE JAB 

ABS IN A JAACKET
*/