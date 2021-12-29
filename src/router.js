import { createRouter, createWebHistory } from 'vue-router';

import CoachDetalis from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecieved from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: 'coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachDetalis, props: true, children: [
                { path: 'contact', component: ContactCoach }
            ]
        },
        { path: '/register', component: CoachesRegistration },
        { path: '/requests', component: RequestsRecieved },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

export default router;