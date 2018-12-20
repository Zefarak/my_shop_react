import React from 'react';
import { Menu } from 'semantic-ui-react';

const items = [
    { key: 'homepage', active: true, name:'Homepage' },
    { key: 'arehouse', name: 'Warehouse' },
    { key: 'Expenses', name: 'Expenses' },
    { key: 'Incomes', name: 'Incomes' },
    { key: 'pos', name:'PoS' }
]

const Navbar = () => <Menu items={items} />

export default Navbar