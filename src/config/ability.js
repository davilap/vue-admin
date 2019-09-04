import { AbilityBuilder } from '@casl/ability'

var type = JSON.parse(localStorage.getItem('user'))

export default AbilityBuilder.define(can => {
    switch (type) {
        case 'guest':
            can('read', 'Post');
            break;
        case 'admin':
            can('read', 'Post');
            can(['update', 'delete'], 'Post');
            break;
        // Add more roles here
    }
})