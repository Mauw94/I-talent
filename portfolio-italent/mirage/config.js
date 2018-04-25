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

  this.get('/wedstrijds', function() {
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

  this.get('/seminars', function() {
    return {
      data: [{
        type: 'seminar',
        id: '1',
        attributes: {
          date: '04/40/2017',
          name: 'AppFoundry',
          location: 'Corda Campus',
          description: 'Leren werken met Android studio, hoe het in elkaar zit'
        }
      }, {
        type: 'seminar',
        id: '2',
        attributes: {
          date: '11/10/2017',
          name: 'Jidoka',
          location: 'Corda iClassroom',
          description: 'De basis van Kotlin leren'
        }
      },{
        type: 'seminar',
        id: '3',
        attributes: {
          date: '18/10/2017',
          name: 'Humix',
          location: 'PXL',
          description: '/'
        }
      }, {
        type: 'seminar',
        id: '4',
        attributes: {
          date: '25/10/2017',
          name: 'AppFoundry',
          location: 'Corda Campus',
          description: 'ReactJS seminarie'
        }
      },{
        type: 'seminar',
        id: '5',
        attributes: {
          date: '8/11/2017',
          name: 'RealDolmen',
          location: 'PXL',
          description: '/'
        }
      },{
        type: 'seminar',
        id: '6',
        attributes: {
          date: '06/12/2017',
          name: 'Tobania',
          location: 'PXL',
          description: 'Duidelijk te maken dat het makkelijk is om aan een hack programma te geraken op het internet en dit vrij eenvoudig te kunne gebruiken'
        }
      },{
        type: 'seminar',
        id: '7',
        attributes: {
          date: '13/12/2017',
          name: 'Ordina',
          location: 'PXL',
          description: '/'
        }
      },{
        type: 'seminar',
        id: '8',
        attributes: {
          date: '18/12/2017',
          name: 'Smart-ICT',
          location: 'PXL',
          description: '/'
        }
      },{
        type: 'seminar',
        id: '9',
        attributes: {
          date: '20/12/2017',
          name: 'QFrame',
          location: 'PXL',
          description: '/'
        }
      },{
        type: 'seminar',
        id: '10',
        attributes: {
          date: '10/01/2018',
          name: 'Faros',
          location: 'Corda iClassroom',
          description: ''
        }
      },{
        type: 'seminar',
        id: '11',
        attributes: {
          date: '17/01/2018',
          name: 'BlockChain',
          location: 'PXL',
          description: 'Digitale revolutie'
        }
      }]
    };
  })
}
