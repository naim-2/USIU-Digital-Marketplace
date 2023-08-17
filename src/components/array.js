const array = [
    {
        id:'1', 
        type: 'clothes',
        image: require('../images/polo.png'),
        price:'Ksh. 550',
        name:'Polo T-shirt',
        desc:'We custom-make polo tshirt. We also do branding on variety of colors.',
        loc:'Nairobi, Nairobi Central',
        gender:'Unisex',
        size:'S, M, L, XL',
        seller: 'nsalim',
        phonenumber: '0794321011',
        email: 'nsalim@gmail.com',
        condition: 'New',
    },
    {
        id:'2', 
        type: 'clothes',
        image: require('../images/baggy-jeans.png'),
        price:'Ksh. 1,500',
        name:'Baggy Jeans Men',
        desc:'The baggy jeans brand new from Turkey best material. I am ready to meet you.',
        loc:'Nairobi, Nairobi Central',
        gender:'Men',
        size:'M, L, XL, XXL, 3XL, 4XL, 5XL',
        seller: 'nsalim',
        phonenumber: '0794321011',
        email: 'nsalim@gmail.com',
        condition: 'New',
    },
    /*{
        id:'3',
        type: 'clothes',
        image: require('../images/chef2.png'),
        price:'Ksh. 1,200',
        name:'Chef Uniforms',
        desc:'We specialize in the supply of Chef uniforms and countrywide delivery.',
        loc:'Nairobi, Nairobi Central',
        gender:'Unisex',
        size:'S, M, L, XL',
        seller: 'nsalim',
        phonenumber: '0794321011',
        email: 'nsalim@gmail.com',
        condition: 'New',
    },*/
    {
        id:'4',
        type: 'bags',
        image: require('../images/lady-handbag.png'),
        price:'Ksh. 1,500',
        name:'Lady Handbag',
        desc:'The bag measures 33cm by 18cm by 34cm height. Our shop is at magic business centre along Ronald Ngala street.',
        loc:'Nairobi, Embakasi',
        gender:'Women',
        size:'Patent Leather',
        seller: 'alit',
        phonenumber: '0789908732',
        email: 'alit@gmail.com',
        condition: 'Slightly Used',
    },
    {
        id:'5',
        type: 'bags',
        image: require('../images/hand-luggage.png'),
        price:'Ksh. 2,800',
        name:'Hand Luggage - Small Suitcase',
        desc:'Hardshell and lightweight, made of fiber material, 3 coded lock, heavy duty handles, 360°rotation wheels.',
        loc:'Nairobi, Embakasi',
        gender:'Unisex',
        size:'Plastic',
        seller: 'alit',
        phonenumber: '0789908732',
        email: 'alit@gmail.com',
        condition: 'New',
    },
    {
        id:'6',
        type: 'bags',
        image: require('../images/gym-bag.png'),
        price:'Ksh. 1,500',
        name:'Gym/Sports Bag',
        desc:'We are in Nairobi cbd Odeon Tsavo Road maximum business unit. We do country wide delivery.',
        loc:'Nairobi, Eastleigh',
        gender:'Men',
        size:'Fabric',
        seller: 'muna',
        phonenumber: '0765238810',
        email: 'muna@gmail.com',
        condition: 'New',
    },
    {
        id:'7',
        type: 'laptops',
        image: require('../images/macbook-air.png'),
        price:'Ksh. 30,000',
        name:'Apple MacBook Air',
        desc:'MacBook Air 2015, Core i5, 8gb RAM, 128SSD, 11-inch screen size.',
        loc:'Nairobi, Eastleigh',
        gender:'Apple',
        size:'128 GB SSD, 8 GB RAM',
        seller: 'muna',
        phonenumber: '0765238810',
        email: 'muna@gmail.com',
        condition: 'Refurbished',
    },
    {
        id:'8',
        type: 'laptops',
        image: require('../images/elitebook.png'),
        price:'Ksh. 50,000',
        name:'HP EliteBook X360 1030 G2',
        desc:'Hp Elitebook 1030G2 core i5 RAM 8GB/256SSD, display size 13.3 inches, comes with Windows 10 & Office 2016.',
        loc:'Nairobi, Eastleigh',
        gender:'HP',
        size:'256 GB SSD, 8 GB RAM',
        seller: 'muna',
        phonenumber: '0765238810',
        email: 'muna@gmail.com',
        condition: 'Refurbished',
    },
    {
        id:'9',
        type: 'laptops',
        image: require('../images/omen.png'),
        price:'Ksh. 126,000',
        name:'HP Omen 15',
        desc:'HP omen 15-en1507na 15.6" gaming laptop - AMD ryzen 7 5800h processor - RAM: 16 GB / storage.',
        loc:'Nairobi, Nairobi Central',
        gender:'HP',
        size:'1 TB SSD, 16 GB RAM',
        seller: 'nsalim',
        phonenumber: '0794321011',
        email: 'nsalim@gmail.com',
        condition: 'Refurbished',
    },
    {
        id:'10',
        type: 'shoes',
        image: require('../images/max90.png'),
        price:'Ksh. 3,800',
        name:'Nike Air Max 90',
        desc:'Quality Nike AirMax Sneakers available in different colors and sizes. Delivery available country wide within 24 hours.',
        loc:'Nairobi, Nairobi Central',
        gender:'Unisex',
        size:'45, 40',
        seller: 'nsalim',
        phonenumber: '0794321011',
        email: 'nsalim@gmail.com',
        condition: 'New',
    },
    {
        id:'11',
        type: 'shoes',
        image: require('../images/blades.png'),
        price:'Ksh. 3,700',
        name:'Adidas Blades',
        desc:'We do rider delivery within Nairobi and country wide delivery. We are in Nairobi cbd Odeon Tsavo Road.',
        loc:'Nairobi, Embakasi',
        gender:'Men',
        size:'41, 43, 45, 42, 44, 40',
        seller: 'alit',
        phonenumber: '0789908732',
        email: 'alit@gmail.com',
        condition: 'New',
    },
    {
        id:'12',
        type: 'shoes',
        image: require('../images/leatherboots.png'),
        price:'Ksh. 2,700',
        name:'Long Vintage Leather Boots',
        desc:'Vintage Backle Boots. Sizes; 37 38 39 40 41 42. Colors: Brown; Chocolate & Black.',
        loc:'Nairobi, Nairobi Central',
        gender:'Women',
        size:'37, 38, 39, 40, 41, 42',
        seller: 'nsalim',
        phonenumber: '0794321011',
        email: 'nsalim@gmail.com',
        condition: 'New',
    },
    
    {
        id:'13',
        type: 'smartphones',
        image: require('../images/spark10.png'),
        price:'Ksh. 23,000',
        name:'Tecno Spark 10 Pro',
        desc:'8GB RAM, 128GB Storage, Battery: 5,000 mAh, Display: 6.8 inch, Dual SIM, Android 13.',
        loc:'Nairobi, Nairobi Central',
        gender:'Tecno',
        size:'128 GB ROM, 8 GB RAM',
        seller: 'nsalim',
        phonenumber: '0794321011',
        email: 'nsalim@gmail.com',
        condition: 'New',
    },
    {
        id:'14',
        type: 'smartphones',
        image: require('../images/iphone13.png'),
        price:'Ksh. 100,000',
        name:'Apple iPhone 13',
        desc:'iPhone 13, 256 GB storage. Buy and use condition. 6 months warranty. Only charger cable included.',
        loc:'Nairobi, Nairobi Central',
        gender:'Apple',
        size:'256 GB ROM, 6 GB RAM',
        seller: 'nsalim',
        phonenumber: '0794321011',
        email: 'nsalim@gmail.com',
        condition: 'Refurbished',
    },
    {
        id:'15',
        type: 'smartphones',
        image: require('../images/zfold3.png'),
        price:'Ksh. 115,000',
        name:'Samsung Galaxy Z Fold 3',
        desc:'Samsung fold 3 256gb silver. Extremely clean with no scratch. Quick sale.',
        loc:'Nairobi, Embakasi',
        gender:'Samsung',
        size:'256 GB ROM, 12 GB RAM',
        seller: 'alit',
        phonenumber: '0789908732',
        email: 'alit@gmail.com',
        condition: 'Used',
    },
    
    {
        id:'16',
        type: 'watches',
        image: require('../images/rolexoyster.png'),
        price:'Ksh. 5,000',
        name:'Rolex Daytona Oyster Perpetual',
        desc:'Working Chronograph, 24 hour time, metal smart fit adjustable belt, TT bezel, 7A.',
        loc:'Nairobi, Nairobi Central',
        gender:'Men',
        size:'Analog',
        seller: 'nsalim',
        phonenumber: '0794321011',
        email: 'nsalim@gmail.com',
        condition: 'New',
    },
    {
        id:'17',
        type: 'watches',
        image: require('../images/gshocksports.png'),
        price:'Ksh. 8,000',
        name:'G-Shock Sports Watch',
        desc:'G-shock now in Metal Look With Budget Article. Has 4 alarms. Supports both analog and digital.',
        loc:'Nairobi, Eastleigh',
        gender:'Men',
        size:'Analog and Digital',
        email: 'muna@gmail.com',
        seller: 'muna',
        phonenumber: '0765238810',
        condition: 'New',
    },
    {
        id:'18',
        type: 'watches',
        image: require('../images/seikoprospex.png'),
        price:'Ksh. 35,000',
        name:'Seiko Prospex Speedtimer Watch',
        desc:'Curved sapphire crystal, anti-reflective coating on inner surface, three-fold clasp with push button release.',
        loc:'Nairobi, Nairobi Central',
        gender:'Men',
        size:'Analog',
        seller: 'nsalim',
        phonenumber: '0794321011',
        email: 'nsalim@gmail.com',
        condition: 'New',
    },
]
  
export default array