export default function () {
  this.namespace = '/api';

  this.get('/internationaliserings', function () {
    return {
      data: [{
        type: 'internationalisering',
        id: 'zuid-afrika',
        attributes: {
          date: '26/03/2017 - 02/04/2017',
          name: 'Internationale BusIT week',
          location: 'Zuid-Afrika, Pretoria',
          description: 'Internationale BusIt week waar wij een project hebben gedaan aan de Belgium Campus universiteit.',
          verslag: 'leeg voor nu',
          image: '../assets/images/DSC_0141.jpg'
        }
      }, {
        type: 'internationalisering',
        id: 'finland',
        attributes: {
          date: '24/02/2018 - 01/06/2018',
          name: 'Buitenlandse stage',
          location: 'Finland (Lapland), Rovaniemi',
          description: 'Stage: Lapland University of Applied Sciences (Lapin AMK). Hier deed ik stage in pLAB, het software engineering laboratorium van de universiteit.',
          verslag: 'leeg voor nu',
          image: '../assets/images/pNSUkir.jpg'
        }
      }]
    };
  });

  this.get('/wedstrijds', function () {
    return {
      data: [{
        type: 'wedstrijd',
        id: '1',
        attributes: {
          date: '20/40/2017',
          name: 'Catalyst Coding Contest',
          location: 'Corda iClassroom',
          description: 'Programmeer wedstrijd met 5 tal vragen die in team opgelost konden worden. Als een vraag opgelost werd kon je pas aan de volgende vraag beginnen.'
        }
      }]
    };
  });

  let seminars = [{
    type: 'seminar',
    id: '1',
    attributes: {
      date: '27/09/2017',
      name: 'Ordina',
      location: 'PXL',
      description: 'GDPR + Security awareness.'
    }
  }, {
    type: 'seminar',
    id: '2',
    attributes: {
      date: '04/10/2017',
      name: 'AppFoundry',
      location: 'Corda 1 Conference Room',
      description: 'Leren werken met Android studio, hoe het in elkaar zit. Daarna een demo van een ontwikkelde applicatie.'
    }
  }, {
    type: 'seminar',
    id: '3',
    attributes: {
      date: '11/10/2017',
      name: 'Jidoka',
      location: 'Corda iClassroom',
      description: 'De basis van Kotlin leren.'
    }
  }, {
    type: 'seminar',
    id: '4',
    attributes: {
      date: '18/10/2017',
      name: 'Humix',
      location: 'Corda 1 Conference Room',
      description: 'Google Analytics. Hoe je Google Analytics kunt gebruiken en waarvoor het eigenlijk dient.'
    }
  }, {
    type: 'seminar',
    id: '5',
    attributes: {
      date: '25/10/2017',
      name: 'AppFoundry',
      location: 'Corda 1 Conference Room',
      description: 'Uitleg over React Native. Hoe het werkt en hoe je het kunt gebruiken.'
    }
  }, {
    type: 'seminar',
    id: '6',
    attributes: {
      date: '8/11/2017',
      name: 'RealDolmen',
      location: 'PXL',
      description: 'Wat zijn verschillende hack technieken? Enkele demos van hacks en hoe makkelijk het is om eigenlijk aan een hack programma te geraken op het internet.'
    }
  }, {
    type: 'seminar',
    id: '7',
    attributes: {
      date: '06/12/2017',
      name: 'Tobania',
      location: 'PXL',
      description: 'Wat is GDPR? De aanpak van security binnen bedrijven. Hoe gaat automatisatie en correlatie IT-security helpen verbeteren?'
    }
  }, {
    type: 'seminar',
    id: '8',
    attributes: {
      date: '13/12/2017',
      name: 'Ordina',
      location: 'PXL',
      description: 'Een mobile enterprise app maken met Xamarin.Forms, Docker, MVVM en .NET Core.'
    }
  }, {
    type: 'seminar',
    id: '9',
    attributes: {
      date: '18/12/2017',
      name: 'Smart-ICT',
      location: 'PXL',
      description: 'Introductie tot PXL Robotics Lab, AI, Machine Learning en Deeplearning.'
    }
  }, {
    type: 'seminar',
    id: '10',
    attributes: {
      date: '20/12/2017',
      name: 'QFrame',
      location: 'Corda iClassroom',
      description: 'Pair programming waarin refactoring technieken werden aangeleerd om een legacy code base te benaderen.'
    }
  }, {
    type: 'seminar',
    id: '11',
    attributes: {
      date: '10/01/2018',
      name: 'Faros',
      location: 'Corda1: Conference Room',
      description: 'Augmented Reality. Wat is het? Hoe werkt het? Interactieve sessie met een aantal demos.'
    }
  }, {
    type: 'seminar',
    id: '12',
    attributes: {
      date: '17/01/2018',
      name: 'BlockChain',
      location: 'PXL',
      description: 'Stijn Bijnens, CEO en LRM, had het over blockchain. Wat het allemaal precies inhoudt, hoe het tot stand is gekomen en hoe we ons hierop nog beter kunnen voorbereiden voor de toekomst.'
    }
  }];
  this.get('/seminars', function (db, request) {
    if (request.queryParams.name !== undefined) {
      let filteredSeminars = seminars.filter(function (i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return { data: filteredSeminars };
    } else {
      return { data: seminars };
    }
  })
}
