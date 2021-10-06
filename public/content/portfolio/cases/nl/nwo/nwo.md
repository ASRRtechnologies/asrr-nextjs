---
language: nl
title: nwo
type: Case
meta_tags:
  title: NWO
  text: Een veilige online omgeving waarin documenten, communicatie en rekenkracht
    beschikbaar is voor iedere werknemer, zowel intern als extern.
info:
  date: January 9, 2021 9:58 PM
  client: Nord-West Oelleitung
  author: Re-Angelo Jarvis
  tags:
    - center
card:
  title: De bouw van een veilige, krachtige Remote Desktop Server
  image: computer-desktop-windows-square.jpg
  alt: Login screen Remote Desktop Webapplication
  text: NWO is een groot olie bedrijf dat behoefte had aan een veilige online
    omgeving waarin documenten, communicatie en rekenkracht beschikbaar was voor
    iedere werknemer, zowel intern als extern.
landing:
  title: Een super computer beschikbaar vanaf overal ter wereld
  image: ezgif.com-gif-maker-1-min.jpg
  alt: Digging construction site
section:
  - content: >-
      # De bouw van een veilige, krachtige Remote Desktop Server


      Nord-West Oelleitung (NWO), een dochteronderneming van BP en Shell, is een bedrijf dat is opgezet om de eerste long-range onverwerkte olielijn in Europa op te zetten. NWO had behoefte aan een online omgeving waarin interne en externe teams konden samenwerken. 


      &nbsp;


      ## Het probleem


      Binnen NWO moeten verschillende teams met elkaar samenwerken, dit gaat om zowel interne teams als externe teams. Het probleem was dat externe teams geen toegang konden krijgen tot het bestaande systeem waar de hele werkmethode op was ingericht en dat het bestaande systeem niet toereikend was voor gespecialiseerde teams.\


      &nbsp;


      Er was gebrek aan een gezamenlijke plek waar werknemers documenten delen, communiceren en rekenkracht beschikbaar hebben. Deze gezamenlijke plek moest toegankelijk zijn voor alle werknemers op alle plekken en goed beveiligd zijn (met op zijn minste een twee factor authenticatie). 


      &nbsp;


      NWO gaf aan een aantal eisen te hebben. De online omgeving moest:


      * geschikt zijn voor ongeveer vijftig werknemers.

      * genoeg rekenkracht hebben om zware CAD en modelleer programma's te draaien.

      * op een veilige manier bestanden kunnen opslaan met behulp van een back-up strategie.
    media:
      images:
        - image: nwo-1-2.png
          description: Een vogelvlucht van de Nord-West Oelleitung
          alt: Route of Nord-West Oelleitung
  - content: >-
      ## De Oplossing


      ASRR heeft een server samengesteld die aansluit op de behoefte van NWO. Deze server bevatte een 64 Core Multithreaded Processor, 128 Gigabyte aan DDR4 RAM en een aantal SSD’s/HDD’s in RAID configuratie. Deze onderdelen zorgen voor een .....\

      Op deze server moest ook een Remote Desktop Licensing/Managing systeem komen, dat met een van onze C# applicaties om de paar minuten per gebruiker het lokale wachtwoord op de server aanpaste.


      &nbsp;


      Deze C# applicatie stond in verbinding met onze Cloud omgeving d.m.v. een versleutelde RabbitMQ connectie. De Cloud omgeving had een notie van de gebruikers die mochten inloggen. Het loginsysteem had een twee factor authenticatie waarmee gebruikers een gegenereerd connectie bestand konden downloaden. Door dit bestand konden gebruikers met een muisklik extreem secuur inloggen op een.


      &nbsp;


      Binnen de omgeving hebben we de volledige Microsoft stack toegepast, met als rode lijn Microsoft Teams. Dit was de hub voor alle bestanden (gekoppeld met het SharePoint systeem), meetings, announcements, planning, etc. We hebben de werknemers een briefing gegeven over het gebruik van Teams, dat toen destijds nog in de kinderschoenen stond. Verder hebben we remote support geleverd via het systeem, zoals IT en Microsoft Office ondersteuningsverzoeken die in het dagelijkse proces naar boven kwamen.
    media:
      images:
        - description: Een screenshot van het login scherm van de webapplicatie.
          alt: login screen web application nwo
          image: ontwerp-zonder-titel-1-.png
  - content: >-
      ## De Conclusie


      Door deze krachtige server kon een heel extern team dat verspreid was over Nederland en Duitsland samenwerken alsof ze op dezelfde werkplek zaten. Op momenten dat er weinig mensen op de server zaten, zoals in de avonden of weekenden, hadden ze de rekenkracht van een supercomputer tot hun beschikking. Dit is handig voor taken die normaal gesproken lang zouden duren, zoals het van een zwaar programma of modelleren.
---
