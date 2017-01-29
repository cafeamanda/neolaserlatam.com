'use strict';

angular.module('neoApp_es-mx')

  .factory('proctoFactory', function() {

    var proctofac = {};

    var proctofiles=[
      {
        path: 'files/PROCTO/1 A new technique for sphincter-preserving anal fistula repair using a novel radial emitting laser probe.pdf',
        title: 'A new technique for sphincter-preserving anal fistula repair using a novel radial emitting laser probe',
        authors: 'A. Wilhelm',
        date: '2011'
      },
      {
        path:'files/PROCTO/1 Diode laser for treatment of symptomatic hemorrhoida .pdf',
        title:'Diode laser for treatment of symptomatic hemorrhoid: a short term clinical result of a mini invasive treatment, and one year follow up',
        authors:'Abdolhadi Jahanshahi | Esmail Mashhadizadeh | Mohammad‐Hossein Sarmast',
        date:'2012'
      },
      {
        path:'files/PROCTO/2 Closure of fistula-in-ano with laser – FiLaCTM.pdf',
        title:'Closure of fistula-in-ano with laser – FiLaC TM : an effective novel sphincter-saving procedure for complex disease',
        authors:'P. Giamundo | M. Geraci | L. Tibaldi | M. Valente',
        date:'2013'
      },
      {
        path:'files/PROCTO/2 Hemorrhoidal laser procedure - short and long term results from a prospective study.pdf',
        title:'Hemorrhoidal laser procedure: short- and long-term results from a prospective study',
        authors:'Nicola Crea, M.D. | Giacomo Pata, M.D. | Mauro Lippa, M.D. | Deborah Chiesa, M.D. | Maria Elena Gregorini, M.D. | Paolo Gandolfi, M.D.',
        date:'2013'
      },
      {
        path:'files/PROCTO/3 FiLaC - long term results.pdf',
        title:'Fistula-tract Laser Closure (FiLaC TM ): long-term results and new operative strategies',
        authors:'P. Giamundo | L. Esercizio | M. Geraci | L. Tibaldi | M. Valente',
        date:'2015'
      },
      {
        path:'files/PROCTO/3 Intrahemorrhoidal Diode Laser Does It Work.pdf',
        title:'A New Method For Hemorrhoid Surgery: Intrahemorrhoidal Diode Laser, Does It Work?',
        authors:'Hélio Plapler | Raduan Hage | Janaina Duarte | Nilza Lopes | Igor Masson | Cláudio Cazarini | and Thiago Fukuda',
        date:'2009'
      },
      {
        path:'files/PROCTO/4 Laser ablation of fistula tract_ a sphincter-preserving method for treating fistula-in-ano.pdf',
        title:'Laser ablation of fistula tract: a sphincter-­preserving method for treating fistula-­in-­ano.',
        authors:'Oztürk E. | Gülcü B',
        date:'2014'
      },
      {
        path:'files/PROCTO/4 Laser Hemorrhoidoplasty Procedure vs Open Surgical Hemorrhoidectomy.pdf',
        title:'Laser Hemorrhoidoplasty Procedure vs Open Surgical Hemorrhoidectomy: a Trial Comparing Treatments for Hemorrhoids of Third and Fourth Degree',
        authors:'Halit Maloku | Zaim Gashi | Ranko Lazovic | Hilmi Islami | Argjira Juniku-Shkololli',
        date:'2014'
      },
      {
        path:'files/PROCTO/Laser Workshop Clinics (1).pdf',
        title:'Berlin Workshop - Laser in Proctology',
        authors:'Zentrum für Laserchirurgie in der Proktologie',
        date:'Unknown'
      },
      {
        path:'files/PROCTO/neoLaser Proctology Course July 2016.pdf',
        title:'Proctology - Basic Laser Theory',
        authors:'Gil Shapira, CEO Neolaser',
        date:'2016'
      },
      {
        path:'files/PROCTO/Protocol Anal Fistula.pdf',
        title:'Laser Coagulation of Anal Fistula (LCAF)',
        authors:'Zentrum für Laserchirurgie in der Proktologie',
        date:'Unknown'
      },
      {
        path:'files/PROCTO/Protocol Hemorrhoids.pdf',
        title:'Laser Sclerotherapy of Hemorrhoids (LSH)',
        authors:'Zentrum für Laserchirurgie in der Proktologie',
        date:'Unknown'
      },
      {
        path:'files/PROCTO/Protocol Pilonidal Sinus.pdf',
        title:'Laser Coagulation of Pilonidal Sinus (LCP)',
        authors:'Zentrum für Laserchirurgie in der Proktologie',
        date:'Unknown'
      }
    ]

    proctofac.getFiles = function() {
      return proctofiles;
    };
    proctofac.getFile = function() {
      return proctofiles[index];
    };
    return proctofac;

  })

  .factory('plddFactory', function() {

    var plddfac = {};

    var plddfiles=[
      {
        path:'files/PLDD/PDD-vs-Conservative-Treatment.pdf',
        title:'Comparative Prospective Randomized Study Comparing Conservative Treatment and Percutaneous Disk Decompression for Treatment of Intervertebral Disk Herniation',
        authors:'Dimitrios Erginousakis, MD | Dimitrios K. Filippiadis, MD | Aikaterini Malagari | Athanasios Kostakos, MD | Elias Brountzos | Nikolaos L. Kelekis | Alexis Kelekis',
        date:'Aug, 2011'
      },
      {
        path:'files/PLDD/PLDD-Course-2015-Cagliari.pdf',
        title:'Treatment of Herniated Lumbar Disk with PLDD Procedure',
        authors:'M. Costaglioli. | P. Sannais',
        date:'Unknown'
      },
      {
        path:'files/PLDD/PLDD-Publication-1.pdf',
        title:'Comparison of Results of 500 Microdiscectomies and 500 Percutaneous Laser Disc Decompression Procedures for Lumbar Disc Herniation',
        authors:'Gian Paolo Tassi, M.D.',
        date:'2006'
      },
      {
        path:'files/PLDD/PLDD-Publication-2.pdf',
        title:'Percutaneous Treatment of Intervertebral Disc Herniation',
        authors:'Xavier Buy, M.D. | Afshin Gangi, M.D., Ph.D.',
        date:'Unknown'
      },
      {
        path:'files/PLDD/PLDD-Publication-3.pdf',
        title:'Percutaneous Laser Disk Decompression: A Review of the Literature',
        authors:'B. Schenk | P.A. Brouwer | W.C. Peul | M.A. van Buchem',
        date:'Jan, 2006'
      },
      {
        path:'files/PLDD/PLDD-Publication-4.pdf',
        title:'Percutaneous Laser Disk Decompression for the Treatment of Lumbar Disc Herniation: A Review',
        authors:'Philippe Goupille, MD | Denis Mulleman, MD | Saloua Mammou, MD | Isabelle Griffoul, MD | Jean-Pierre Valat, MD',
        date:'2007'
      },
      {
        path:'files/PLDD/PLDD-Vs-Surgery-RCT-design.pdf',
        title:'Percutaneous Laser Disc Decompression versus Conventional Microdiscectomy in Sciatica: A Randomized Controlled Trial',
        authors:'Patrick A. Brouwer, MD, MSc | Ronald Brand, PhD | M. Elske van den Akker-van Marle, PhD | Wilco C.H. Jacobs, PhD | Barry Schenk, MD | Annette A. van den Berg-Huijsmans, MSc | Bart W. Koes, PhD | M.A. van Buchem, MD, PhD | Mark P. Arts, MD, PhD | Wilco C. Peul, MD, PhD',
        date:'2015'
      },
      {
        path:'files/PLDD/PLDD-Vs-Surgery-RCT.pdf',
        title:'Effectiveness of Percutaneous Laser Disc Decompression versus Conventional Open Discectomy in the Treatment of Lumbar Disc Herniation; Design of a Prospective Randomized Controlled Trial',
        authors:'Patrick A. Brouwer | Wilco C. Peul | Ronald Brand | Mark P. Arts | Bart W. Koes | Annette A. van den Berg | Mark A. van Buchem',
        date:'Mar 31, 2009'
      },
      {
        path:'files/PLDD/Surgical-technique-PLDD-Cagliari-2015.pdf',
        title:'PLDD: Surgery Technique',
        authors:'P. Sannais | M. Costaglioli',
        date:'Unknown'
      }
    ]

    plddfac.getFiles = function() {
      return plddfiles;
    };
    plddfac.getFile = function() {
      return plddfiles[index];
    };
    return plddfac;
  })

  .factory('entFactory', function() {

    var entfac = {};

    var entfiles=[
      {
        path:'files/ENT/[11] 1470 for ENT.pdf',
        title:'Intraindividual Comparison of 1,470 nm Diode Laser versus Carbon Dioxide Laser for Tonsillotomy: A Prospective, Randomized, Double Blind, Controlled Feasibility Trial',
        authors:'Miriam Havel, MD | Ronald Sroka, PhD | Elsa Englert, MD | Klaus Stelter, MD | Andreas Leunig, MD | Christian S. Betz, MD',
        date:'2012'
      },
      {
        path:'files/ENT/[12] 1470 for ENT.pdf',
        title:'A Double-Blind, Randomized, Intra-Individual Controlled Feasibility Trial Comparing the Use of 1,470 and 940 nm Diode Laser for the Treatment of Hyperplastic Inferior Nasal Turbinates',
        authors:'Miriam Havel, MD | Ronald Sroka, PhD | Andreas Leunig, MD | Parag Patel, MD | Christian S. Betz, MD',
        date:'Unknown'
      },
      {
        path:'files/ENT/102v61n06a13184432pdf001_2.pdf',
        title:'Pilot study on the diode laser in stapes surgery',
        authors:'María Luisa Navarrete | Rafael Boemo | Mohamed Darwish | Jesús Monzón | Pedro Rojas',
        date:'2009'
      },
      {
        path:'files/ENT/0392-100X-32-164.pdf',
        title:'Diode laser in the treatment of epistaxis in patients with hereditary haemorrhagic telangiectasia',
        authors:'M.L. Fiorella | L. Lillo | R. Fiorella',
        date:'2012'
      },
      {
        path:'files/ENT/Diode laser for turbinate surgery.pdf',
        title:'Diode laser treatment of hypertrophic inferior turbinates and evaluation of the results with acoustic rhinometry',
        authors:'Hamdi Cakli | Cemal Cingi | Emine Güven | Melek Kezban Gurbuz | Ercan Kaya',
        date:'2012'
      },
      {
        path:'files/ENT/Grolman guinea pig model comparison of co2 980 thulium and ktp.pdf',
        title:'Influence of Laser-Assisted Cochleostomy on Acoustically Evoked Compound Action Potentials in the Guinea Pig',
        authors:'Digna M. A. Kamalski | Jeroen P. M. Peters | Tjeerd de Boorder | Sjaak F. L. Klis | Wilko Grolman',
        date:'2014'
      },
      {
        path:'files/ENT/Grolman laser performance for 980.pdf',
        title:'Capturing Thermal, Mechanical, and Acoustic Effects of the Diode (980 nm) Laser in Stapedotomy',
        authors:'Digna M. A. Kamalski | Tjeerd de Boorder | Arnold J. N. Bittermann | Inge Wegner | Robert Vincent | Wilko Grolman',
        date:'2014'
      },
      {
        path:'files/ENT/IJOHNS_2014010913585213.pdf',
        title:'Microdrill, Diode Laser, and Manual Microsurgical Stapedoplasty: A Comparative Study',
        authors:'Priit Kasenõmm, Maris Suurna',
        date:'2014'
      },
      {
        path:'files/ENT/turbinate treatment with diode laser.pdf',
        title:'Diode laser versus radiofrequency treatment of the inferior turbinate – a randomized clinical trial',
        authors:'U. Kisser | K. Stelter | R. Gürkov | M. Patscheider | F. Schrötzlmair | R. Bytyci | C. Adderson-Kisser | A. Berghaus | B. Olzowy',
        date:'2014'
      }
    ]

    entfac.getFiles = function() {
      return entfiles;
    };
    entfac.getFile = function() {
      return entfiles[index];
    };
    return entfac;
  });
