---
language: nl
title: Form
landing:
  title: De huizenmarkt op zijn kop zetten
  image_webp: form-landing.webp
  image: form-landing.jpg
  alt: architecture building white
card:
  title: Het bouwen van een geautomatiseerde BIM-Configurator
  image_webp: case-image.webp
  image: case-image.jpg
  description: Voor dit project hebben wij verschillende soorten apps gebouwt
  alt: Modern building design
info:
  date: November 14, 2019 12:00 AM
  title: Het bouwen van een geautomatiseerde BIM-Configurator
  client: Form Architecture & Engineering
  author: Re-Angelo
article:
  - content: >-
      # Het probleem


      FORM heeft al sinds 2011 een visie over hoe het proces bij het kopen van een nieuwbouwhuis zou kunnen worden geautomatiseerd. Hierbij is de basis het modulair en parametrisch opbouwen van de sub-componenten waar een huis uit bestaat. Dat klinkt misschien ingewikkeld, maar door het zo te structureren kan er een hoop geautomatiseerd worden. Met deze visie zijn we in 2018 begonnen met een groot nieuw project, de Configurator. Meer informatie over de laatste versie hiervan is te vinden onder dit nieuwsbericht.


      Het idee achter de Configurator is om vanaf een lijst keuzes, gemaakt door de consument, automatisch het huis in Revit (een 3D engineering/modelleringsprogramma) samen te stellen en daarmee een officiële bouwtekening te genereren. Dit bespaart de architecten een hoop (herhaald) werk, en zorgt ervoor dat er minder fouten gemaakt worden in het proces.
    image:
      - image_webp: form-1.webp
        image: form-1.jpg
        alt: Picture of Revit 3D models
        description: A modular design buildup of the house
        reference: https://www.form.nl/form-configurator
  - content: >-
      # De oplossing


      Dit alles is echter makkelijker gezegd dan gedaan. Om dit alles te laten werken is er een Custom Revit-Addin, een enterprise-grade back-end API, een complexe database en web-applicatie nodig, om maar een paar zaken te noemen. Er zijn complexe keuzebomen gemaakt om de keuze van de consument om te zetten in de business rules. Deze zijn nodig voor het samenstellen van de modellen voor een huis.


      Vervolgens is er een custom C# Revit Add-In geschreven, waarmee we de applicatie met code kunnen aansturen. Op basis van de keuzebomen wordt het juiste onderdeel in 3D op de juiste positie geplaatst. Als een huis eenmaal samengesteld is, kan deze met Revit worden weergegeven op een bouwtekening. Deze bouwtekening wordt met een zelfgebouwde PDF printer geëxporteerd, aangezien Revit deze niet ingebouwd heeft.


      \

      Zo kan er dus lokaal op basis van een boodschappenlijstje een heel huis samengesteld worden. De bedoeling is echter dat de consument dit zelf kan opvragen, doormiddel van bijvoorbeeld een webapplicatie. Het grote probleem hierbij is dat Revit vrij instabiel kan zijn met grote of inefficiënte modellen. Daarom hebben we een programma geschreven dat als een soort schild fungeert om Revit heen. Het programma houdt Revit in leven, en zorgt ervoor dat er communicatie plaats kan vinden met de applicatie in de Cloud die aanvragen van buitenaf binnen krijgt.


      De crux hierin is de applicatie in de Cloud. Dit is een Java Spring boot applicatie, gehost op ons Kubernetes netwerk. Deze applicatie moet altijd beschikbaar zijn, en kan een enorme hoeveelheid aanvragen tegelijk aan. Vervolgens worden deze aanvragen opgeslagen in een database, met bijbehorend dashboard om in te zien wat de klanten gekozen hebben. De Cloud applicatie voert de aanvragen mondjesmaat aan de Revit worker, en zorgt ervoor dat de uploads veilig worden opgeslagen in Azure.
    image:
      - image_webp: form-2.webp
        image: form-2.png
        alt: Login screen Configurator Dashboard
        description: The authentication screen for the Configurator dashboard
      - image_webp: form-3.webp
        image: form-3.png
        alt: Dashboard Configurator Application
        description: The (redacted) dashboard, with insighsts of user behavior.
  - content: >-
      # De conclusie


      FORM had een scala aan IT disciplines nodig, en heeft door de jaren heen dynamisch op afroepbasis een team van verschillende developers bij ons afgenomen om hun visie te realiseren.
---
