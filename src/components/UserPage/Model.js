const Models = {
    'Acura': ['MDX', 'RDX', 'TLX', 'NSX'],
    'Alfa Romeo': ['Giulia', 'Stelvio'],
    'Aston Martin': ['DB11', 'Vantage'],
    'Audi': [
        'A3', 'A4', 'A6', 'Q3', 'Q5',
        'A1', 'A2', 'A5', 'A7', 'A8',
        'Q2', 'Q4', 'Q7', 'Q8', 'Q9',
        'TT', 'R8', 'S3', 'S4', 'S5',
        'S6', 'S7', 'S8', 'RS3', 'RS4',
        'RS5', 'RS6', 'RS7', 'RS Q3', 'e-tron',
        '100', '200', 'V8', 'Ur-Quattro', 'Cabriolet'
      ],      
    'Bentley': ['Continental GT', 'Bentayga'],
    'BMW': [
        '3 Series', '5 Series', '7 Series', 'X3', 'X5',
        '1 Series', '2 Series', '4 Series', '6 Series', '8 Series',
        'X1', 'X2', 'X4', 'X6', 'X7',
        'Z3', 'Z4', 'Z8', 'M2', 'M3',
        'M4', 'M5', 'M6', 'X3 M', 'X4 M',
        'X5 M', 'X6 M', 'i3', 'i4', 'iX',
        'i8', 'M1', 'CSL', 'E9', 'E21',
        'E30', 'E36', 'E46', 'E90', 'E39'
      ],      
    'Bugatti': ['Chiron', 'Veyron'],
    'Buick': ['Encore', 'Envision', 'Enclave'],
    'Cadillac': ['ATS', 'CT5', 'Escalade', 'XT4', 'XT6'],
    'Chevrolet': [
        'Camaro', 'Equinox', 'Malibu', 'Silverado', 'Tahoe',
        'Impala', 'Corvette', 'Traverse', 'Suburban', 'Blazer',
        'Colorado', 'Express', 'Cruze', 'Sonic', 'Spark',
        'Avalanche', 'Trailblazer', 'HHR', 'Cobalt', 'Captiva',
        'Monte Carlo', 'Nova', 'Chevelle', 'El Camino', 'Corvair',
        'Optra', 'Venture', 'Tracker', 'Uplander', 'Prizm',
        'Cavalier', 'Celebrity', 'S-10', 'Lumina', 'Corsica', 'Beretta'
      ],      
    'Chrysler': ['300', 'Pacifica'],
    'Citroën': ['C3', 'C5', 'C4 Cactus'],
    'Dodge': ['Challenger', 'Charger', 'Durango'],
    'Ferrari': ['488', 'F8 Tributo', 'Portofino'],
    'Fiat': ['500', 'Panda'],
    'Ford': [
        'F-150', 'Focus', 'Mustang', 'Escape', 'Explorer',
        'Fiesta', 'Ranger', 'Edge', 'Expedition', 'EcoSport',
        'Bronco', 'Transit', 'Taurus', 'Fusion', 'Flex',
        'C-Max', 'GT', 'Excursion', 'Freestyle', 'Windstar',
        'Probe', 'Aspire', 'Mondeo', 'Ka', 'Maverick', 'Thunderbird',
        'Courier', 'Puma', 'Escort', 'Galaxy', 'S-Max', 'B-Max'
      ],      
    'Genesis': ['G70', 'G80', 'GV80'],
    'GMC': ['Sierra', 'Yukon'],
    'Honda': [
        'Civic', 'Accord', 'CR-V', 'Pilot',
        'Fit', 'HR-V', 'Insight', 'Odyssey', 'Ridgeline',
        'Clarity', 'Crosstour', 'Element', 'CR-Z', 'Passport',
        'S2000', 'Integra', 'Prelude', 'Civic Type R', 'Accord Crosstour',
        'FR-V', 'Shuttle', 'Airwave', 'Avancier', 'NSX', 'City',
        'Jazz', 'Stream', 'Spirior', 'Domani', 'Mobilio', 'CR-X'
      ],      
    'Hyundai': [
        'Elantra', 'Tucson', 'Santa Fe',
        'Sonata', 'Accent', 'Kona', 'Veloster', 'Palisade',
        'Genesis', 'Ioniq', 'Nexo', 'Azera', 'Equus',
        'Santro', 'Getz', 'Terracan', 'Starex', 'Veracruz',
        'Entourage', 'Pony', 'Excel', 'Scoupe', 'Pony X2',
        'Elantra GT', 'Sonata Hybrid', 'Veloster N', 'Tiburon',
        'XG300', 'XG350', 'Genesis Coupe', 'Gallop', 'Centennial'
      ],
      
    'Infiniti': [
        'Q50', 'QX60',
        'Q60', 'QX80', 'QX50', 'QX70', 'QX30',
        'M30', 'M35', 'M45', 'M37', 'M56', 'M30d',
        'Q40', 'Q70', 'Q70L', 'J30', 'I30', 'I35',
        'FX35', 'FX45', 'EX35', 'EX37', 'FX37', 'FX50',
        'QX4', 'QX56', 'QX70', 'JX35', 'QX50', 'QX70',
        'QX30', 'QX50', 'QX60', 'QX70', 'QX80'
      ],      
    'Jaguar': ['XE', 'F-PACE'],
    'Jeep': ['Wrangler', 'Cherokee', 'Grand Cherokee'],
    'Kia': ['Forte', 'Optima', 'Sorento', 'Telluride'],
    'Lamborghini': ['Huracán', 'Aventador'],
    'Land Rover': ['Range Rover', 'Discovery'],
    'Lexus': [
        'ES', 'RX', 'NX', 'LS',
        'IS', 'GS', 'GX', 'LX', 'RC',
        'LC', 'CT', 'UX', 'SC', 'HS',
        'LF-A', 'ES Hybrid', 'RX Hybrid', 'NX Hybrid', 'LS Hybrid',
        'IS F', 'GS F', 'LS F', 'RC F', 'LC F', 'CT Hybrid',
        'RX L', 'UX Hybrid', 'HS Hybrid', 'GX Hybrid', 'LC Hybrid'
      ],      
    'Lincoln': [
        'Navigator', 'Aviator',
        'Continental', 'MKZ', 'Corsair', 'Nautilus', 'Mark LT',
        'MKS', 'MKC', 'Town Car', 'Blackwood', 'LS', 'Zephyr',
        'Versailles', 'Capri', 'Premier', 'Cosmopolitan', 'Custom', 'K-Series',
        'Marquis', 'Marauder', 'Comet', 'Custom Deluxe', 'Navigator L', 'Versailles', 'MKX'
      ],      
    'Maserati': [
        'Ghibli', 'Levante',
        'Quattroporte', 'GranTurismo', 'GranCabrio', 'Mistral', 'Biturbo',
        'Spyder', '3200 GT', '4200 GT', 'Coupé', 'GranSport',
        'Khamsin', 'Bora', 'Indy', 'Shamal', 'Karif', 'Kyalami',
        'Merak', 'Birdcage 75th', 'Alfieri', 'Maserati MC12', 'Boomerang'
      ],      
    'Mazda': [
        'Mazda3', 'Mazda6', 'CX-5',
        'MX-5 Miata', 'CX-9', 'CX-3', 'RX-8', 'MX-6',
        'RX-7', '626', 'Tribute', 'Millenia', 'Protege',
        'MPV', 'RX-3', 'RX-4', 'RX-6', 'AZ-1', 'Premacy',
        'Verisa', 'Bongo', 'Lantis', 'Eunos Cosmo', '323',
        'Navajo', '929', 'CX-4', 'Atenza', 'CX-7', 'Roadster'
      ],
    'McLaren': [
        '720S', 'Senna',
        'P1', '570S', '650S', 'MP4-12C', '675LT',
        'GT', '540C', '600LT', 'Speedtail', 'Mercedes-Benz SLR McLaren',
        'F1', '12C', '625C', '650S Sprint', '650S Can-Am',
        '570GT', '570S Sprint', '720S GT3', '720S GT3X', 'Sabre'
      ],      
    'Mercedes-Benz': [
        'C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE',
        'A-Class', 'B-Class', 'CLA', 'CLS', 'GLA',
        'GLB', 'GLC Coupe', 'GLC Coupe', 'GLC Coupe', 'GLS',
        'SLC', 'SLK', 'SL', 'SLS AMG', 'AMG GT',
        'G-Class', 'GLK', 'GL-Class', 'R-Class', 'V-Class',
        'M-Class', 'ML-Class', 'GLS Coupe', 'GLK Coupe', 'GLC Coupe'
      ],      
    'Mini': ['Cooper', 'Countryman'],
    'Mitsubishi': [
        'Outlander', 'Eclipse Cross',
        'Lancer', 'Mirage', 'Pajero', 'Montero', 'Galant',
        '3000GT', 'Evo', 'Starion', 'Raider', 'Endeavor',
        'Diamante', 'Magna', 'Sigma', 'Precis', 'Cordia',
        'Chariot', 'Delica', 'RVR', 'Grandis', 'Space Star'
      ],      
    'Nissan': [
        'Altima', 'Maxima', 'Rogue', 'Murano',
        '370Z', 'GT-R', 'Sentra', 'Versa', 'Juke',
        'Pathfinder', 'Armada', 'Kicks', 'Leaf', 'Quest',
        'Frontier', 'Titan', '240SX', 'Skyline', 'Silvia',
        'Datsun 510', '350Z', 'Pulsar', 'Xterra', 'Rogue Sport'
      ],   
    'Pagani': ['Huayra', 'Zonda'],
    'Porsche': [
        '911', 'Cayman', 'Boxster', 'Panamera',
        'Macan', 'Cayenne', 'Taycan', '718 Cayman', '718 Boxster',
        '918 Spyder', '959', '944', '928', '924',
        '356', '550 Spyder', '914', 'Carrera GT'
      ],      
    'Ram': ['1500', '2500'],
    'Renault': ['Clio', 'Megane'],
    'Rolls-Royce': ['Phantom', 'Cullinan'],
    'Saab': [
        '900', '9000', '9-3', '9-5', 'Sonett', '96',
        '99', '95', '92', '93', '94X', '9-4X', '600'
      ],      
    'Subaru': [
        'Impreza', 'Outback', 'Forester',
        'WRX', 'BRZ', 'Crosstrek', 'Legacy', 'Ascent',
        'Baja', 'Tribeca', 'SVX', 'XT', 'Justy',
        'Sambar', 'Vivio', 'Leone', 'Rex', 'Traviq',
        'Alcyone', 'Loyale', 'DL/GL', '1800', '360', 'WRX STI'
      ],      
    'Suzuki': ['Swift', 'Vitara'],
    'Tesla': ['Model 3', 'Model S', 'Model X', 'Model Y'],
    'Toyota': [
        'Camry', 'Corolla', 'RAV4', 'Highlander',
        'Prius', 'Sienna', 'Tacoma', 'Tundra', '4Runner',
        'Land Cruiser', 'Avalon', 'C-HR', 'Yaris', 'Matrix',
        'Celica', 'Supra', 'MR2', 'Echo', 'FJ Cruiser',
        'Venza', 'Solara', 'Starlet', 'Tercel', 'Paseo'
      ],      
    'Volkswagen': [
        'Golf', 'Passat', 'Tiguan',
        'Jetta', 'Beetle', 'Atlas', 'Arteon', 'CC',
        'Touareg', 'Scirocco', 'Rabbit', 'Corrado', 'Phaeton',
        'Eos', 'Type 2', 'Type 3', 'Type 4', 'Karmann Ghia',
        'Golf GTI', 'Golf R', 'Cabriolet', 'New Beetle', 'T-Roc',
        'Fox', 'Vento', 'Bora', 'Up!', 'Polo', 'Derby', 'Lupo'
      ],      
    'Volvo': ['S60', 'XC40', 'XC60', 'XC90'],
  };
  

  export default Models