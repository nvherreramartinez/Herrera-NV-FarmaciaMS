

const productos = [
    {
        id: '1',
        name: 'Amoxidal',
        stock: 10,
        price: 5080,
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        img: '/public/amoxidal.jpg',
        category: 'Antibioticos'
    },
    {
        id: '2',
        name: 'Novalgina',
        stock: 13,
        price: 8699,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        img: '/public/Novalgina.jpg',
        category: 'Antifebril'
    },
    {
        id: '3',
        name: 'Actron',
        stock: 8,
        price: 6599,
        description: 'Lorem ipsum dolor sit amet consectetur',
        img: '/public/Actron.jpg',
        category: 'Antiinflamatorio'
    },
    {
        id: '4',
        name: 'Tafirol',
        stock: 3,
        price: 2560,
        description: 'Lorem ipsum dolor sit amet consectetur',
        img: '',
        category: 'Antiinflamatorio'
    },
    {
        id: '5',
        name: 'Dipirona',
        stock: 10,
        price: 2899,
        description: 'Lorem ipsum dolor sit amet consectetur',
        img: '',
        category: 'Antifebril'
    },
    {
        id: '6',
        name: 'Azitromicina',
        stock: 2,
        price: 14599,
        description: 'Lorem ipsum dolor sit amet consectetur',
        img: '/farmacia-ms/public/Actron.jpg',
        category: 'Antibiótico'
    }
]
export const getProducts = (id)=>{
    let error=false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let products = products.find((item)=> item.id === id)
                resolve(products)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },3000)
    })
}