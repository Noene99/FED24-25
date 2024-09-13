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
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Dit ging goed:
  •	Het globaal opdelen van de html (breakdownschets)
  •	Het benoemen van de secties, kopjes en content als elementen
  •	

  Dit ging niet goed:
  •	De attributen (aria-labels ed) benoemen.
  •	Alle content van de website halen en downloaden en organiseren.
  •	Ik zou graag een schema willen van welke dynamische delen ik uiteindelijk wil doen.
  •	Een planning
  •	De kleuren aanmaken
  •	


  ### Agenda voor meeting
  samen met je groepje opstellen

 Vragen:

Moet de website nagemaakt worden ondanks dat ik denkdat sommige ontwerpkeuzes beter konden? Bv. Newsletter wordt afgesneden en dat is fixed responsiveness.

Moeten we rekening houden met fluid design, fixed design en adaptive design?

kloppen bovenstaande media queries?

SM iconen nav?

Moet ik een legend geven in het formulier?

KLopt dit?

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


Kan ik ergens anders op focussen in plaats van op de buttons onderaan de carousel en dit doen met spans want ik ben bang dat ik met de carousel, animaties en hamburgermenu al mn handen vol heb.

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

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