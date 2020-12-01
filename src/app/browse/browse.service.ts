export const getFrames = () => {
    const item = {
        imageUrl: 'https://images.unsplash.com/photo-1488813340362-2a31b5522ebe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        title: 'Wooden brown frame',
        price: '120',
        material: 'Wood',
        colors: ['Brown', 'Black'],
        sizes: ['20', '22'],
        description: 'This is our best selling frame', size: '20', category: 'Frame',
        isShown: true,
        tags: ['wood', 'brown', 'frame', '20 inches', '50 - 100 egp']
    };

    const item2 = {
        imageUrl: 'https://images.unsplash.com/photo-1497296690583-da0e2a4ce49a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Wooden black frame',
        price: '70',
        material: 'Wood',
        colors: ['Brown', 'Black'],
        sizes: ['20', '22'],
        isShown: true,
        description: 'This is our most popular frame', size: '20', category: 'frame',
        tags: ['wood', 'black', 'frame', '22 inches', '100 - 150 egp']
    };
    const items = [item, item2, item, item2, item, item2, item, item2];
    return items;
};

export const getFilters = () => {
    const filters = [
        {
            title: 'Material',
            options: ['Wood', 'Metal'],
            selected: ''
        },
        {
            title: 'Color',
            options: ['Brown', 'Black', 'Gold', 'White', 'Gray'],
            selected: ''
        },
        {
            title: 'Category',
            options: ['Frame', 'Wallset'],
            selected: ''
        },
        {
            title: 'Size',
            options: ['20 inches', '22 inches'],
            selected: ''
        },
        {
            title: 'Price',
            options: ['50 - 100 EGP', '100 - 150 EGP', '150 - 200 EGP', '200+ EGP'],
            selected: ''
        }

    ];

    return filters;
};
