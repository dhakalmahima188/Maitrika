import pregnantLady from '../../assets/pregnantLady.png';
import birth from '../../assets/newBorn.png';
import vaccine from '../../assets/vaccine.png';
import healthPost from '../../assets/healthPost.png';
import death from '../../assets/death.png';
import health from '../../assets/health.png';
import jaundice from '../../assets/jaundice.png';
import cold from '../../assets/cold.png';
import risk from '../../assets/risk.png';

export const targetData = [
    {
        image: pregnantLady,
        title: 'Active Pregnancies',
        duration: 'All time',
        number: 3,
    },
    {
        image: birth,
        title: 'Births',
        duration: 'This month',
        number: 2,
    },    
    {
        image: healthPost,
        title: 'Deliveries at Facility',
        duration: 'All time',
        number: '90%',
    },
    {
        image: vaccine,
        title: 'Children Vaccinated',
        duration: 'Past 3 months',
        number: 1,
    },
    {
        image: health,
        title: 'Family planning follow-up',
        duration: 'This month',
        number: 1,
    },
    {
        image: death,
        title: 'Deaths reported',
        duration: 'This month',
        number: 0,
    },    {
        image: cold,
        title: 'Cold and Flu',
        duration: 'This month',
        number: 3,
    },
    {
        image: jaundice,
        title: 'Jaundice',
        duration: 'This Week',
        number: 0,
    },
    {
        image: risk,
        title: 'High Risk Patient',
        duration: 'These 2 days',
        number: 1,
    },
]