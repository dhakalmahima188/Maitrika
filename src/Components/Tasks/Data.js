import pregnantLady from '../../assets/pregnantLady.png';
import birth from '../../assets/newBorn.png';
import vaccine from '../../assets/vaccine.png';

// Category: text, follow_up_mother

export const targetData = [
    {
        key: 0,
        image: pregnantLady,
        name: "Mahima Dhakal",
        subject: 'Pregnancy Follow Up',
        time: '1 day left',
        category: "text",
        description: <div>
            <h4>Pregnancy Follow Up</h4>
            Perform a pregnancy follow up on Mahima Dhakal
            <a href='http://locahost:3000/person/mahima'>Follow Up</a>
        </div>,
        important: 0
    },

    {
        key: 1,
        image: birth,
        name: "Radha Acharya",
        subject: 'Expected Date',
        time: '3 days left',
        important: 1,
        category: "text",
        description: <div>
            Some task
        </div>
    },
    {
        key: 2,
        image: vaccine,
        name: "Radha Acharya",
        subject: 'Polio Dosage to Child',
        time: 'In 2 weeks',
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