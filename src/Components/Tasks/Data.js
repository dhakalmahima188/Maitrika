import pregnantLady from '../../assets/pregnantLady.png';
import birth from '../../assets/newBorn.png';
import vaccine from '../../assets/vaccine.png';

// Category: text, follow_up_mother

export const targetData = [
    {
        key: 0,
        image: pregnantLady,
        name: "Mahima dhakal",
        subject: 'pregnancy follow up',
        category: "text",
        description: <div>
            Some Extra text <br></br>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur elit vel lobortis vestibulum. Mauris consequat felis sed mollis venenatis. Cras pulvinar nulla enim, nec tristique eros consequat sed. Proin euismod mollis erat eu dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam porttitor laoreet ornare. Aenean tempus enim eu magna dapibus, nec gravida diam venenatis.

            Donec imperdiet commodo tortor et feugiat. Pellentesque vitae mi ornare, vehicula tellus at, interdum enim. Nam risus massa, euismod eu lorem eget, blandit molestie metus. Aenean vel lobortis arcu. Maecenas vulputate enim et lectus luctus, eget egestas elit rhoncus. Nam nec quam et nisl vestibulum tempor non et erat. Vivamus maximus vel dui sit amet sollicitudin. Curabitur egestas aliquam dolor eget maximus. Vivamus in erat sed dui ultricies gravida. Fusce porttitor efficitur augue in volutpat. Nullam a ex vel nunc finibus porta ac quis quam. Praesent id mi posuere, sagittis metus eu, pretium ligula. Nullam eget consectetur velit. Morbi viverra gravida mi a gravida.

            Pellentesque maximus urna nunc. Phasellus nulla est, placerat et velit nec, lobortis vestibulum ipsum. Phasellus justo dolor, elementum eget lacinia a, dictum nec tortor. Cras at ante id nisl vehicula placerat ut vel enim. Integer id interdum ipsum. Praesent ligula lorem, viverra quis velit eu, facilisis pulvinar magna. Sed sit amet rutrum turpis, eu efficitur sapien. Curabitur velit purus, elementum eget euismod a, tristique ut odio. Nam congue nulla tortor, vitae gravida nulla rutrum sed. Proin mattis purus lacus, eu ornare magna fermentum vel.

            Nunc ullamcorper ut dui in semper. Mauris a odio urna. In hac habitasse platea dictumst. Ut pellentesque dictum felis, eu tempus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet interdum eros. Vivamus sit amet laoreet mauris, sit amet tincidunt elit. Curabitur pretium tempor ante a blandit.
        </div>,
        important: 0
    },

    {
        key: 1,
        image: birth,
        name: "Radha Acharya",
        subject: 'Expected Date',
        important: 1,
        category: "text",
        description: <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur elit vel lobortis vestibulum. Mauris consequat felis sed mollis venenatis. Cras pulvinar nulla enim, nec tristique eros consequat sed. Proin euismod mollis erat eu dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam porttitor laoreet ornare. Aenean tempus enim eu magna dapibus, nec gravida diam venenatis.

            Donec imperdiet commodo tortor et feugiat. Pellentesque vitae mi ornare, vehicula tellus at, interdum enim. Nam risus massa, euismod eu lorem eget, blandit molestie metus. Aenean vel lobortis arcu. Maecenas vulputate enim et lectus luctus, eget egestas elit rhoncus. Nam nec quam et nisl vestibulum tempor non et erat. Vivamus maximus vel dui sit amet sollicitudin. Curabitur egestas aliquam dolor eget maximus. Vivamus in erat sed dui ultricies gravida. Fusce porttitor efficitur augue in volutpat. Nullam a ex vel nunc finibus porta ac quis quam. Praesent id mi posuere, sagittis metus eu, pretium ligula. Nullam eget consectetur velit. Morbi viverra gravida mi a gravida.

            Pellentesque maximus urna nunc. Phasellus nulla est, placerat et velit nec, lobortis vestibulum ipsum. Phasellus justo dolor, elementum eget lacinia a, dictum nec tortor. Cras at ante id nisl vehicula placerat ut vel enim. Integer id interdum ipsum. Praesent ligula lorem, viverra quis velit eu, facilisis pulvinar magna. Sed sit amet rutrum turpis, eu efficitur sapien. Curabitur velit purus, elementum eget euismod a, tristique ut odio. Nam congue nulla tortor, vitae gravida nulla rutrum sed. Proin mattis purus lacus, eu ornare magna fermentum vel.

            Nunc ullamcorper ut dui in semper. Mauris a odio urna. In hac habitasse platea dictumst. Ut pellentesque dictum felis, eu tempus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet interdum eros. Vivamus sit amet laoreet mauris, sit amet tincidunt elit. Curabitur pretium tempor ante a blandit.
        </div>
    },
    {
        key: 2,
        image: vaccine,
        name: "Radha Acharya",
        subject: 'Polio Dosage to child',
        important: 0,
        category: "fourm",
        description:  [
            {name: "Gender", type: "binary", 
            options: [
                {sn: 0, text: "male", icon: birth},
                {sn: 1, text: "female", icon: vaccine},
            ]},
            // {name: "Skin Color", type: "ternary", options: ["c1", "c2", "c3"]},
            // {name: "Age (Months)", type: "slider", options: [0, 18]},
            // {name: "Temperature (*F)", type: "slider", options: [90, 110]}
        ]},


]