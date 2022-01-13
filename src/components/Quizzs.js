// { emotion: 'Emoji joyeux', correspondance: 'comedy',emoji: joyeux },                         FINI
//       { emotion: 'Emoji pleure', correspondance: 'drama',emoji: triste },                    FINI
//       { emotion: 'Emoji surprise', correspondance: 'fantasy,sci_fi',emoji: surprise },       EN COURS Mika
//       { emotion: 'Emoji amoureux', correspondance: 'romance',emoji: amour },                 EN COURS Bene
//       { emotion: 'Emoji colere', correspondance: 'action,war',emoji: colere },               EN COURS Romain
//       { emotion: 'Emoji peur', correspondance: 'horror',emoji: peur },                       NON FAIT
//       { emotion: 'Emoji auberg', correspondance: '',emoji: aubergine }                       FINI


/*********************** QUIZZ JOYEUX ***********************/
const questionsJoyeux = [
  {
    questionText: "Quelle citation est attitrée au personnage principal de The Mask ?",
    answerOptions: [
      { answerText: "ENOOOOOOOOOORME !", isCorrect: false },
      { answerText: "PAS MAAAAAAAAAL !", isCorrect: false },
      { answerText: "SPLEEEEEEENDIDE !", isCorrect: true },
      { answerText: "OH MY GOD! BECKY LOOK AT HER BUTT !", isCorrect: false }
    ]
  },
  {
    questionText: "Dans quel film entend-on 'Tu es un laidron mais tu es bien bonne !' ?",
    answerOptions: [
      { answerText: "Very Bad Trip", isCorrect: false },
      { answerText: "Les visiteurs", isCorrect: true },
      { answerText: "Brice de Nice", isCorrect: false },
      { answerText: "Austin Powers", isCorrect: false }
    ]
  },
  {
    questionText: "Quel personnage célèbre est joué par Rowan Atkinson ?",
    answerOptions: [
      { answerText: "Dr Strange", isCorrect: false },
      { answerText: "Mr Bean", isCorrect: true },
      { answerText: "The Arrow", isCorrect: false },
      { answerText: "The Witcher", isCorrect: false }
    ]
  },
  {
    questionText: "De quel film provient l'expression : ' Pas de bras, pas de chocolat !'",
    answerOptions: [
      { answerText: "Les Bronzés font du ski", isCorrect: false },
      { answerText: "Oss 117", isCorrect: false },
      { answerText: "Babysitter", isCorrect: false },
      { answerText: "Intouchables", isCorrect: true }
    ]
  },
  {
    questionText: "Quel sport collectif est pratiqué dans le film 'Rrrrrrr!'",
    answerOptions: [
      { answerText: "Froggy-Pong", isCorrect: false },
      { answerText: "Yorkmouth", isCorrect: false },
      { answerText: "Fourche-Ball", isCorrect: false },
      { answerText: "Biche-Volley", isCorrect: true }
    ]
  },
  {
    questionText: "Dans quel film aperçoit-on 'Double Gras' ? ",
    answerOptions: [
      { answerText: "Austin Powers", isCorrect: true },
      { answerText: "Oss 117", isCorrect: false },
      { answerText: "Fatal Bazooka", isCorrect: false },
      { answerText: "La tour Montparnasse Infernale", isCorrect: false }
    ]
  },
  {
    questionText: "Dans Family Business, que produit la famille ? ",
    answerOptions: [
      { answerText: "de la Marijuana", isCorrect: true },
      { answerText: "des Glaces", isCorrect: false },
      { answerText: "de la Musique", isCorrect: false },
      { answerText: "de l'Alcool", isCorrect: false }
    ]
  },
  {
    questionText: "D'ou vient Borat ?",
    answerOptions: [
      { answerText: "Etats-Unis", isCorrect: false },
      { answerText: "Pologne", isCorrect: false },
      { answerText: "Ouzbékistan", isCorrect: false },
      { answerText: "Kazakhstan", isCorrect: true }
    ]
  },
  {
    questionText: "Dans Scary Movie, que fait la journaliste lors de l'interview avec Doofy ?",
    answerOptions: [
      { answerText: "Elle lui donne son numéro", isCorrect: false },
      { answerText: "Elle lui suce le doigt ", isCorrect: true },
      { answerText: "Elle lui demande de visiter le campus", isCorrect: false },
      { answerText: "Elle lui dit d'aller à la bibliothèque", isCorrect: true }
    ]
  },
  {
    questionText: "Comment s'appele le héros de OSS117 ?",
    answerOptions: [
      { answerText: "Jean-luc", isCorrect: false },
      { answerText: "Hubert Bonisseur de la Bath", isCorrect: true },
      { answerText: "Fatal Bazooka", isCorrect: false },
      { answerText: "Bill Tremendous", isCorrect: false }
    ]
  }
]

/*********************** QUIZZ TRISTE ***********************/

const questionsTriste = [
  {
    questionText: "Comment s'appelle le paquebot dans 'Titanic' ?",
    answerOptions: [
      { answerText: "Santa Maria", isCorrect: false },
      { answerText: "Titanic", isCorrect: true },
      { answerText: "Mayflower", isCorrect: false },
      { answerText: "Charles de Gaulle", isCorrect: false }
    ]
  },
  {
    questionText: "Dans 'Million Dollar Baby', qu'arrive t'il à la boxeuse à la fin du film ?",
    answerOptions: [
      { answerText: "Elle devient championne du monde", isCorrect: false },
      { answerText: "Elle devient entraineuse de boxe", isCorrect: false },
      { answerText: "Elle chûte et devient tétrapligue", isCorrect: true },
      { answerText: "Elle se casse les mains", isCorrect: false }
    ]
  },
  {
    questionText: "De quoi parle le film 'Hatchi' ?",
    answerOptions: [
      { answerText: "Un chien qui attend son maitre", isCorrect: true },
      { answerText: "Un enfant recherchant son père", isCorrect: false },
      { answerText: "Un poisson qui recherche sa famille", isCorrect: false },
      { answerText: "Un étudiant qui cherche l'amour", isCorrect: false }
    ]
  },
  {
    questionText: "Dans 'The NoteBook / N'oublie Jamais', de quelle maladie est atteinte Allie ? ",
    answerOptions: [
      { answerText: "Gilles de la Tourette", isCorrect: false },
      { answerText: "Parkinson", isCorrect: false },
      { answerText: "Cancer", isCorrect: false },
      { answerText: "Alzheimer", isCorrect: true }
    ]
  },
  {
    questionText: "Dans 'PS. I LOVE YOU', qu'a fait le défunt mari avant de mourir ?",
    answerOptions: [
      {
        answerText: "Il a mis en place un jeu de gages à executer afin que sa femme retrouve la joie de vivre malgré sa perte",
        isCorrect: false
      },
      {
        answerText: "Il a légué son richissime héritage quelques heures avant sa mort",
        isCorrect: false
      },
      {
        answerText: "Il a passé une soirée avec son ex copine",
        isCorrect: false
      },
      {
        answerText: "Il a participé à un match de rugby avant de se casser les deux coudes contre un arbre",
        isCorrect: true
      }
    ]
  },
  {
    questionText: "Dans 'Le Pianiste', où se cache le pianiste au début du film ?",
    answerOptions: [
      { answerText: "Dans le grenier", isCorrect: true },
      { answerText: "Dans la cave", isCorrect: false },
      { answerText: "Dans le garage", isCorrect: false },
      { answerText: "Sous l'escalier de l'hotel", isCorrect: false }
    ]
  },
  {
    questionText: "Dans 'Les petits mouchoirs', que fait le personnage de Jean Dujardin ?",
    answerOptions: [
      {
        answerText: "Il recherche sa femme en Corse et part travailler en Italie",
        isCorrect: false
      },
      {
        answerText: "Il danse en boîte, conduit un scooter, meurt à l'hopital",
        isCorrect: true
      },
      {
        answerText: "Il réussit un concours de police et devient lieutenant en brigade",
        isCorrect: false
      },
      {
        answerText: "Il vend du crack et devient un riche dealer parisien",
        isCorrect: false
      }
    ]
  },
  {
    questionText: "Quel nom porte la batte de baseball de Negan dans The Walking Dead ? ",
    answerOptions: [
      {
        answerText: "Molly",
        isCorrect: false
      },
      { answerText: "Rebecca", isCorrect: false },
      { answerText: "Lucille", isCorrect: true },
      { answerText: "Cindy", isCorrect: false }
    ]
  },
  {
    questionText: "Dans le dernier épisode de la série Desperate Housewives, que se passe t-il ?",
    answerOptions: [
      {
        answerText: "Gabrielle Solis se fait écraser par un camion et meurt sur le coup",
        isCorrect: false
      },
      { answerText: "Victor Newman tue Carlos Solis", isCorrect: false },
      { answerText: "Mike se fait tirer dessus et meurt", isCorrect: true },
      { answerText: "Le jardinier tue Gabrielle Solis", isCorrect: false }
    ]
  },
  {
    questionText: "Dans la ligne Verte, pourquoi John Coffey est en prison ?",
    answerOptions: [
      { answerText: "Homicide sur 2 policiers", isCorrect: false },
      { answerText: "Viol et homicide sur 2 fillettes", isCorrect: true },
      { answerText: "Il aurait voler un ballon à Decathlon", isCorrect: false },
      {
        answerText: "Conduite d'une voiture en état d'ivresse ",
        isCorrect: false
      }
    ]
  }
]

/*********************** QUIZZ SURPRISE ***********************/

const questionsSurprise = [
  {
    questionText: "Comment s'appelle « le gardien des clés et des lieux » dans Harry Potter ?",
    answerOptions: [
      { answerText: "Hagrid", isCorrect: true },
      { answerText: "Sbotcho le gardien", isCorrect: false },
      { answerText: "Heimdal", isCorrect: false },
      { answerText: "Po Karaï", isCorrect: false }
    ]
  },
  {
    questionText:
      'Quel est l"objet de toutes les convoitises dans Le Seigneur des Anneaux ?',
    answerOptions: [
      { answerText: "Une poupée gonflable", isCorrect: false },
      { answerText: "le joyau des elfes", isCorrect: false },
      { answerText: "l'Anneau", isCorrect: true },
      { answerText: "Frodon", isCorrect: false }
    ]
  },
  {
    questionText: "Que garde Smaug dans Le Hobbit ?",
    answerOptions: [
      { answerText: "La princesse", isCorrect: false },
      { answerText: "Moljnir", isCorrect: false },
      { answerText: "Le saint Graal", isCorrect: false },
      { answerText: "l'Arkenstone", isCorrect: true }
    ]
  },
  {
    questionText: "Qu'est ce qui donne leur pouvoir aux Jedis dans Star Wars ?",
    answerOptions: [
      { answerText: "La RedBull", isCorrect: false },
      { answerText: "Leur sabre laser", isCorrect: false },
      { answerText: "La méditation contemplative", isCorrect: false },
      { answerText: "La Force", isCorrect: true }
    ]
  },
  {
    questionText: "Quelle est la seule matière capable d'affaiblir Super Man?",
    answerOptions: [
      { answerText: "le sel", isCorrect: false },
      { answerText: "la cryptonite", isCorrect: true },
      { answerText: "le paracétamol", isCorrect: false },
      { answerText: "la coca", isCorrect: false }
    ]
  },
  {
    questionText: "Qui est le grand méchant dans le Seigneur des Anneaux ?",
    answerOptions: [
      { answerText: "Frodon", isCorrect: false },
      { answerText: "Sarouman", isCorrect: false },
      { answerText: "Gollum", isCorrect: false },
      { answerText: "Sauron", isCorrect: true },
    ]
  },
  {
    questionText: "Dans la saga Star Wars, qui est l'élu qui doit ramener l'équilibre dans la force ?",
    answerOptions: [
      { answerText: "Marty Mcfly", isCorrect: false },
      { answerText: "Yoda", isCorrect: false },
      { answerText: "Anakin Skywalker", isCorrect: true },
      { answerText: "Jean Claude Van Damme", isCorrect: false }
    ]
  },
  {
    questionText: "Quel est la planête d'origine des Avatars? ",
    answerOptions: [
      { answerText: "Pandora", isCorrect: true },
      { answerText: "Saturne", isCorrect: false },
      { answerText: "Pluton", isCorrect: false },
      { answerText: "Jupiter", isCorrect: false }
    ]
  },
  {
    questionText: "Dans Starship Troopers, comment s'appellent les créatures qui mmenaces l'humanité ?",
    answerOptions: [
      { answerText: "les martiens", isCorrect: false },
      { answerText: "les arachnides", isCorrect: true },
      { answerText: "les minimoys", isCorrect: false },
      { answerText: "les orcs", isCorrect: false }
    ]
  },
  {
    questionText: "Dans Retour vers le Futur, quelle injure fait enrager Marty Mcfly ?",
    answerOptions: [
      { answerText: "Brigand !", isCorrect: false },
      { answerText: "Mauviette !", isCorrect: true },
      { answerText: "Saloperie !", isCorrect: false }
      { answerText: "Couillon !", isCorrect: false },
    ]
  }
]

/*********************** QUIZZ AMOUR ***********************/

const questionsAmour = [
  {
    questionText: "Quel âge à 'Bébé' dans Dirty Dancing ?",
    answerOptions: [
      { answerText: "18", isCorrect: false },
      { answerText: "19", isCorrect: false },
      { answerText: "17", isCorrect: true },
      { answerText: "20", isCorrect: false }
    ]
  },
  {
    questionText: "Qui est la vrai Rose dans Titanic",
    answerOptions: [
      { answerText: "Gloria Stuart", isCorrect: true },
      { answerText: "Gloria Estefan", isCorrect: false },
      { answerText: "Gloria Gaynor", isCorrect: false },
      { answerText: "Gloria Stanford", isCorrect: false }
    ]
  },
  {
    questionText: "Dans La Proposition, pourquoi Margaret veut se marier avec Andrew? ",
    answerOptions: [
      { answerText: "Elle l’aime", isCorrect: false },
      { answerText: "Pour avoir son visa", isCorrect: true },
      { answerText: "Pour sa fortune", isCorrect: false },
      { answerText: "A cause de la pression sociale", isCorrect: false }
    ]
  },
  {
    questionText: "Qui est Elena Lincoln dans 50 Nuances de Grey?",
    answerOptions: [
      { answerText: "Sa mère", isCorrect: false },
      { answerText: "Sa soeur", isCorrect: false },
      { answerText: "Sa maîtresse SM", isCorrect: true },
      { answerText: "Sa voisine", isCorrect: false }
    ]
  },
  {
    questionText: "Quel est l’American Dream de Gatsby ?",
    answerOptions: [
      { answerText: "L’argent", isCorrect: false },
      { answerText: "C’est Daisy", isCorrect: true },
      { answerText: "La célébrité", isCorrect: false },
      { answerText: "Avoir une piscine", isCorrect: false }
    ]
  },
  {
    questionText: "Quel est le lien entre Graham et Iris dans The Holiday",
    answerOptions: [
      { answerText: "Amants", isCorrect: false },
      { answerText: "Frère et soeur", isCorrect: true },
      { answerText: "Père et fille", isCorrect: false },
      { answerText: "Chien et chatte", isCorrect: false }
    ]
  },
  {
    questionText: "Quel est le métier d’Alex dans L’Arnaqueur",
    answerOptions: [
      { answerText: "Briseur de nuque professionnel", isCorrect: false },
      { answerText: "Briseur de coeur professionnel", isCorrect: false },
      { answerText: "Briseur de couple professionnel", isCorrect: true },
      { answerText: "Briseur de rêve professionnel", isCorrect: false }
    ]
  },
  {
    questionText: "Dans La Chronique des Bridgerton, qu'est-ce que Simon refuse d’avoir? ",
    answerOptions: [
      { answerText: "Des Crocs, c’est moche", isCorrect: false },
      { answerText: "Des chats, ça griffe", isCorrect: false },
      { answerText: "Une femme, c’est chiant", isCorrect: false },
      { answerText: "Des enfants, rejet du paternel", isCorrect: true }
    ]
  },
  {
    questionText: "Quel est le prénom de Mister Big dans Sex ans the City",
    answerOptions: [
      { answerText: "John", isCorrect: true },
      { answerText: "Bob", isCorrect: false },
      { answerText: "Lewis", isCorrect: false },
      { answerText: "Aidan", isCorrect: false }
    ]
  },
  {
    questionText: "Bridget Jones prépare un diner d’anniversaire, qui arrive à l’improviste et l’aide ? ",
    answerOptions: [
      { answerText: "Jack", isCorrect: false },
      { answerText: "Daniel", isCorrect: false },
      { answerText: "Mark", isCorrect: true },
      { answerText: "Philippe", isCorrect: false }
    ]
  }
]

/*********************** QUIZZ COLERE ***********************/

const questionsColere = [
  {
    questionText: "De quelle guerre dans l'histoire fait référence le film FURY ?",
    answerOptions: [
      { answerText: "La première guerre mondiale", isCorrect: false },
      { answerText: "La guerre froide", isCorrect: false },
      { answerText: "La guerre du Vietnam", isCorrect: false },
      { answerText: "La seconde guerre mondiale", isCorrect: true }
    ]
  },
  {
    questionText: "Comment s'appelle la femme dont Tommy Shelby est fou amoureux ?",
    answerOptions: [
      { answerText: "Linda", isCorrect: false },
      { answerText: "Grace", isCorrect: true },
      { answerText: "Esme", isCorrect: false },
      { answerText: "Lizzie", isCorrect: false }
    ]
  },
  {
    questionText: "Pourquoi le Punisher est il le Punisher ? ",
    answerOptions: [
      {
        answerText: "Il est le seul survivant d'une attaque lors d'un pique-nique en famille ",
        isCorrect: true
      },
      { answerText: "Son frère s'est fait tué par Jigsaw", isCorrect: false },
      {
        answerText: "Il a survécu à la guerre du Vietnam et revient se venger",
        isCorrect: false
      },
      {
        answerText: "Il s'est fait agressé dans une boîte et cherche à se venger",
        isCorrect: false
      }
    ]
  },
  {
    questionText: "Dans Old Boy quel partie du corp Oh Dae-su se coupe t'il ?",
    answerOptions: [
      { answerText: "L'oreille droite", isCorrect: false },
      { answerText: "La langue", isCorrect: true },
      { answerText: "La main gauche", isCorrect: false },
      { answerText: "Le petit doigt", isCorrect: false }
    ]
  },
  {
    questionText: "Dans Banshee, qui se fait troué la main dans le premier épisode de la série ?",
    answerOptions: [
      { answerText: "Jesse Pinkman", isCorrect: false },
      { answerText: "Mr Burton, l'assistant de Proctor", isCorrect: false },
      { answerText: "Sugar, le gérant du Bar", isCorrect: false },
      { answerText: "Le vrai shérif, Lucas Hood", isCorrect: true }
    ]
  },
  {
    questionText: "Quel film a inspiré un genre de jeu vidéo très populaire ?",
    answerOptions: [
      { answerText: "Ready Player One", isCorrect: false },
      { answerText: "Battle Royal", isCorrect: true },
      { answerText: "Spider-man", isCorrect: false },
      { answerText: "Shrek", isCorrect: false }
    ]
  },
  {
    questionText: "Quelle est l'unique arme utilisée par Kill Bill ?",
    answerOptions: [
      { answerText: "Un katana", isCorrect: true },
      { answerText: "Un fusil à pompe", isCorrect: false },
      { answerText: "Deux mitraillettes", isCorrect: false },
      { answerText: "Un marteau", isCorrect: false }
    ]
  },
  {
    questionText: "Dans Dexter, qui est le frère du Tueur de Glace ?",
    answerOptions: [
      { answerText: "Hannah McKay", isCorrect: false },
      {
        answerText: "Trinity",
        isCorrect: false
      },
      { answerText: "James Doakes", isCorrect: false },
      {
        answerText: "Dexter Morgan",
        isCorrect: true
      }
    ]
  },
  {
    questionText: "Qu'est ce qui rend le film Hardcore Henry très original ?",
    answerOptions: [
      { answerText: "Il est entièrement en noir et blanc", isCorrect: false },
      {
        answerText: "Il est entièrement filmé avec un Iphone",
        isCorrect: false
      },
      { answerText: "Il est le premier film en 3D", isCorrect: false },
      {
        answerText: "Il est entièrement filmé en mode First-Person",
        isCorrect: true
      }
    ]
  },
  {
    questionText: "Comment est surnommé le héros dans Gladiator ?",
    answerOptions: [
      { answerText: "Maximus", isCorrect: false },
      { answerText: "John", isCorrect: false },
      { answerText: "Gladiator", isCorrect: false },
      { answerText: "L'Espagnol", isCorrect: true }
    ]
  }
]

/*********************** QUIZZ PEUR ***********************/

const questionsPeur = [
  {
    questionText: "Quel film existe vraiment ? ",
    answerOptions: [
      { answerText: "Lundi 06", isCorrect: false },
      { answerText: "Vendredi 13", isCorrect: true },
      { answerText: "Samedi 30", isCorrect: false },
      { answerText: "Mercredi 24", isCorrect: false }
    ]
  },
  {
    questionText: "Quel personnage peut tuer ses victimes dans leur sommeil ?",
    answerOptions: [
      { answerText: "Magneto", isCorrect: false },
      { answerText: "Deadpool", isCorrect: false },
      { answerText: "Freddy", isCorrect: true },
      { answerText: "Gollum", isCorrect: false }
    ]
  },
  {
    questionText: "En quelle année se passe le premier 'Conjuring' ?",
    answerOptions: [
      { answerText: "1971", isCorrect: true },
      { answerText: "1912", isCorrect: false },
      { answerText: "1944", isCorrect: false },
      { answerText: "1936", isCorrect: false }
    ]
  },
  {
    questionText: "Comment s'appelle le jouet tueur du petit Andy Barclay ?",
    answerOptions: [
      { answerText: "Buffy", isCorrect: false },
      { answerText: "Chucky", isCorrect: true },
      { answerText: "Annabelle", isCorrect: false },
      { answerText: "Malory", isCorrect: false }
    ]
  },
  {
    questionText: "Comment s'appelle le fils de Chucky ?",
    answerOptions: [
      { answerText: "Vlad", isCorrect: false },
      { answerText: "Connor", isCorrect: false },
      { answerText: "Mika", isCorrect: false },
      { answerText: "Glen", isCorrect: true }
    ]
  },
  {
    questionText: "Dans 'True Blood', comment s'appelle le vampire d'origine Viking ?",
    answerOptions: [
      { answerText: "Kibwe Akinjide", isCorrect: false },
      { answerText: "Stan Baker", isCorrect: false },
      { answerText: "Eric Northman", isCorrect: true },
      { answerText: "Bill Compton", isCorrect: false }
    ]
  },
  {
    questionText: "Quel est le vrai nom du tueur au puzzle dans la franchise 'Saw' ? ",
    answerOptions: [
      { answerText: "John Kramer", isCorrect: true },
      { answerText: "Vladimir Ruskoff", isCorrect: false },
      { answerText: "Will Alstead", isCorrect: false },
      { answerText: "Mike Levy", isCorrect: false }
    ]
  },
  {
    questionText: "Dans 'The Walkind Dead', comment sont appelés les morts-vivants ?",
    answerOptions: [
      { answerText: "Les zombies", isCorrect: false },
      { answerText: "Les goules", isCorrect: false },
      { answerText: "Les moches", isCorrect: false },
      { answerText: "Les rôdeurs", isCorrect: true }
    ]
  },
  {
    questionText: "Dans la franchise 'Scream', quel est le nom du tueur en série ?",
    answerOptions: [
      { answerText: "Jigsaw", isCorrect: false },
      { answerText: "Ghostface", isCorrect: true },
      { answerText: "Zodiac", isCorrect: false },
      { answerText: "Jhin", isCorrect: false }
    ]
  },
  {
  questionText: "Quelle est l'arme de prédilection de Jason dans 'Vendredi 13' ? ",
    answerOptions: [
      { answerText: "La tronçonneuse", isCorrect: false },
      { answerText: "Le poison", isCorrect: false },
      { answerText: "Les griffes", isCorrect: false },
      { answerText: "La machette", isCorrect: true },
    ]
  }
]

/*********************** QUIZZ COQUINERIES ***********************/

const questionsCoquineries = [
  {
    questionText: "Katsuni c\"est ?",
    answerOptions: [
      { answerText: "Une marque de litière ", isCorrect: false },
      { answerText: "Un personnage d\"animé", isCorrect: false },
      { answerText: "Un phénomene naturel", isCorrect: false },
      { answerText: "Une actrice X", isCorrect: true }
    ]
  },
  {
    questionText: "De quel film vient le personnage de Morphanus ?",
    answerOptions: [
      { answerText: "Les bronzés font du ski", isCorrect: false },
      { answerText: "Les visiteuses", isCorrect: false },
      { answerText: "Matrique", isCorrect: true },
      { answerText: "Austin Popers", isCorrect: false }
    ]
  },
  {
    questionText: "Dans American Pie 2, à quoi correspond Billy Bob ?",
    answerOptions: [
      { answerText: "Une poupée gonflable", isCorrect: false },
      { answerText: "Un vibromasseur", isCorrect: true },
      { answerText: "Un nom de film", isCorrect: false },
      { answerText: "Le surnom d\"un personnage", isCorrect: false }
    ]
  },
  {
    questionText: "Quel nom de film n'est pas un film digne de la catégorie 'Aubergine' ?",
    answerOptions: [
      { answerText: "Cyrano de Vergerac", isCorrect: false },
      { answerText: "Le Père Noël en a une dure", isCorrect: false },
      { answerText: "Le Parfum", isCorrect: true },
      { answerText: "Rodéo sur Juliette", isCorrect: false }
    ]
  },
  {
    questionText: "Lequels de ces films n'existe pas ?",
    answerOptions: [
      { answerText: "French erection", isCorrect: false },
      { answerText: "Ça Glisse au Pays des Merveilles", isCorrect: false },
      { answerText: "Partouzes en haute mer", isCorrect: false },
      { answerText: "Jason Burne", isCorrect: true }
    ]
  },
  {
    questionText: "Dans Austin Powers quel forme prend sa pilosité de torse ? ",
    answerOptions: [
      { answerText: "Un pénis", isCorrect: true },
      { answerText: "Une bouche", isCorrect: false },
      { answerText: "Un revolver", isCorrect: false },
      { answerText: "La tour Montparnasse Infernale", isCorrect: false }
    ]
  },
  {
    questionText: "Qui prononce 'J'aime me beurrer la biscotte' dans OSS 117 ?",
    answerOptions: [
      { answerText: "Princesse Al Tarouk", isCorrect: true },
      { answerText: "Loktar", isCorrect: false },
      { answerText: "Hubert Bonisseur de la Bath", isCorrect: true },
      { answerText: 'Raymond Pelletier', isCorrect: false }
    ]
  },
  {
    questionText: 'Qui ne joue pas dans le film les Valseuses ?',
    answerOptions: [
      { answerText: "Gérard Jugnot", isCorrect: false },
      { answerText: "Gérard Depardieu", isCorrect: false },
      { answerText: "Thierry Lhermitte", isCorrect: false },
      { answerText: "Pierre Richard", isCorrect: true }
    ]
  },
  {
    questionText:
      "Quelle actrice joue la celebre scene d'interrogatoire dans basic instinct ? ",
    answerOptions: [
      { answerText: "Sharon Stone", isCorrect: true },
      { answerText: "Megan Fox", isCorrect: false },
      { answerText: "Adriana Karambeu", isCorrect: false },
      { answerText: "Monica Bellucci", isCorrect: false }
    ]
  },
  {
    questionText:"Avec quoi joue Doofy dans sa chambre dans le film Scary Movie ? ",
    answerOptions: [
      { answerText: "Un aspirateur", isCorrect: true },
      { answerText: "Un hand-spinner", isCorrect: false },
      { answerText: "Une Gameboy", isCorrect: false },
      { answerText: "Une figurine", isCorrect: false }
    ]
  }
]

