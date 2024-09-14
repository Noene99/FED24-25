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

  - Ik snap h2 ''Listen to Hones'' niet op de officiele website. Deze staat achter de afbeelding, maar je kan niet op de afbeelding klikken. Via tab kan je hierheen navigeren en als je op enter klikt dan wordt je doorgestuurd naar een website, maar je kan niet op de afbeelding zelf klikken. Waarom?

  - Wel of geen aria label bij view all? (want de link bevind zich in de desbetreffende sectie/je kan aan de context zien wat het moet zijn)

  - Op welke onderdelen kan ik me het beste als eerst focussen en welke daarna en welke niet? (te moeilijk). Is alles haalbaar?

  - Kan ik ergens anders op focussen in plaats van op de links onderaan de carousel want ik ben bang dat ik met de carousel, animaties en hamburgermenu al mn handen vol heb.

  - Moet de section wel of geen aria label? moet dit consistent?

  - Moet de website nagemaakt worden ondanks dat ik denk dat sommige ontwerpkeuzes beter konden? Bv. Newsletter wordt afgesneden en dat is fixed responsiveness.

  - Moeten we rekening houden met fluid design, fixed design en adaptive design?

  - Moet ik een legend geven in het formulier?
  Ja, je kunt een <fieldset> gebruiken zonder een <legend>-element en in plaats daarvan een ARIA-label gebruiken om de toegankelijkheid te verbeteren. Het <legend>-element wordt echter aanbevolen omdat het standaard ondersteunt wordt door schermlezers en browsers om de context van de velden te verduidelijken. Maar als je om welke reden dan ook geen <legend> wilt gebruiken, kun je een ARIA-label toevoegen voor toegankelijkheid.
  https://chatgpt.com/c/66e4268f-aa78-8005-a9af-4c22c7f4dffb

  - Klopt de html code in mijn formulier zo?

  - Kloppen onderstaande media queries?
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


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

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
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1: https://1000logos.net/justin-bieber-logo/
  2. bron 2
  3. ...

</details>