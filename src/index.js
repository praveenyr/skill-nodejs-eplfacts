'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.4b105c47-9ed4-4aee-a637-d843e12f1d10";

var SKILL_NAME = "English Premier League(EPL) facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me an EPL fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Mario Balotelli’s only assist in the Premier League, was for Sergio Aguero’s title-winning goal vs QPR.",
    "Two players have scored Premier League penalties with both feet, Bobby Zamora and Obafemi Martins.",
    "Ryan Giggs has been substituted more times than any other player, which is one hundred and thirty four.",
    "Wayne Rooney, Gareth Bale and Kevin Davies are the only players, to score, assist and score an own goal in a single Premier League game.",
    "Alan Shearer has missed the most Premier League penalties, eleven. He has also scored the most, fifty six.",
    "Twenty fifteen, sixteen season, was the first time West Ham had recorded a positive goal difference in a top-flight season, since nineteen eighty five eighty six.",
    "James Milner has scored in forty seven different Premier League games. And hasn't lost any of them, which is a record.",
    "Only three players born after the Premier League began in August nineteen ninety two, have scored Premier League hat-tricks: Raheem Sterling, Harry Kane and Romelu Lukaku.",
    "The only person born before nineteen sixty, to score a Premier League hat-trick, is Gordan Strachan.",
    "In the twenty fourteen, fifteen season, Leister City spent longest at the bottom of the table without being relegated than any side in Premier League history. They were bottom for hundred and forty days.",
    "Peter Crouch has scored fifty headed goals, which is more than sixteen of the teams, who have played in the Premier League.",
    "Former Liverpool player, Nuri Saahin, has played the most Premier League games of any player, to be substituted off in all of their PL appearances. He played 7 Premier League games.",
    "Former Liverpool player, Iago Aspas took more corners than he had shots in the Premier League.",
    "In the nineteen ninety seven ninety eight season, Andy Roberts played 37 games in the Premier League and four of them came against Arsenal. Two for Palace, and two for Wimbledon.",
    "Terry Connor, former Wolves boss, is the only manager to take charge of more than ten Premier League games and not win a single one.",
    "Only two players have ever scored a hat-trick of headers in a Premier League match: Duncan Ferguson for Everton and Salomon Rondon for West Brom.",
    "In the twenty fifteen sixteen season, Hull became only the third team to be top of the Premier League and be relegated in the same season. The previous two were Charlton in ninteen ninety eight, ninety nine, and Bolton in twenty eleven, twelve season.",
    "Of all the players to take ten or more spot kicks in the Premier League, the Ivorian Yaya Toure is the only one to have a hundred percent success rate.",
    "Wayne Rooney and Matt Le Tissier, are the only PL players to score a hat-trick entirely from set pieces.",
    "The Cameroonian defender, Sebatien Bassong has been relegated a record four times with three different Premier League teams. Newcastle in twenty O nine, Wolves in twenty twelve, and Norwich in twenty fourteen as well as twenty sixteen.",
    "Jamie Carragher netted just three goals during his lengthy career at Liverpool. That’s the same amount of own goals, he accidentally ended up scoring for Spurs.",
    "Les Ferdinand and Emile Heskey are the only players to reach the hundred goal mark in the Premier League without scoring from the penalty spot.",
    "While forty nine clubs have competed since the inception of the Premier League in nineteen ninety two, only six clubs have won the title. Manchester United, Chelsea, Arsenal, Manchester City, Leister and Blackburn.",
    "Manchester United have won the Premier League title a record thirteen times, followed by Chelsea five, Arsenal three, Manchester City two, and Leister and Blackburn one.",
    "The English Premier League was formed as the FA Premier League on twentieth February nineteen ninety two, following the decision of clubs in the Football League First Division to break away from the Football League, which was founded in eighteen eighty eight.",
    "The English Premier League is the most watched sports league in the world, broadcast in two twelve territories to six forty three million homes, and a potential TV audience of four point seven billion people.",
    "The Premier League held its first season in nineteen ninety two ninety three. It was composed of twenty two clubs for that season.",
    "The first Premier League goal was scored by Brian Deane of Sheffield United, in a two one win against Manchester United.",
    "Arsenal are the only Premier League team to go an entire season unbeaten. They achieved the feat in twenty O three, O four season and the team were crowned 'Invincibles'.",
    "Arsenal hold the record of twenty consecutive finishes in the Premier League top four, until the twenty sixteen seventeen season, when they finished fifth.",
    "The Premier League season runs from August to May, with teams playing thirty eight matches each totalling three hundred and eighty matches in the season.",
    "In the Premier League, teams receive three points for a win and one point for a draw. No points are awarded for a loss. Teams are ranked by total points, then goal difference, and then goals scored.If still equal, teams are deemed to occupy the same position.If there is a tie for the championship, for relegation, or for qualification to other competitions, a play-off match at a neutral venue decides rank.",
    "The three lowest placed teams in the Premier League are relegated into the English Football League Championship, and the top two teams from the Championship, together with the winner of playoffs involving the third to sixth placed Championship clubs, are promoted in their place.",
    "Each season, the top four teams in the Premier League qualify for the Youefa Champions League, with the top three teams directly entering the group stage. The fourth placed team enters the Champions League at the play-off round for non-champions and must win a two-legged knockout tie in order to enter the group stage.",
    "Fourteen Davids and Eleven James' appeared on the pitch during the twenty ten, eleven Premier League campaign, but ironically David James wasn’t one of them.",
    "Alan Shearer holds the record for the most goals scored in the Premier League, which is two sixty.",
    "Theorry Onry holds the record for the most goals scored per match in the Premier League, which is point six eight.",
    "Manchester United's home ground, Old Trafford is the biggest in the Premier league with capacity for over seventy five thousand spectators.",
    "Ryan Giggs holds the record for the most appearances in the Premier League, with six thirty two.",
    "Ryan Giggs holds the record for the most assists in the Premier League, with one sixty two.",
    "Petr Check holds the record for the most clean sheets in the Premier League as of July twenty seventeen, with one ninety.",
    "Manchester United hold the record for the most consecutive title wins, which is three. They've achieved the feat twice, the first in ninety eight ninety nine, ninety nine two thousand, two thousand two thousand one.And the second consectutive title wins O six O seven, O seven O eight, O eight O nine.",
    "The biggest title winning margin was eighteen points in the nineteen ninety nine, two thousand season, when Manchester United finished first on ninety one pts ahead of Arsenal on seventy three points.",
    "The lowest title winning margin was zero points in the twenty eleven twelve season when Manchester City and Manchester United both finished on eighty nine points and City won the title on a superior goal difference of sixty four to fifty six.",
    "Chelsea hold the record of most wins in a season with thirty wins. They achieved the feat in the twenty sixteen seventeen season when they also won the title.",
    "Fewest wins in a season was achieved by Derby County in twenty O seven O eight season when they won just one game.",
    "The record for the most home wins in a season is eighteen, and has been achieved thrice. Chelsea in two thousand O five O six, Manchester United in twenty ten, eleven and again in the twenty eleven, twelve season.",
    "Chelsea hold the record for the most away wins in a season. They won fifteen away games in the twenty O five, O six season.",
    "Arsenal hold the record for most consecutive wins in Premier League. They won fourteen Premier League games between tenth february twenty O 2, and twenty fourth August twenty O two.",
    "The record for the most wins in a single season is thirteen and has been achieved twice in Premier League history. Arsenal in twenty O two, O three season and Chelsea in the twenty sixteen, seventeen season.",
    "Derby County went the longest without a recording a win in Premier League. They couldnt register a win for thirty two consecutive games in the twenty O seven, O eight season.",
    "Manchester City hold the record for the most consecutive home wins. The team won twenty straight home games between twentieth March twenty eleven, and twenty first March twenty twelve.",
    "Chelsea hold the record for the most consecutive away wins. The team won eleven straight away games between sixth April twenty O eight, and seventh December twenty O eight.",
    "Arsenal hold the record for the longest unbeaten in the Premier League. The team went forty nine games unbeaten between seventh May twenty O three, and twenty fourth October twenty O four.",
    "Arsenal hold the record for the fewest away losses in a season. They didnt lose a single away game in twenty O one, O two season as well as the twenty O three, O four season.",
    "Chelsea accumulated the most points in a Premier League season, when they won the title in twenty O four, O five season, with ninety five points.",
    "The oldest player to appear in a Premier League match is John Burridge, at forty three years and hundred and sixty two days, for Manchester City against Queens Park Rangers, on fourtheenth May nineteen ninety five.",
    "The youngest player to appear in a Premier League match is Matthew Briggs, at sixteen years and sixty five days, for Fulham against Middlesbrough, on thirteenth May two thousand seven.",
    "Brad Friedel holds the record for the most consecutive Premier League appearances with three ten.",
    "Ryan Giggs of Manchester United holds the record for the most seasons appeared, with twenty two."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
