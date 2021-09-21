---
language: nl
title: nwo
type: Case
info:
  date: January 9, 2021 9:58 PM
  client: Nord-West Oelleitung
  author: Re-Angelo Jarvis
  writtenType:
    - tag: Full stack Development
    - tag: Expertise on demand
  tag:
    - tag: Full stack Development
    - tag: Expertise on demand
card:
  title: De bouw van een veilige, krachtige Remote Desktop Server
  url: portfolio/nwo
  image_webp: case-image.webp
  image: computer-desktop-windows-square.jpg
  alt: Login screen Remote Desktop Webapplication
landing:
  title: Een super computer beschikbaar vanaf overal ter wereld
  image_webp: nwo-landing.webp
  image: ezgif.com-gif-maker-1-min.jpg
  alt: Digging construction site
section:
  - content: >-
      # De bouw van een veilige, krachtige Remote Desktop Server


      ## Nord-West Oelleitung


      &nbsp;


      &nbsp;


      ### Het probleem


      NWO, een dochteronderneming van BP en Shell, is een bedrijf dat op is gezet om de eerste long-range onverwerkte olielijn in Europa op te zetten. Er bestond hierbinnen een speciaal team, het Enlargement Project Portfolio dat extern ingeschakeld was. Dit was een gespecialiseerd team dat alleen voor een speciaal deelproject opgetuigd was. Aangezien het deels externe medewerkers waren, kon er door security policies geen toegang verschaft worden voor het bestaande systeem, waar bestanden, programmatuur en werkplekken op ingericht waren. Verder bleek dat het bestaande systeem niet toereikend was voor het gespecialiseerde team.


      &nbsp;


      &nbsp;


      Er moest een plek komen waarin documenten, communicatie en rekenkracht beschikbaar gesteld kon worden voor iedere werknemer. Deze werkplek moest remote beschikbaar zijn, en ten minste beveiligd zijn met twee factor authenticatie. Door een recente lek met Citrix mocht hier niet gebruik van gemaakt worden. De in house IT partij vond dit buiten de scope van hun werkzaamheden passen, waardoor het EP team externe hulp aantrok. De klant gaf aan dat er ongeveer 50 werknemers moesten komen werken op binnen de omgeving, en dat er genoeg rekenkracht nodig was om zware CAD en modelleer programma’s te runnen. Verder moesten de bestanden veilig opgeslagen worden met een back-up strategie.
    media:
      images:
        - image_webp: nwo-1.webp
          image: nwo-1.jpg
          description: Een vogelvlucht van de Nord-West Oelleitung
          alt: Route of Nord-West Oelleitung
  - content: >-
      ### De Oplossing


      ASRR heeft een server op maat samengesteld. Deze server bevatte een 64 Core Multithreaded Processor, 128 Gigabyte aan DDR4 RAM en een aantal SSD’s/HDD’s in RAID configuratie. Op deze server moest ook een Remote Desktop Licensing/Managing systeem komen, dat met een van onze C# applicaties om de paar minuten het lokale wachtwoord op de server aanpaste, per gebruiker.


      &nbsp;


      &nbsp;


      Deze C# applicatie stond in verbinding met onze Cloud omgeving d.m.v. een versleutelde RabbitMQ connectie. De Cloud omgeving had een notie van de gebruikers die in mogen loggen, en heeft daarbij met twee factor authenticatie een login systeem waarmee gebruikers een gegenereerd connectiebestand kunnen downloaden, waarmee gebruikers met 1 klik op de knop extreem secuur kunnen inloggen.


      &nbsp;


      &nbsp;


      Binnen de omgeving hebben we de volledige Microsoft stack toegepast, met als rode lijn Microsoft Teams. Dit was de hub voor alle bestanden (gekoppeld met het SharePoint systeem), meetings, announcements, planning, etc. We hebben de werknemers een briefing gegeven over het gebruik van Teams, dat toen nog in de kinderschoenen stond (voor Coronatijden), en remote support geleverd via het systeem met enige IT en Microsoft Office ondersteuningsverzoeken die in het dagelijkse proces naar boven kwamen.


      &nbsp;


      &nbsp;
    media:
      images:
        - image_webp: computer-login.webp
          description: Een screenshot van het login scherm van de webapplicatie.
          alt: login screen web application nwo
          image: ezgif.com-gif-maker-2-min.jpg
  - content: >-
      ### De Conclusie


      Door deze krachtige server kon een heel gespecialiseerd team, verspreid over Nederland en Duitsland goed samenwerken, alsof ze op dezelfde werkplek zaten. Op momenten dat er niet veel mensen op de server zitten, hebben de overgebleven users de rekenkracht van een supercomputer tot hun beschikking, wat handig is voor taken die normaal gesproken lang zouden duren.
---
