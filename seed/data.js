const plants = [
    {
        name: 'Citrus japonica',                              
        height: '120',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['China Southeast','Hainan'],
        tags: ['Citrus'],                            
        imageURL: 'https://bs.floristic.org/image/o/227846bf751a419f50bd00114a282ab2b36785d5'
    },
    {
        name: 'Ononis cristata',                              
        height: '30',                        
        light:  'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['Italy', 'France', 'Morocco', 'Spain', 'Algeria'],
        tags: ['flower'],                            
        imageURL: 'https://bs.floristic.org/image/o/479632a47f3f989d1f29ddf04fd5aa49038430eb'
    },
    {
        name:'Passiflora mixta',                              
        height: '40',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['Bolivia', 'Colombia', 'Ecuador', 'Peru', 'Venezuela'],
        tags: ['Passionflower'],                            
        imageURL: 'https://bs.floristic.org/image/o/43fbf63d0ae4505d5fec2efd139b2d925f2a0d4e'  
    },
    {
        name:'Iberis Carnosa subsp. lagascana',                              
        height: '20',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['France', 'Spain'],
        tags: ['Flower'],                            
        imageURL: 'https://bs.floristic.org/image/o/20d7117cc0909cee8e3541b01c79ea01847e902c' 
    },
    {
        name: 'Clematis vitalba',                              
        height: '1250',                        
        light: 'Full daylight without direct sunlight (10 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['Iran', 'Laos', 'Sulawesi', 'Albania', 'Bulgaria','Greece', 'Romania', 'Turkey-in-Europe', 'Yugoslavia', 'Czechoslovakia', 'Turkey', 'Lebanon-Syria', 'Italy', 'Sardegna', 'Sicilia', 'Corse, France', 'Great Britain', 'Kriti', 'Morocco', 'Portugal', 'Spain', 'Algeria', 'Afghanistan','Krym','Transcaucasus','Ukraine','Austria','Belgium','Germany', 'Hungary', 'Netherlands', 'North Caucasus','Switzerland'],
        tags: ["White flower"],                            
        imageURL: 'https://bs.floristic.org/image/o/ca19ff5355c8f58e8522bc2390bf14cf77da93fb' 
    },
    {
        name: 'Nepeta cataria',                              
        height: '100',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['Iran', 'Pakistan', 'China South-Central', 'Nepal','West Himalaya','Albania','Bulgaria','Greece','Romania','Yugoslavia','Turkey','Iraq','Lebanon-Syria','Italy','Sicilia','Baleares','Corse, France','Portugal','Spain','Afghanistan','Korea','China North-Central','Kazakhstan','Krym','South European Russi','Tadzhikistan','Transcaucasus','Ukraine','Uzbekistan','Baltic States','Belarus','Central European Rus','East European Russia','North Caucasus','North European Russi','Northwest European R','Switzerland','West Siberia','Altay','Kirgizstan','Xinjiang','Turkmenistan'],
        tags:  ['Visible', 'Purple flowers', 'Green foliage'],                            
        imageURL: 'https://bs.floristic.org/image/o/220023d24ad316fdcfc29fdff3141feeca4a0c26' 
    },
    {
        name: 'Lamium amplexicaule',                              
        height:'120',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'autumn',               
        native: ['Egypt','Ethiopia','Iran','Pakistan','Saudi Arabia','Sinai','China South-Central','China Southeast','East Himalaya','Nepal','West Himalaya','Albania','Bulgaria','Greece','Romania','Turkey-in-Europe','Yugoslavia','Czechoslovakia','Turkey','Iraq','Northwest European R','Norway','Poland','Sweden','Switzerland','Tunisia','West Siberia','Irkutsk','Kirgizstan','Krasnoyarsk','Yakutskiya','Qinghai','Xinjiang','Turkmenistan'],
        tags: ['flowers', 'foliage', 'fruits'],                            
        imageURL:  'https://bs.floristic.org/image/o/3074f8a623d725f9504a68e0822a2058c7c06415'
    },
    {
        name: 'Althaea cannabina',                              
        height: '30',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'Winter',               
        native: ['Iran','Albania','Bulgaria','Greece','Romania','Turkey-in-Europe','Yugoslavia','Czechoslovakia','Turkey','Iraq','Lebanon-Syria','Italy','Sardegna','Sicilia','France','Portugal','Spain','Afghanistan','Kazakhstan','Krym','Tadzhikistan','Transcaucasus','Ukraine','Uzbekistan','Hungary','Kirgizstan','Turkmenistan'],
        tags: ['foliage', 'flowers', 'fruits'],                            
        imageURL:  'https://bs.floristic.org/image/o/2bc796d9a50d2f64d75f327c3aa7be9090ec7c48'
    },
    {
        name:'Abies grandis',                              
        height: '4572',                        
        light: 'Full daylight with some direct sunlight (50 000 lux)',                               
        floweringTime: 'Autumn',               
        native: ['Arizona','New Mexico','Nevada','California','British Columbia','Colorado','Washington','Oregon', 'Alaska','Alberta','Idaho','Montana','Northwest Territorie','Wyoming','Yukon'],
        tags: ['Persistent during winter', 'Medium','foliage','fruits'] ,                            
        imageURL: 'https://bs.floristic.org/image/o/eccce175c87ebada7dbfa8611049343d9a090c3c'
    },
    {
        name: 'Iris sibirica',                              
        height: '40',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['Bulgaria', 'Romania','Yugoslavia','Czechoslovakia','Turkey','Italy','France','Kazakhstan','South European Russi','Transcaucasus','Ukraine','Austria','Baltic States','Belarus', 'Central European Rus','East European Russia','Germany','Hungary','North Caucasus','North European Russi','Northwest European R','Poland','Switzerland','West Siberia','Altay','Krasnoyarsk','Mongolia'],
        tags: ['foliage','Blue flowers','fruits','small'],                            
        imageURL: 'https://bs.floristic.org/image/o/6f45044d11b80e84508547dd1d6b15ce83805e2d' 
    },
    {
        name: 'Cymbalaria muralis',                              
        height: '23',                        
        light: 'Cloudy day (5 000 lux)',                               
        floweringTime: 'Autumn',               
        native: ['Austria','France','Italy','Switzerland','Yugoslavia'],
        tags:['foliage','Blue flowers','fruits','small'],                            
        imageURL: 'https://bs.floristic.org/image/o/2cdc3967e62b72ebeaaff9a1a01d5a263dcc4169'   
    },
    {
        name: 'Abies pinsapo',                              
        height: '2500',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                              
        floweringTime: 'Summer',               
        native: ['Spain', 'Morocco'],
        tags: ['flowers', 'foliage', 'fruits'],                            
        imageURL: 'https://bs.floristic.org/image/o/8c7b2d7e28ddf98b4a080f1e21c19e1041882b88' 
    },
    {
        name: 'Abies concolor',                              
        height: '3657',                        
        light: 'Full daylight with some direct sunlight (50 000 lux)',                               
        floweringTime: 'Winter',               
        native: ['Mexico Northeast','Arizona','Mexico Northwest','New Mexico','Nevada','California','Colorado','Oregon','Idaho','Utah','Wyoming'],
        tags: ['Persistent during winter','Medium','foliage','fruits','Yellow flowers'],                            
        imageURL: 'https://bs.floristic.org/image/o/86a27975c82a298212f415657761ff83c6ebb4a8' 
    },
    {
        name: 'Phlox divaricata',                              
        height: '91',                        
        light: 'Full daylight with some direct sunlight (50 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['Alabama','Kentucky','Tennessee','Indiana','Missouri','New York','Vermont','Minnesota'],
        tags: ['Not persistent','Medium','foliage','fruits','flowers'],                            
        imageURL: 'https://bs.floristic.org/image/o/c6a915a717fe9bfd0f86c032b1274f72af95eaea' 
    },
    {
        name: 'Picea pungens',                              
        height: '3048',                        
        light: 'Full daylight with some direct sunlight (50 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['Arizona','New Mexico','Colorado','Idaho','Montana','Utah','Wyoming'],
        tags:['Persistent during winter','Medium','foliage','fruits','flowers'],                            
        imageURL: 'https://bs.floristic.org/image/o/e9526bd0c11dd0fd99b8071b899af4b3215c5a5f'  
    },
    {
        name: 'Nymphaea candida',                              
        height: '30',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['West Himalaya','Romania','Czechoslovakia','France','Kazakhstan','South European Russi','Transcaucasus','Ukraine','Uzbekistan','Austria','Baltic States','Belarus','Belgium','Central European Rus','East European Russia','Finland','Germany','Netherlands', 'North European Russi','Northwest European R','Norway','Poland','Sweden','West Siberia','Altay','Irkutsk','Krasnoyarsk','Mongolia','Xinjiang'],
        tags: ['flower', 'foliage', 'humidity', 'fruits'],                            
        imageURL: 'https://bs.floristic.org/image/o/f758d52d8f128569f1c97a4fab084c280b98156f'
    },
    {
        name: 'Carex intumescens',                              
        height: '91',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['Florida','Alabama','Illinois','Kentucky','Tennessee','Texas','Georgia','South Carolina','Louisiana','Mississippi','Virginia','Oklahoma','Arkansas','Delaware','District of Columbia','Indiana','Iowa','Maryland','Michigan','Missouri','New Jersey','New York','North Carolina','Ohio','Ontario','Pennsylvania','Québec','Vermont','West Virginia','Connecticut','Maine','Masachusettes','New Hampshire, Rhode I','Minnesota','Wisconsin','Manitoba','New Brunswick','Nova Scotia','Labrador','Newfoundland','Prince Edward I','South Dakota'],
        tags: ['flowers','not persistent','medium','foliage','fruits'],                            
        imageURL: 'https://bs.floristic.org/image/o/12d8ce453a73e99d69e35825148902cec599ef84' 
    },
    {
        name: 'Anacamptis laxiflora',                              
        height: '123',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['Iran', 'Albania','Greece','Turkey-in-Europe','Yugoslavia','Turkey','Iraq','Lebanon-Syria','Palestine','East Aegean Is','Italy','Sardegna','Sicilia','Corse','France','Kriti','Morocco','Portugal','Spain','Afghanistan','Cyprus','Kazakhstan','Tadzhikistan','Ukraine','Uzbekistan','Belgium','Germany','Switzerland'],
        tags: ['Purple flower', 'foliage', 'fruits'],                            
        imageURL: 'https://bs.floristic.org/image/o/2ceef1e285a1fef0b339ed2ce8a17de7b26f724f' 
    },
    {
        name: 'Claytonia sibirica',                              
        height: '56',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['California','British Columbia','Washington','Oregon','Kamchatka','Alaska','Idaho','Montana','Aleutian Is'],
        tags: ['candy-flower','foliage','flower','average','fruits'],                            
        imageURL: 'https://bs.floristic.org/image/o/573a75ab0f41607180bc48d084cdcef52cbc196f'
    },
    {
        name: 'Erigeron sumatrensis',                              
        height: '65',                        
        light: 'Full daylight with a lot of direct sunlight (75 000 lux)',                               
        floweringTime: 'Spring',               
        native: ['Nicaragua','Panamá','Bolivia','Brazil North','Brazil Northeast','Brazil Southeast','Brazil West-Central','Colombia','Ecuador','El Salvador','Honduras','Brazil South','Peru','Venezuela','Belize','Costa Rica','Guatemala','Guyana','Mexico Southeast','Paraguay','Argentina Northeast','Uruguay','Argentina Northwest'],
        tags: ['White','Yellow flowers','foliage','fruits'],                            
        imageURL: 'https://bs.floristic.org/image/o/94a698a9fce276f4b9eaae9ff69d45e7b8920998'
    },
    {
        name: "Picea laxa",
        floweringTime: "Non-flowering",
        height: "4166",
        imageURL: "https://bs.floristic.org/image/o/dbba763d09342f393f024e8edfcd73cd2f08859f",
        light: "Full daylight",
        native: "USA"
      },
      {
      name: "Lavandula latifolia",
      height: "66",
      light: "Full daylight with a lot of direct sunlight",
      floweringTime: "Summer",
      native: "France",
      imageURL: "https://bs.floristic.org/image/o/5a5ace80216cd8376fe03d0bc07ff3941918ed5e"
    },
    {
        name: "Echeveria elegans",
        height: "10",
        light: "Full sun",
        floweringTime: "Summer",
        native: "Mexico",
        imageURL: "https://bs.floristic.org/image/o/c2408475a0a634851900e8e72488a40d00d1f4de"
      },
      {
        name: "Monstera deliciosa",
        height: "2000",
        light: "Bright, indirect sunlight",
        floweringTime: "Non-flowering",
        native: "Mexico",
        imageURL: "https://bs.floristic.org/image/o/49e00fd760f17781214aab972df77c65c2cb475f"
      },
      {
        name: "Hydrangea macrophylla",
        height: "121",
        light: "Full sun",
        floweringTime: "Summer",
        native: "Japan",
        imageURL: "https://bs.floristic.org/image/o/6427df08148d23bd58c332b1be6215c9700b69a9"
      },
      {
        name: "Codiaeum variegatum",
        height: "30",
        light: "Bright, indirect light",
        floweringTime: "Autumn",
        native: "Malaysia",
        imageURL: "https://bs.floristic.org/image/o/02536f914f925bba5998df4c01c8c6870b68ed8a"
      },
      {
        name: "Fragaria vesca",
        height: "20",
        light: "Indirect light",
        floweringTime: "Summer",
        native: "Russia",
        imageURL: "https://bs.floristic.org/image/o/d1c3c3f0c1192d34b8fe1dec4e0f315b54eed87c"
      },
      {
        name: "Paeonia mascula",
        height: "75",
        light: "Full daylight without direct sunlight ",
        floweringTime: "Summer",
        native: "France",
        imageURL: "https://bs.floristic.org/image/o/e6b560e26ff2d2b8004d9e49088feebbf5bbcf90"
      },
      {
        name: "Hyacinthus orientalis",
        height: "15",
        light: "Full daylight with some direct sunlight",
        floweringTime: "Spring",
        native: "Israel",
        imageURL: "https://bs.floristic.org/image/o/2200abffbe1264c1be7c52e942543496da66f431"
      },
      {
        name: "Phalaenopsis amabilis",
        height: "30",
        light: "Indirect sunlight",
        floweringTime: "Winter",
        native: "Malaysia",
        imageURL: "https://bs.floristic.org/image/o/54d56aefbc7b194c6591d114e6c9012bc2c9ffb6"
      },
      {
        name: "Rosa chinensis",
        height: "100",
        light: "Semi-shade",
        floweringTime: "Summer",
        native: "China",
        imageURL: "https://bs.floristic.org/image/o/ecba96b634c69a8b9990f2faae4be0f590b209a6"
      },
      {
        name: "Goeppertia crocata",
        height: "40",
        light: "Bright but indirect sunlight",
        floweringTime: "Summer",
        native: "Brazil",
        imageURL: "https://bs.floristic.org/image/o/820b67e270e5b8c51930191435df09e583d3694a"
      },
      {
        name: "Ipheion uniflorum",
        height: "15",
        light: "Partial shade",
        floweringTime: "Spring",
        native: ["Argentina, Uruguay,Mexico"],
        imageURL: "https://bs.floristic.org/image/o/dbfd45c7044758b2680e9333fc9251d12049f17f"
      },
      {
        name: "Crassula sarcocaulis",
        height: "60",
        light: "Full sun",
        floweringTime: "Autumn",
        native: "South Africa",
        imageURL: "https://bs.floristic.org/image/o/c0d475a110777f70480dfba304abe428170f067b"
      },
      {
        name: "Coriandrum sativum",
        height: "50",
        light: "Full daylight with some direct sunlight",
        floweringTime: "Spring",
        native: ["Turkey, Pakistan"],
        imageURL: "https://bs.floristic.org/image/o/b1370347c4cd41e2820f857c66310bf6c6454687"
      }
  ];
  module.exports = {plants};