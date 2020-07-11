import React from 'react';
import SideDrawer from '../UI/SideDrawer/SideDrawer'

import Aux from '../../hoc/Aux'

const layout=(props)=>(
    <Aux>
        <SideDrawer/>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout;