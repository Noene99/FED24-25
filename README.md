# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Sandra Strijker

  #### Je startniveau:
  Blauw.

  #### Je focus:
  Surface plane.
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  (https://www.justinbiebermusic.com/)

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  
  <img src="readme-images/justin-bieber-music.jpg" width="375px" alt="Home-page">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="readme-images/Album-pagina.JPG" width="375px" alt="Albumpagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  >>>>>>>>>>>TEST Screenreader

  •	h1 is niet uniek en omvat opzich wel de inhoud van de eerste pagina maar onvoldoende.
  •	Er is een link 'Listen to Honest' achter de image op de eerste pagina maar deze kan je niet aanklikken zonder de tab toets te gebruiken.

>>>>>>>>>>>>>TEST WCAG checklist

  CONTENT
  •	Songtitels worden meevertaald wanneer de taal wordt aangepast.
  •	Stream/download mag specifieker met een aria label en er moet worden aangegeven dat je naar een niewue pagina wordt geleid. (opent in nieuw venster)
  •	Bekijk alles is te vaag en moet met een aria label worden gekenmerkt.
  •	Alleen de term newsletter is wat kort. Kan wellicht beter worden aangemerkt als schrijf je in voor de nieuwsbrief met een aria label.

  GLOBAL CODE
  •	Er zijn 3 fouten in de code en veel waarschuwingen.
  
  KEYBOARD
  •	De visuele focus van de tab is minimaal en weinig opvallend.
  •	Keyboard focus en visuele layout kloppen niet helemaal. De volgorde van de carousel klopt ook niet helemaal. Eerst kan je op verder dan door alles heen en dan terug.
  •	h2 staat onderaan de pagina en komt visueel na de eerste h3.

  MOBILE AND TOUCH
  Landscape mode op telefoon> nav is te lang. 

  HEADINGS
  •	h1 is niet uniek (het logo is de h1).

  LISTS
  •	Voor de Carousel is geen ul gebruikt. Moet dat? !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  IMAGES
  •	Niet alle afbeeldingen hebben een goede alt-tekst met tekst die ook op ed afbeelding staat.

  MEDIA (VIDEO en AUDIO)
  •	Er is geen transcriptie en makkelijk toegankelijk en zichtbaar  maken.  

  CONTROLS<<<>>>
  •	Geen href bij sommige links maar een #
  •	Geen type=’’button’’ bij sommige buttons
  •	Onclick ipv button of a (submit form) 
  •	De footer links hebben wel onderstreping bij hover state, maar BEKIJK ALLES en STREAM/DOWNLOAD niet.
  •	STREAM/DOWNLOAD> onduidelijk dat er een nieuwe pagina wordt geopend voor mensen (met? en) zonder beperking.
  •	Buttons in Carousel zijn niet genoeg herkenbaar als button.

  APPEARANCE
  •	Er is geen verschil tussen donkere en lichte modus. Wat moet ik hiermee!!!!!!??????
  •	Animatie effecten besturingssysteem aan of uitzetten heeft geen verschil op de website.
  •	Tekengrootte 200%> STREAM/DOWNLOAD overlapt elkaar wel op de homepagina maar op de albumpagina niet.
  •	High-contrast wordt wel ondersteund maar de SM iconen hebben amper contrast op de albumpagina.

  ANIMATIES
  •	Kan niks vinden over de media query prefers reduced motion. Ik snap ook niet wat ermee bedoeld wordt en wat je zou moeten doen als het er is. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  •	Er is geen backgroundvideo
  •	Animaties flitsen niet maar bewegen wel.

  COLOR CONTRAST
  •	de h2's hebben een te laag contrast en voldoen niet aan de regel van 3:1 contrastverhouding.
  •	Ik kan geen custom ::selection colors vinden (voldoende contrast?) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  KLEURENBLINDHEID
  •	Opvallend: De kleuren van de hoverstate van de navigatie worden grijs in plaats van rood bij kleurenblindheid voor de kleur rood.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdownschets-homepage.jpg" width="375px" alt="breakdown van de hele pagina">

  ### de tweede pagina: 
  <img src="readme-images/breakdownschets-albumpagina.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (Menu): 
  <img src="readme-images/dynamisch-deel-1-menu-breakdownschets.png" width="375px" alt="breakdown van het menu">

  ### wellicht nog een dynamisch deel (Carousel): 
  <img src="readme-images/dynamisch-deel-2-carousel-breakdownschets.jpg" width="375px" alt="breakdown van de carousel">

  ### wellicht nog een dynamisch deel (Formulier): 
  <img src="readme-images/dynamisch-deel-3-formulier-breakdownschets.jpg" width="375px" alt="breakdown van het formulier">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Dit ging goed:
  •	Het globaal opdelen van de html (breakdownschets)
  •	Het benoemen van de secties, kopjes en content als elementen

  Dit ging niet goed:
  •	De attributen (aria-labels ed) benoemen.
  •	Alle content van de website halen en downloaden en organiseren.
  •	Ik zou graag een schema willen van welke dynamische delen ik uiteindelijk wil doen.
  •	Een planning
  •	De kleuren aanmaken


  ### Agenda voor meeting
  Vragen:
  - Moet er een p om mijn date/time element?
  - Carousel opbouw?
  - Kan ik ergens anders op focussen in plaats van op de buttons onderaan de carousel en dit doen met spans want ik ben bang dat ik met de carousel, animaties en hamburgermenu al mn handen vol heb.
  - De volgorde van de header elementen goed?
  - Listen to Honest h2
  - Wel of geen aria label bij view all?
  - Welke onderdelen wel en welke onderdelen niet maken
  - Moet de section wel of geen aria label? moet dit consistent?
  - Moet de website nagemaakt worden ondanks dat ik denkdat sommige ontwerpkeuzes beter konden? Bv. Newsletter wordt afgesneden en dat is fixed responsiveness.
  - Moeten we rekening houden met fluid design, fixed design en adaptive design?
  - kloppen bovenstaande media queries?
  - SM iconen nav?
  - Moet ik een legend geven in het formulier?
  - KLopt dit?
          Media query

          /* Telefoons */
          @media (max-width: 767px) {
          /* CSS voor telefoons */
          }

          /* Tablets */
          @media (min-width: 768px) and (max-width: 1024px) {
          /* CSS voor tablets */
          }

          /* Desktops */
          @media (min-width: 1025px) {
          /* CSS voor desktops */
          }

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

>>>Opmerkingen:
  - H1 geen a op de eerste pagina. H1 ook aria label geven, omdat het een h1 is zonder tekst, maar met een afbeelding.
  - Video element bevat een width en height omdat dan al meteen de juiste hoogte en breedte kunnen worden ongenomen.
  - Video element kan een poster attribuut bevatten (soort thumbnail)
  - Attribuut >Aria-current=''page''< op de actieve pagina (li) in ed navigatie zetten. Dit doe je voor elke pagina op het li dat actief is. In de CSS spreek je dit aan als: a[attribuut]
  - Span kan je gebruiken voor een inline stukje tekst wat apart betekenis moet krijgen.
  - Articles staan op zichzelf en kunnen worden hergeberuik.
  - q element is voor een quote en dan plaats je ook '' ''.
  - pre element is er zodat als je tekst op een nieuwe pagina doet dat de witruimte ertoe doet en het zo onder elkaar komt te staan.
  - Time moet in een p!
  - In de carousel moeten onderaan a tjes en de li moeten allemaal een eigen id hebben om aan te kunnen spreken. 


>>>Zelf uitzoeken a.d.v. feedback:
  - Wanneer br (en geen pre of p)?
  br is inline en gebruik je binnen een p om tekst op een nieuwe regel te laten beginnen zoals bij een handtekening onderaan aan mail. Pre wordt gebruikt voor kunst en behoudt witruimte. Het is een blokelement en wordt herkend als kunst. https://chatgpt.com/c/66df49ba-dbac-8005-983e-56c3c8a2903a
  - Waarom een a en geen button bij de carousel dots?

>>>Beantwoorde vragen:
  - Moet er een p om het date/time element?
  Antwoord: ja want date/time is inline en in feite is het een p met een date/time erin.
  - Hoe is de carousel opgebouwd?
  Antwoord:
  Ul>li (met id's)>h3, img, p, a
  buttons eronder
  a a a a a a a a a a a
  - Wat is de volgorde van de header elementen?
  Antwoord: H1, button, nav is een goede volgorde

>>>Niet kunnen vragen:
  - Moet er altijd een p element om het time element, want Chat GPT zegt van niet (zie heironder) en ik snap niet waarom het semantisch wel zou moeten.
  Antwoord Chat GPT (https://chatgpt.com/c/66df49ba-dbac-8005-983e-56c3c8a2903a):
  Inline-element: Het <time>-element gedraagt zich inline, net als andere tekst, en kan binnen een <p> gebruikt worden, maar dat hoeft niet.
  Keuze afhankelijk van context: Als de datum onderdeel is van een tekst, gebruik je het binnen een <p>. Als de datum zelfstandig is, kun je het zonder aanvullende tags gebruiken.
  --> wat ChatGPT zegt klopt --> een losse datum alleen is vaak wel ambigu 

  - Ik snap h2 ''Listen to Honest'' niet op de officiele website. Deze staat achter de afbeelding, maar je kan niet op de afbeelding klikken. Via tab kan je hierheen navigeren en als je op enter klikt dan wordt je doorgestuurd naar een website, maar je kan niet op de afbeelding zelf klikken. Waarom?
  --> ja een aria label - als je alleen het linkje hoort weet je niet waar "all" op slaat

  - Wel of geen aria label bij view all? (want de link bevind zich in de desbetreffende sectie/je kan aan de context zien wat het moet zijn)

  - Op welke onderdelen kan ik me het beste als eerst focussen en welke daarna en welke niet? (te moeilijk). Is alles haalbaar?

  - Zal ik het menu, form of carousel uitwerken?
  --> dingen die verschillend zijn uitwerken
  --> dingen die interessant zijn uitwerken
  --> tot de tijd op is

  - Is een form een dynamisch deel?
  --> als het form wat doet wel

  - Kan ik ergens anders op focussen in plaats van op de links onderaan de carousel want ik ben bang dat ik met de carousel, animaties en hamburgermenu al mn handen vol heb.

  - Chat GPT zegt dat die dots onderaan de carousel eigenlijk buttons zijn:
 
  --> ChatGPT heeft geen gelijk (en links zijn ook nog makkelijker qua code :)
  
  --> ChatGPT kijkt naar wat er in het verleden gemaakt is. Heel veel websites zitten niet zo goed in elkaar. Dat is voor ChatGPT de werkelijkheid. Dus altijd kritisch zijn wat ChatGPT tegen je zegt (dat ben je overigens 👍).
  
  Nb. code die ja van ChatGPT overneemt telt niet mee als eigen werk. Zorg dat je je bronnen in je code vermeldt.

  - Moet de section wel of geen aria label? moet dit consistent?
  --> alleen een aria-label als er geen heading is --> maar dan nog liever een heading toevoegen en die toegankelijk verstoppen
  --> dus nee dat hoeft niet consistent

  - Moet de website nagemaakt worden ondanks dat ik denk dat sommige ontwerpkeuzes beter konden? Bv. Newsletter wordt afgesneden en dat is fixed responsiveness.
  --> Je moet de website beter maken

  - Moeten we rekening houden met fluid design, fixed design en adaptive design?
  --> fluid design --> yeah
  --> fixed design --> bah
  --> adaptive design --> mwah

  - Moet ik een legend geven in het formulier?
  Ja, je kunt een <fieldset> gebruiken zonder een <legend>-element en in plaats daarvan een ARIA-label gebruiken om de toegankelijkheid te verbeteren. Het <legend>-element wordt echter aanbevolen omdat het standaard ondersteunt wordt door schermlezers en browsers om de context van de velden te verduidelijken. Maar als je om welke reden dan ook geen <legend> wilt gebruiken, kun je een ARIA-label toevoegen voor toegankelijkheid.
  https://chatgpt.com/c/66e4268f-aa78-8005-a9af-4c22c7f4dffb
  --> zelfde als voor sections en heading --> een legend toevoegen (en eventueel toegankelijk verstoppen)

  - Klopt de html code in mijn formulier zo?

  - Kloppen onderstaande media queries?
  --> nee
  --> van klein naar groot werken (mobile first) --> wel min-width --> geen max-width
  -->en ook niet denken in devices --> fluid design is een continuüm
    /* Telefoons */
    @media (max-width: 767px) {
    /* CSS voor telefoons */
    }

    /* Tablets */
    @media (min-width: 768px) and (max-width: 1024px) {
    /* CSS voor tablets */
    }

    /* Desktops */
    @media (min-width: 1025px) {
    /* CSS voor desktops */
    }


</details>

## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  
  Wat ging er goed:
  - Ik ben verder gekomen met de carousel, want ik heb een schets gemaakt, een div toegevoegd aan de html en een beginnetje gemaakt met de css.
  img

  Wat ging er niet goed:
  - Ik heb verder gewerkt aan het huiswerk maar daardoor niet veel tijd gehad voor de website. 
  - Ik had moeite met het definieren van het grid. 
  - Ik heb moeite met de boxen.

  <img src="/readme-images/schets-carousel1.png" width="375px" alt="Schets van de carousel">
  <img src="/readme-images/schets-carousel2.jpg" width="375px" alt="Schets van de carousel">
  <img src="/readme-images/carousel-grid-flex.png" width="375px" alt="Schets van de carousel">
  <img src="/readme-images/definieren-carousel.jpg" width="375px" alt="Schets van de carousel">


  ### Agenda voor meeting
  samen met je groepje opstellen

  - Definieren grid en div?
  - Ik snap h2 ''Listen to Honest'' niet op de officiele website. Deze staat achter de afbeelding, maar je kan niet op de afbeelding klikken. Via   tab kan je hierheen navigeren en als je op enter klikt dan wordt je doorgestuurd naar een website, maar je kan niet op de afbeelding zelf klikken. Waarom?
  - Hoe weet je bij welke schermgrootte een media-query nodig is?
  - Zijn het bij mij twee losse navs in de header of 1 nav met twee uls zoals ik nu heb? 



  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

Wat heb ik geleerd?
  - Buttons zijn voor acties en a is voor navigatie naar andere pagina of naar een ander deel/sectie op de pagina, zoals bij een carousel. Buttons zijn dus niet voor navigatie!!!
  - Voor een header kan je flexbox gebruiken of grid. Het voordeel van grid is dat je het logo altijd in het midden kunt houden bij het verbreden van het scherm en het voordeel van flexbox is dat je minder regels nodig hebt.  
  - Bij een svg kan je de kleur veranderen door de kleur van de stroke te veranderen. De binnenkant is fill. Geen color, dat is bij tekst en blockelementen. Je kan hier achter komen door in de browser te inspecteren en in de css bij de inspector te spelen met de kleuren van verschillende properties. Zo kan je erachter komen welke propertie je aan moet spreken.
  - Gebruik GEEN telefoon/desktop modus tijdens het maken van je website. Hier zitten wat bugs in. Druk op het blauwe icoontje.
  - Als je in een keer iets onder elkaar wil> parent grid
    Als je in een keer iets naast elkaar wil> parent flex
  - Overflow: hidden en visable
  - overflow: visable is default.
  - overflow: hidden zorg ervoor dat niks buiten het scherm valt


</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

>>>>>>>>>>>>>TEST WCAG checklist eigen website vergelijken met de originele

  CONTENT
  • De website is in het engels en daarom heb ik het html element een attribuut lang="en” meegegeven. Ik dacht dat songtitels wellicht specifiek het attribuut lang="en” moesten krijgen, maar volgensmij heeft is dit alleen noodzakelijk voor zoekmachines en screenreaders wanneer een website onderdelen met meerdere verschillende talen bevat. Wanneer ik mijn website laat vertalen door de browser worden songteksten ook vertaald terwijl dit in mijn ogen niet de bedoeling is. Los van of het de bedoeling is of niet, kan ik dit niet bereiken met het lang attribuut. Wel kan ik als er songtitels in een andere taal zijn deze het lang attribuut geven. 
De content was verder al duidelijk, begrijpelijk, bevat geen jargon , stijlfiguren of lastige metaforen.
Verbeterd:
  • De link view all-in de sectie Muziek en Video’s heb ik specifieker gemaakt zodat het duidelijk is wat je kan met de link. Ik heb deze links een aria label gegeven en nu hoor je: ‘view all songs en albums  on the music page. 
  • Ik heb met een aria label aangegeven wanneer een link opent in een nieuw venster. Dit is het geval bij stream/download en de social media link.

  GLOBAL CODE
  • Er zijn 3 fouten in de code en veel waarschuwingen.
Lang attribuut is er, viiewwport-zoom is niet disabled en elke pagina heeft een unieke h1.
Verbeterd:
Mijn albumpagina heeft nu een unieke h1, namelijk de titel van het album. De originele website heeft twee h1’s: het logo en de titel. Dit is niet correct en nu is het logo een h1 op de homepage en een link op de albumpagina met de titel als unieke h1.
W3C-validation: goed.
   
  
  KEYBOARD
  • De visuele focus van de tab is minimaal en weinig opvallend.
  • Keyboard focus en visuele layout kloppen nog steeds niet helemaal:
  • h2 staat onderaan de pagina en komt visueel na de eerste h3. Dit heb ik zo gelaten. Welk klopt de html. Dus eerst navigeer je naar de h2 en dan naar de h3 en niet andersom. De keyboard focus komt dus niet overeen met de visuele focus.
  • Dit geldt ook voor de carousel. Als je erdoorheen navigeert dan ligt de focus op het volgende li element en dat ligt voor een deel buiten het beeld omdat het zich dan op dat moemnt daar bevindt. De focus zou echter moeten liggen op vaar het li element komt te liggen en niet waar die lag als je ernaar toe navigeert.
  
De eerste keer dat he op 3 klik en de tweede keer dat je op 3 klikt. De volgorde van de carousel klopt ook niet helemaal. Eerst kan je op verder dan door alles heen en dan terug.
  • h2 staat onderaan de pagina en komt visueel na de eerste h3. Dit heb ik zo gelaten. Welk klopt de html. Dus eerst navigeer je naar de h2 en dan naar de h3 en niet andersom. De keyboard focus komt dus niet overeen met de visuele focus.
 
Verbeterd:
Als ik meer tijd had:
Ik heb op dit moment niet zelf een focus stijl gemaakt en toegevoegd. Als ik meer tijd had zou ik de focus state opvallender maken zodat je goed ziet bij welk onderdeel je bent. Ook zou ik het contrast verhogen.
Ik zou de focus goed proberen te zetten op de h3 als je door de carousel navigeert.
Ik zou het misschien zo kunnen maken dat als je op h2 focus dat de h2 dan boven in de sectie verschijnt in plaats van onder in de sectie of ik zou de h2 gewoon vast bovenin de sectie zetten. Ik twijfel of het zo als het nu is goed is.


  MOBILE AND TOUCH
  Landscape mode op telefoon> nav is te lang. 
Je kan niet horizontaal scrollen, er is genoeg scroll area bij de meeste onderdelen.
Bij de albumpagina op mobiel formaat kan de ruimte tussen interactieve elementen het beste nog wat meer zijn.
Verbeterd:
Bij de carousel zie je dat ik de afstand tussen de dots en de navigatie met pijltjes heb vegroot zodat je niet perongeluk op de verkeerde knop klikt.
  
Wat ik nog zou doen als ik meer tijd had:
Ik zou ervoor zorgen dat bij landscape mode op telefoon de main nav helemaal en goed in beeld komt, door een hamburger menu te gebruiken bij landscape mode.
 Video in de main nav staat er niet helemaal op.
  HEADINGS
  • h1 is nu uniek op alle pagina’s:
  
Op de albumpagina waren er twee h1’s. Nu is het een unieke h1. Ook heb ik de navigatie een h2 gegeven zodat je snel kan navigeren naar de share navigatie, waarin een lijst is opgenomen. 
De headings introduceren content. Verder was het heel onduidelijk waarom Music een h2 was, omdat het de music sectie van de website betreft, maar daar gaat de hele pagina over en niet more music. Verder zou deze h2 dan ook niet echt content introduceren. Bovendien moet more music een rangorde hoger staan dan de nummers die volgen. More music bevindt zich bovendien in een aside in plaats van in een sectie, omdat het los staat van de hoofdinhoud.
Er worden geen headings geskipt en er is nu een logische volgorde.
Wat ik zou doen als ik meer tijd had:
Als ik meer tijd had zou ik Music niet in een p zetten, om het hierboven beschreven probleem aan te pakken, maar zou ik music plaatsen in een breadcrumb navigation. Ik zou de gebruiker dan laten weten dat hij via de muzieksectie naar de albumpagina is genavigeerd. Ik weet alleen niet of ik het dan anders zou vormgeven met traditionele > tussen de pagina’s of dat ik het zou proberen vorm te geven zoals het nu is vormgegeven (dus zonder alle stappen en alleen de stap met music).
  LISTS
Verbeterd:
  • Voor de Carousel was geen ul gebruikt en nu wel.

  IMAGES
Er zijn geen decoratieve afbeeldingem, dus er is geen null waarde voor de alt. Dit doe je om te laten zien dat je erover hebt nagedacht en dat niet een beschrijving bent vergeten. Er zijn geen complexe afbeeldingen/grafiekken die een alt nodig hebben.
Verbeterd:
  • Niet alle afbeeldingen hadden eerst een goede alt-tekst. Nu zijn ze erg beschrijvend en bevatten ze de tekst die ook op de afbeelding staan. 

  MEDIA (VIDEO en AUDIO)
Er was geen autoplay en dat heb ik zo gehouden. Video kan gepauzeerd worden. Er zijn geen transcripties of captions bijgevoegd.
Wat zou ik doen als ik meer tijd had:
Als ik meer tijd had zou ik transcripties en captions beschikbaar stellen en deze makkelijk toegankelijk en zichtbaar  maken met bijvoorbeeld een button.  
  CONTROLS<<<>>>
Linkjes zijn a elementen. 
Verbeterd:
Linkjes zijn nu beter herkenbaar als links. Zie de afbeelding met view all hieronder. Door de underline is het nu duidelijker dat het een link is. Ik heb ook bij linkjes in de main nav bij desktop formaat dat bij hover de kleur veranderd, om interactie te maken dat interactie mogelijk is. Ook de buttons van de carousel (a) heb ik beter herkenbaar gemaakt als button met box-shadow.
  
  

Met tab kan er gefocust worden op de controls. 
 
  • STREAM/DOWNLOAD> aria-label toegevoegd om duidelijk te maken dat er een nieuwe pagina wordt geopend voor mensen (met? en) zonder beperking.

Als ik meer tijd had:
Zou ik de focus states van de controls duidelijk maken met meer contrast en een duidelijkere focus.
Bij alle buttons die geen submit button binnen een formulier zijn heb ik type=’’button’’ toegevoegd als attribuut.
Ik zou skip links toevoegen binnen de header zodat je de main nav bijvoorbeeld over kan slaan.

  APPEARANCE
  • Tekengrootte 200% werkt. High-contrast wordt wel ondersteund maar de SM iconen hebben amper contrast op de albumpagina.
 
Verbeterd:
  • Ik heb een custom light dark mode toegevoegd, want eerst was er niks.
  

  ANIMATIES
    • Ik heb geen prefers reduced motion, want mijn animaties bewegen langzaam of flashen niet. Ik heb niet veel animaties.
  • Er is geen backgroundvideo
Als ik meer tijd had zou ik prefers reduces motion toevoegen en contrast overal vergroten.

  COLOR CONTRAST
  • de h2's hebben een te laag contrast en voldoen niet aan de regel van 3:1 contrastverhouding.
Omdat deze vrij groot zijn dacht ik dat het niet erg zou zijn, maar ik zou het de volgende keer toch meer contrast geven voor de toegankelijkheid. Ook zou ik het contrast van de header net als bij de originele pagina volgen. Dus dat de tekst en icons en tekst op de homepage van wit naar zwart veranderen zodra ze over een andere sectie gaan. Dat is bij niet gelukt.
  
Hier is contrast goed`		hier moet de header wit worden en niet zwart blijven.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Wat ging goed: 
  - Het maken van een pijl: https://codepen.io/Sandra99/pen/KKOwyMw.
  - Het maken van een hamburgermenu dat verandert in een pijl met css en js: https://codepen.io/Sandra99/pen/eYqNmpe.
  - Het stylen van de header met het logo dat in het midden moet staan en groter en kleiner wordt (responsive) bij verschillende formaten.
  - Het maken van interactief en sticky maken de header mbv opdracht 2 van JS huiswerkopdracht, ondanks dat mijn code anders was genest dan het voorbeeld (voorbeeld:https://codepen.io/Sandra99/pen/gOVpYvX).
    <img src="/readme-images/JS-header-voortgang3.png" width="375px" alt="menu js">
    <img src="/readme-images/header-opmaak-voortgang3-deel1.png" width="375px" alt="menu css">
    <img src="/readme-images//header-opmaak-voortgang3-deel2.png" width="375px" alt="menu css">
    <img src="/readme-images//header-opmaak-voortgang3-deel3.png" width="375px" alt="@madia queries responsive">
  - Het maken van de radio buttons (a) in de navigatie van de carousel mbv chat gpt (https://codepen.io/Sandra99/pen/zYgxEZY).
  - Het stylen van het formulier ging grotendeels goed, behalve de checkboxes.

  Wat ging minder goed:
  - Het ontwerpen en bedenken van of ik grid of flexbox gebruik en welke propeties bij beide gebruikt kunnen worden.
  - Het effectief en logisch opstellen van de structuur op glabaal niveau qua padding/margin.
  - Het bedenken van hoe je het beste en met de minste code de website kan maken.
  Bedenken welke padding je nodig hebt en op welke elementen (section, body, main, form) ik padding/margin toevoeg om de afstanden op de website netjes te maken, welke afstanden nodig zijn en welke onderdelen meeschalen.
  - Bedenken hoe ik onderdelen laat meeschalen en welke eenheden ik gebruik.
  - De view all button met span erachter positioneren binnen het grid/flexbox aan de rechter kant is bij toeval gelukt maar ik vind het lastig om in te zien in welke context ik deze heb gestyled qua parent:flex/grid.
  - De video section is niet af net als de buttons van de carousel.
  - Het stylen van de checkboxes in het formulier
  - Ik had veel moeite met de header op mobiel niveau maar dit is denk ik goed gelukt.

  Mijn plan om dit goed te laten verlopen op volgorde van prioriteit:
  - Stukke onderdelen wil ik fixen: het logo op github en de submitbutton op github doen het niet, maar wel op de live server. Waar ligt dit aan? 
  - De buttons in de carousel werken maken met JS. Dit probeer ik nu nog te fixen en anders hulp vragen.
  - html tweede pagina maken en content toevoegen en CSS hiervan doen
  - Light dark mode toevoegen
  - surface plane: header hover onderdelen.
  - WCAG checklist checken
  - custom properties overal toepassen
  - De carousel wil ik (zo goed als het kan) perfect werkend maken. Dit gaat denk ik wel lukken dus dit ga ik zelf aanpakken.
  - De header responsive maken: zelf proberen

 
  
  - Het formulier is niet prachtig maar ziet er OK uit. Ik wil alleen vragen hoe ik de checkboxes fix, maar dit is geen topprioriteit.
  - De inputfields van email en country moeten ook nog gestyled, maar laat ik voor nu zitten omdat ik er niks aan heb gedaan en ik mn focus op andere delen wil leggen.
  - Meer content teovoegen aan de carousel als finisching touch.


  Wat ik al heb aan surface planen interactie: 
  - Werkende header. 
  - Zelf toegevoegd: hamburgermenu
  -  radio buttons navigatie carousel
  - hover over links
  - submit text-shadow interactie
  

  Wat nog kan gedaan worden home page:
  - pijl in carousel scalen
  - video border animatie
  - animatie zwart vlak video en fotos carousel
  - hover over stream/download en navigatie heading

  Wat nog kan gedaan worden album page:
  - albums hover zwart vlak
  - hover over stream/download en social navigatie

  Prioriteit surface plane:
  - animatie zwart vlak video en fotos carousel
  - hover over stream/download en navigatie heading
  - albums hover zwart vlak 

  Minste prioriteit
  - video section ivm andere onderdelen.

  Doen: dark-light mode

  Wat te doen voor een voldoende:
  - ‘Nette’ vanilla HTML, CSS en Javascript (check)
  - Diverse content - (check)
  - Min. 1 micro-interactie tot in detail (met JS) - (navragen)
  - Toegankelijk - WCAG checklist - (nog aflopen).
  - Professionele vormgeving (huisstijl, licht & donker thema (nog doen) en i.i.g. custom properties voor kleurtjes) 

  Voor Presentatie:
  - Weet hoe Screenreader werkt (windows)> on/off is CTRL + WINDOWS + ENTER. k voor links, h voor headings, getallen voor speciefieke headings, tab. Scan mode is met CAPS LOCK + spatie. 

  ### Agenda voor meeting
  Vragen:
  - werkt screenreader zo goed op small screen?
  - Is er een reflectie?
  - Is de heading die werkt minimaal 1 micro-interactie tot in detail (met JS)? Zo niet, is dat wel het geval met stream-download? Is dit lastig?
  - Stukke onderdelen wil ik fixen: het logo op github en de submitbutton op github doen het niet, maar wel op de live server. Waar ligt dit aan?
  - light-dark mode?
  - Wat wordt er bedoeld met Responsive voor small screens?
  - Hoeveel regels CSS is normaal?

  Extra vraag:
  - Checkboxes stylen? hoe kan je ze stylen zonder dat dit heel veel werk is?
  - planning checken.
  - Is share een h2, h3 of p en aria labeledby
  


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  Wat heb ik geleerd:
  - Hoe je een tabel maakt en dat daar rows in zitten tr en tds dat zis data dat de kolommen vormt. Table heading zet je erboven en dat vormt de heading van de kolommen dus niet de title van de tabel. De parents hiervan zijn thead en tbody.
  - Altijd kopjes voor screenreaders en zoekmachines. Dus de klasse visually hidden a11y  project toevoegen aan de html.
  - Writing mode: verticle-lr;
  - Inzoomen afbeelding> object-fit: cover
  - Plaatje: width:100% en height:100% zodat het plaatje het hele vakje (de li) opvult. Dus op de img> height, width, object cover. Het - - plaatje krijgt geen aspect ratio!!
  - Li> width en aspect-ratio geven. In plaats van aspect ratio kan je ook op een andere manier de hoogte en grootte bepalen. Bv met height of aspect ratio. Kijk gewoon naar parent en container.
  - Stel je wilt dat het verandert bij een andere schermgrootte dan media query en dn aspect ratio> andere verhouding (in mediaquery) dan verandert de groote en verhouding van het plaatje, wordt het opgevuld door het plaatje en zeg je object fit cover(niet in de media query).
  - Github about

  Beantwoorde vragen:
  - Stukke onderdelen wil ik fixen: het logo op github en de submitbutton op github doen het niet, maar wel op de live server. Waar ligt dit aan?
  > in de map images in Github zit een bestand met de verkeerde naam. Ik moet de bestandsnaam veranderen naar justin-bieber met kleine letters.
  - light-dark mode?
  > @media-query toevoegen met light darm mode.
  > Het kan ook als variabele worden toegevoegd boven in.
  - Checkboxes stylen? hoe kan je ze stylen zonder dat dit heel veel werk is?
  > het is veel werk. accent color is hetgene wat het minste werk is maar weinig mogelijkheden.
  - Is share een h2, h3 of p en aria labeledby?
  > nav met daarin h2 en ul.
</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
  Carousel:
  Als ik de screenreader gebruik en ik navigeer door de h3'tjes dan ligt de focus wel op het goede onderdeel maar de focus zit niet op de goede locatie. Dit is niet goed want mensen die slechtziend zijn willen wel precies zien welk deel het precies is dat wordt voorgelezen.
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  >>Generieke pagina CSS
  1. https://1000logos.net/justin-bieber-logo/



  >>Homepagina CSS
  2. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
  3. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
  4. https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced
  5. https://codepen.io/shooft/pen/NWQWVGB (Sanne)
  6. https://codepen.io/shooft/pen/xxvKGmY (Sanne)
  7. /* https://www.a11yproject.com/posts/how-to-hide-content/ */

  >>Albumpagina CSS
  1. https://chatgpt.com/c/66faa3fd-154c-8005-a75e-51cec58a1678  (css albumpagina, regel 155)

  2. https://chatgpt.com/c/66faa3fd-154c-8005-a75e-51cec58a1678 (css albumpagina, regel 183)
  3. https://www.youtube.com/watch?v=biI9OFH6Nmg (css albumpagina, regel 184)
  4. https://chatgpt.com/c/66faa3fd-154c-8005-a75e-51cec58a1678 (css albumpagina, regel 183)
  5. https://chatgpt.com/c/66faa3fd-154c-8005-a75e-51cec58a1678 (css albumpagina, regel 202, 212)

</details>