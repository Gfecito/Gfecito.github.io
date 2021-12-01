const p0 = `
<span class="expand_text">Salut! Je m'appelle Santiago et je suis né et j'ai grandi au <span style="color: crimson; font-size: 1.25em">Mexique</span></span>, 
ma mère a eu ma sœur et moi le privilège d'aller dans des écoles chics et d'apprendre 
l'anglais. J'ai ensuite eu la chance d'apprendre le français dans un autre endroit - 
encore plus chic - et d'obtenir plusieurs bourses pour étudier ce que j'aime le plus 
dans la belle terre des érables du Canada.
<br><br>
J'essaie de devenir fiable et compétent, de pouvoir redonner aux gens qui m'ont poussé
vers l'avant.
`;
const p1 = `
<span class="expand_text">Je suis actuellement</span> étudiant en deuxième année 
et aide-enseignante à l'Université de Montréal, au sein du Département d'informatique 
et de recherche opérationnelle (DIRO). Cela a été un peu étrange de commencer mes 
études pendant la pandémie, mais les défis uniques qui l'ont accompagné m'ont appris 
des choses auxquelles je ne m'attendais pas.
`;
const p2 = `
<span class="expand_text">J'adore</span> jouer de la guitare électrique ; 
lecture - en particulier des sujets en dehors de mon domaine ; 
J'ai une obsession étrange pour l'eau et tous ses sports, spécialement 
ceux pour lesquels je suis nul. Comme ramer avec l'équipe de l'UdeM, 
c'est assez amusant de crier de manière synchrone avec une bande d'étrangers 
charismatiques tout en essayant désespérément de ne pas basculer. <br>
Gagner aussi - gagner c'est le fun et une bonne excuse pour hurler encore plus.
`;
const p3 = `
<span class="expand_text">J'aime beaucoup enseigner</span> et communiquer la science;
J'ai rencontré toutes sortes de personnes tout au long de ma vie et nos différents
goûts, talents, expériences, parcours, handicaps et défis m'ont appris plus que 
je ne pourrais jamais rembourser. J'ai l'impression qu'en enseignant, je paie juste
un peu de cette dette.

`;

const library = `
<div id="libHeader">
Et tu me diras qui suis-je
</div>
<div class="bookShelfs">
    <div class="bookShelf">
        <div class="bookRow">
        <div class="book" name="thinkingFastAndSlow" id="TFS"
            style="background-image: url(Images/BookCovers/thinkingFastAndSlow.jpg );">

        </div>
        <div class="book" name="manSearchForMeaning" id="MSM"
            style="background-image: url(Images/BookCovers/manSearchForMeaning.jpg );">

        </div>
        <div class="book" name="gunsGermsAndSteel" id="GGS"
            style="background-image: url(Images/BookCovers/gunsGermsAndSteel.jpg );">

        </div>
        <div class="book" name="theTyrannyOfMerit" id="TOM"
            style="background-image: url(Images/BookCovers/theTyrannyOfMerit.jpg );">

        </div>
        <div class="book" name="aHundreadYearsOfSolitude" id="HYS"
            style="background-image: url(Images/BookCovers/aHundreadYearsOfSolitude.jpg );">

        </div>
        </div>
        <div class="shelf"></div>
    </div>
    <div class="bookShelf">
        <div class="bookRow">
        <div class="book" name="theJakartaMethod" id="TJM"
            style="background-image: url(Images/BookCovers/theJakartaMethod.jpg );">

        </div>
        <div class="book" name="crimeAndPunishment" id="CNP"
            style="background-image: url(Images/BookCovers/crimeAndPunishment.jpg );">

        </div>
        <div class="book" name="braveNewWorld" id="BNW"
            style="background-image: url(Images/BookCovers/braveNewWorld.jpg );">

        </div>
        <div class="book" name="fahrenheit451" id="FAH"
            style="background-image: url(Images/BookCovers/fahrenheit451.jpg );">

        </div>
        <div class="book" name="theFeastOfTheGoat" id="FTG"
            style="background-image: url(Images/BookCovers/theFeastOfTheGoat.jpg );">

        </div>
        </div>
        <div class="shelf"></div>
    </div>
    <div class="bookShelf">
        <div class="bookRow">
        <div class="book" name="anElegantDefense" id="EDF"
            style="background-image: url(Images/BookCovers/anElegantDefense.jpg );">

        </div>
        <div class="book" name="madameBovary" id="MAB"
            style="background-image: url(Images/BookCovers/madameBovary.jpg );">

        </div>
        <div class="book" name="1984" id="NIN"
            style="background-image: url(Images/BookCovers/1984.jpg );">

        </div>
        <div class="book" name="immune" id="IMM"
            style="background-image: url(Images/BookCovers/immune.jpeg );">

        </div>
        <div class="book" name="capital" id="CAP"
            style="background-image: url(Images/BookCovers/capital.jpeg );">

        </div>

        </div>
        <div class="shelf"></div>
    </div>
</div>
`;

const paragraphs = [p0, p1, p2, p3];