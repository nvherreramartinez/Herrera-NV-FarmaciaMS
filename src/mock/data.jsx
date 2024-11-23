const productos = [
    {
        id: '1',
        name: 'Amoxidal',
        atc: 'Amoxicilina 500mg',
        stock: 10,
        price: 5080,
        description:
            'Bactericida. Inhibe la acción de peptidasas y carboxipeptidasas impidiendo la síntesis de la pared celular bacteriana.',
        img: '/public/amoxidal.jpg',
        category: 'Antibióticos',
    },
    {
        id: '2',
        name: 'Novalgina',
        atc: 'Dipirona sódica 50mg/ml',
        stock: 8,
        price: 8699,
        description:
            'Pirazolona analgésica no acídica, no narcótica, con efectos analgésicos, antipiréticos y espasmolíticos.',
        img: '/public/novalgina.jpg',
        category: 'Antifebriles',
    },
    {
        id: '3',
        name: 'Actron',
        atc: 'Ibuprofeno 600mg',
        stock: 20,
        price: 6599,
        description:
            'Inhibición de la síntesis de prostaglandinas a nivel periférico.',
        img: '/public/actron.jpg',
        category: 'Analgésicos',
    },
    {
        id: '4',
        name: 'Tafirol',
        atc: 'Paracetamol 500mg',
        stock: 50,
        price: 2560,
        description:
            'Está indicado para el alivio sintomático de dolores (de cabeza, menstruales, musculares) leves a moderados, alivio de estados gripales y/o resfríos y reducir la fiebre.',
        img: '/public/tafirol.jpg',
        category: 'Analgésicos',
    },
    {
        id: '5',
        name: 'Dipirona Klonal',
        atc: 'Dipirona 250 mg',
        stock: 10,
        price: 2899,
        description: 'Línea Pediátrica. Analgésico. Antitérmico. Espasmolítico.',
        img: '/public/dipirona-klonal.jpg',
        category: 'Antifebriles',
    },
    {
        id: '6',
        name: 'Azibiotic',
        atc: 'Azitromicina 500mg',
        stock: 2,
        price: 14599,
        description:
            'Inhibe la síntesis de proteínas bacterianas por unión a la subunidad 50s del ribosoma e inhibiendo la translocación de los péptidos.',
        img: '/public/azibiotic.png',
        category: 'Antibióticos',
    },
    {
        id: '7',
        name: 'Rivotril',
        atc: 'Clonazepam 0,5mg',
        stock: 2,
        price: 30599,
        description:
            'Sus efectos se deben a la inhibición posináptica mediada por GABA.',
        img: '/public/rivotril.jpg',
        category: 'Benzodiacepinas',
    },
    {
        id: '8',
        name: 'Tensium',
        atc: 'Alprazolam 2mg',
        stock: 2,
        price: 34599,
        description:
            'Tratamiento de los estados de ansiedad. Alivio transitorio de la sintomatología ansiosa. Ansiedad asociada a depresión. Ansiedad asociada a enfermedad somática severa o dolorosa. Tratamiento de apoyo de la ansiedad durante el curso de las neurosis. Prevención y tratamiento del delirium tremens. Tratamiento de los estados de pánico asociados o no a agorafobia.',
        img: '/public/tensium.jpg',
        category: 'Benzodiacepinas',
    },
    {
        id: '9',
        name: 'Fabogesic',
        atc: 'Ibuprofeno 400mg',
        stock: 30,
        price: 2499,
        description:
            'Inhibición de la síntesis de prostaglandinas a nivel periférico.',
        img: '/public/fabogesic.jpg',
        category: 'Analgésicos',
    },
    {
        id: '10',
        name: 'Aziatop',
        atc: 'Omeoprazol 20mg',
        stock: 8,
        price: 1459,
        description:
            'Inhibe la secreción de ácido en el estómago. Se une a la bomba de protones en la célula parietal gástrica, inhibiendo el transporte de H + al lumen gástrico.',
        img: '/public/aziatop.jpg',
        category: 'Inhibidores',
    },
];
export const getProducts = (id) => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un problema, intente nuevamente más tarde.');
            } else {
                let products = productos.find((products) => products.id === id);
                resolve(productos);
            }
        }, 2000);
    });
};