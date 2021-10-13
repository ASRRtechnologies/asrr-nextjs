---
language: nl
title: form
meta_tags:
  title: Case - FORM
  text: De Configurator maakt het mogelijk voor klanten om hun droomhuis direct om
    te zetten in een officiële 3D - bouwtekening.
info:
  date: January 7, 2021 12:00 AM
  title: Het bouwen van een geautomatiseerde BIM-Configurator
  client: Form Architecture & Engineering
  author: Re-Angelo
  tags:
    - left
card:
  alt: Modern Building
  client: Form Architectuur & Engineering
  text: "De Configurator maakt het mogelijk voor klanten om hun droomhuis direct
    om te zetten in een officiële 3D - bouwtekening. De bouwtekening wordt
    gegenereerd in Revit, een 3D engineering/modellering programma. Geen onnodig
    repetitief werk meer voor architecten. "
  title: Het bouwen van een geautomatiseerde BIM-Configurator
  image: case-image.jpg
  description: Nieuwe applicatiesa in de bouw
section:
  - content: >-
      # Het bouwen van een geautomatiseerde BIM-Configurator


      FORM Architecture & Engineering heeft al sinds 2011 een visie over hoe het automatiseren van het ontwerpproces van nieuwbouwhuizen. In 2018 zijn we met deze visie aan de slag gegaan en begonnen met het realiseren van de Configurator. De configurator maakt het mogelijk voor consumenten om zelf hun droomhuis te ontwerpen. Meer informatie over de laatste versie van de Configurator is te vinden onderaan de pagina. Voor een demo klik hier.


      ## Het probleem


      Bij het kopen van een huis geeft de klant aan welke opties hij op zijn huis wil, zoals een dakkapel of een uitbouw. De architect moet voor elke klant handmatig een apart ontwerp maken, gebaseerd op de aangegeven opties. Dit proces is onnodig tijdrovend en repetitief, vooral als huizen in grote getallen worden gebouwd.
    media:
      images:
        - image: form-1-2.png
          description: A modular design buildup of the house
          reference: https://www.form.nl/form-configurator
          alt: Autodesk Revit
  - content: >-
      ## Oplossing


      De configurator maakt het mogelijk voor klanten om hun optielijst (die normaal gesproken door de architect werd uitgetekend) direct om te zetten in een officiële 3D - bouwtekening. De bouwtekening wordt gegenereerd in Revit, een 3D engineering/modellering programma. Hieronder een uitleg en een schematische weergave van hoe wij dit hebben gerealiseerd. 


      ### Maken configuratie (rode pijlen)


      1. De eerste stap in dit proces is natuurlijk het invullen van de optielijst. Dit kan op een door ons ontwikkelde webapplicatie, ook wel het dashboard genoemd. Als de klant tevreden is met zijn keuzes, dan stuurt het dashboard de keuzes door naar de Hive.

      2. De Hive werkt als een brein van de applicatie. De Hive moet er voor zorgen dat alle keuzes van de klant goed worden gecommuniceerd naar Revit, het programma dat de keuzes gaat omzetten in een 3D-bouwtekening. Alleen kunnen de Hive en Revit niet zo goed met elkaar samenwerken, wat directe communicatie moeilijk maakt. De Hive en Revit hebben een bemiddelaar nodig die er voor zorgt dat zij zonder problemen met elkaar kunnen communiceren. Die bemiddelaar is de Thin Client. De Hive stuurt de keuzes naar de Thin Client.

      3. De Thin Client is als een schild om Revit heen gebouwd op dezelfde Windows PC. Zo kan de Thin Client naast bemiddelen ook Revit ondersteunen. De Thin Client stuurt de keuzes door naar Revit, die er een bouwtekening van maakt voor de klant.

      4. De bouwtekening wordt terug gestuurd naar de Thin Client. 

      5. De Thin Client stuurt de bouwtekening terug naar de Hive.

      6. De Hive is echter alleen goed in communicatie en niet in het opslaan van bestanden, dus het brein stuurt de configuratie door naar Azure. Azure slaat de configuratie van de klant veilig op.


      ### Opvragen configuratie (paarse pijlen)


      7. Als de klant de configuratie wil zien, moet hij dit opvragen via het dashboard. Het dashboard vraagt aan de Hive of hij de configuratie mag zien, want het brein gaat over communicatie.

      8. De Hive vraagt de configuratie op bij Azure. 

      9. Azure stuurt de configuratie naar de Hive.

      10. De Hive stuurt de configuratie terug naar het dashboard. De klant heeft nu een 3D-bouwtekening van zijn toekomstige woning downloaden met een klik op de knop.
    media:
      images:
        - image: configurator-schema-1-.png
          description: Schematische weergave van de werking van de Configurator. De rode
            pijlen representeren het configureren van een bouwtekening en de
            paarse gestippelde lijnen representeren het opvragen van de
            bouwtekening.
          alt: Huis configureren
        - image: form-3.png
          description: Gesimplificeerde versie van het configurator dashboard
          alt: Dashboard
        - description: Login scherm van het Configurator dashboard
          alt: Configurator login
          image_webp: form-2.png
          image: form-2.png
  - content: >-
      ## Conclusie


      Door de configurator kunnen klanten zelfstandig een bouwtekening van hun droomhuis laten genereren. Naast de klant de zelfstandigheid geven om zijn eigen woning te ontwerpen, heeft de architect niet meer onnodig veel en repetitief werk. Er valt hier zeker te spreken van een win-win-situatie.
  - content: >-
      ## Feedback klant


      > "ASRR denkt pro-actief mee in de projecten en komt met goede en efficiënte oplossingen. Ze begeleiden het project vakkundig, zijn heel flexibel en kunnen snel schakelen indien nodig. Het is erg plezierig om met ze samen te werken!"


      \- Jörgen Haring
article:
  - content: >-
      # Het probleem


      FORM heeft al sinds 2011 een visie over hoe het proces bij het kopen van een nieuwbouwhuis zou kunnen worden geautomatiseerd. Hierbij is de basis het modulair en parametrisch opbouwen van de sub-componenten waar een huis uit bestaat. Dat klinkt misschien ingewikkeld, maar door het zo te structureren kan er een hoop geautomatiseerd worden. Met deze visie zijn we in 2018 begonnen met een groot nieuw project, de Configurator. Meer informatie over de laatste versie hiervan is te vinden onder dit nieuwsbericht.


      &nbsp;


      &nbsp;


      Het idee achter de Configurator is om vanaf een lijst keuzes, gemaakt door de consument, automatisch het huis in Revit (een 3D engineering/modelleringsprogramma) samen te stellen en daarmee een officiële bouwtekening te genereren. Dit bespaart de architecten een hoop (herhaald) werk, en zorgt ervoor dat er minder fouten gemaakt worden in het proces.
    media:
      images:
        - image: form-1.jpg
          alt: Revit autodesk
          description: A modular design buildup of the house
          reference: https://www.form.nl/form-configurator
      videos:
        - video: login_low_res.mp4
          video_description: Video rdp login
  - content: >-
      # De oplossing


      Dit alles is echter makkelijker gezegd dan gedaan. Om dit alles te laten werken is er een Custom Revit-Addin, een enterprise-grade back-end API, een complexe database en web-applicatie nodig, om maar een paar zaken te noemen. Er zijn complexe keuzebomen gemaakt om de keuze van de consument om te zetten in de business rules. Deze zijn nodig voor het samenstellen van de modellen voor een huis.


      &nbsp;


      &nbsp;


      Vervolgens is er een custom C# Revit Add-In geschreven, waarmee we de applicatie met code kunnen aansturen. Op basis van de keuzebomen wordt het juiste onderdeel in 3D op de juiste positie geplaatst. Als een huis eenmaal samengesteld is, kan deze met Revit worden weergegeven op een bouwtekening. Deze bouwtekening wordt met een zelfgebouwde PDF printer geëxporteerd, aangezien Revit deze niet ingebouwd heeft.


      &nbsp;


      &nbsp;


      Zo kan er dus lokaal op basis van een boodschappenlijstje een heel huis samengesteld worden. De bedoeling is echter dat de consument dit zelf kan opvragen, doormiddel van bijvoorbeeld een webapplicatie. Het grote probleem hierbij is dat Revit vrij instabiel kan zijn met grote of inefficiënte modellen. Daarom hebben we een programma geschreven dat als een soort schild fungeert om Revit heen. Het programma houdt Revit in leven, en zorgt ervoor dat er communicatie plaats kan vinden met de applicatie in de Cloud die aanvragen van buitenaf binnen krijgt.


      &nbsp;


      &nbsp;


      De crux hierin is de applicatie in de Cloud. Dit is een Java Spring boot applicatie, gehost op ons Kubernetes netwerk. Deze applicatie moet altijd beschikbaar zijn, en kan een enorme hoeveelheid aanvragen tegelijk aan. Vervolgens worden deze aanvragen opgeslagen in een database, met bijbehorend dashboard om in te zien wat de klanten gekozen hebben. De Cloud applicatie voert de aanvragen mondjesmaat aan de Revit worker, en zorgt ervoor dat de uploads veilig worden opgeslagen in Azure.
    media:
      images:
        - image: form-2.png
          alt: Configurator dashboard login screen
          description: The authentication screen for the Configurator dashboard
        - image_webp: form-3.webp
          image: form-3.png
          description: The (redacted) dashboard, with insighsts of user behavior.
          alt: Dashboard configurator
  - content: >-
      # De Conclusie


      FORM had een scala aan IT disciplines nodig, en heeft door de jaren heen dynamisch op afroepbasis een team van verschillende developers bij ons afgenomen om hun visie te realiseren.
landing:
  title: De huizenmarkt op zijn kop zetten
  image: form-landing.jpg
  alt: Modern White Building Architecture
type: Case
---
