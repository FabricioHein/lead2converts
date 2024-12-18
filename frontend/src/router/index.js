import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
const usuario = JSON.parse(localStorage.getItem('usuario'));

var routes;

if (usuario) {

    routes = [
        {
            path: '/chatCliente/:chaveId/:user/:tipo',
            name: 'chat-cliente',
            component: () => import(/* webpackChunkName: "index2" */ '../views/components/chat-cliente/chat-cliente.vue'),
        },
        {
            path: '/home',
            name: 'dashboard',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "index2" */ '../views/modulos/dashboard/dashboard.vue'),
        },
        {
            path: '/',
            name: 'dashboard',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "index2" */ '../views/modulos/dashboard/dashboard.vue'),
        },
        {
            path: '/auth/cadastro',
            name: 'cadastro',
            component: () => import(/* webpackChunkName: "auth-login" */ '../views/auth/register_boxed'),
            meta: { layout: 'registro' },
        },

        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "auth-login" */ '../views/auth/login.vue'),
            meta: { layout: 'auth' },
        },
        //config
        {
            path: '/config/app',
            name: 'configApp',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "index2" */ '../views/config/app/config.vue'),
        },
        {
            path: '/config/pagamentos',
            name: 'pagamentos',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "index2" */ '../views/config/app/pagamento/pagamento.vue'),
        },

        //users
        {
            path: '/config/usuario',
            name: 'profile',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "users-profile" */ '../views/config/usuario/perfil.vue'),
        },

        { path: '/:pathMatch(.*)*', component: () => import(/* webpackChunkName: "pages-error404" */ '../views/pages/error404.vue') },

        //Módulo CRM

        {
            path: '/crm/fluxo/:idProjeto',
            name: 'crm-processos',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/crm/processo/processo.vue'),
        },

        {
            path: '/crm/oportunidades',
            name: 'crm-oportunidades',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/crm/oportunidades/oportunidades.vue'),
        },
        {
            path: '/cadastro/contatos',
            name: 'crm-contatos',
            beforeEnter: guardMyroute,

            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/cadastro/clientes/clientes.vue'),
        },
        {
            path: '/crm/leads/:id',
            name: 'detalhes-leads',
            beforeEnter: guardMyroute,

            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/crm/detalhes-leads/detalhes-leads.vue'),
        },
        {
            path: '/crm/leads',
            name: 'crm-leads',
            beforeEnter: guardMyroute,

            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/crm/leads/leads.vue'),
        },
        {
            path: '/crm/minha-agenda',
            name: 'minha-agenda',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "apps-calendario" */ '../views/modulos/crm/calendario/agenda-pipe.vue'),
        },
        {
            path: '/crm/atividades',
            name: 'crm-atividades',
            beforeEnter: guardMyroute,

            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/crm/atividade/atividade.vue'),
        },
        {
            path: '/cadastro/usuarios',
            name: 'minha-equipe',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/cadastro/usuarios/usuarios.vue'),
        },
       
     

        {
            path: '/atendimento/chat-atendimento',
            name: 'crm-atendimento-chat',
            beforeEnter: guardMyroute,

            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/atendimento/chat/atendimento-chat.vue'),
        },
      
        
        {
            path: '/config/:uuid',
            name: 'integracoes',
            beforeEnter: guardMyroute,

            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/chat/chat-bot/chat-bot.vue'),
        },
        {
            path: '/config/lista',
            name: 'lista',
            beforeEnter: guardMyroute,

            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/chat/lista/lista-chat-bot.vue'),
        },

        //Módulo Venda

        {
            path: '/vendas/vendas',
            name: 'visao-geral-vendas',
            beforeEnter: guardMyroute,

            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/vendas/vendas/vendas.vue'),
        },

        //Módulo Cadastro
        {
            path: '/cadastro/importar',
            name: 'cadastro-importar',
            beforeEnter: guardMyroute,

            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/cadastro/importar/importar.vue'),
        },

        {
            path: '/cadastro/clientes',
            name: 'cadastro-cliente',
            beforeEnter: guardMyroute,

            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/cadastro/clientes/clientes.vue'),
        },
        {
            path: '/config/parametros',
            name: 'parametros',
            beforeEnter: guardMyroute,

            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/cadastro/parametros/parametros.vue'),
        },

        {
            path: '/cadastro/produtos',
            name: 'produtos',
            beforeEnter: guardMyroute,

            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/cadastro/produtos/produtos.vue'),
        },
        {
            path: '/cadastro/fornecedores',
            name: 'fornecedores',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/cadastro/fornecedores/fornecedores.vue'),
        },


        {
            path: '/config/gestao/usuarios',
            name: 'usuarios',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/config/gestao-usuario/gestao-usuario.vue'),
        },
        //mkt

        {
            path: '/mkt/formularios/lista',
            name: 'formulario-lista',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/mkt/formulario/lista/formularios.vue'),
        },
        {
            path: '/mkt/formulario/:idFomulario',
            name: 'formulario-id',
            beforeEnter: guardMyroute,
            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/mkt/formulario/formulario.vue'),
        },
        {
            path: '/formulario-ask/:formulario',
            name: 'ask-empresa-formulario',
            component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/modulos/mkt/formulario/ask-formulario/ask-formulario.vue'),
        },
        {
            path: '/agendamento', name: 'agendamento',
            props: (route) => ({
                clientId: route.query.clientId,
            }), component: () => import(/* webpackChunkName: "auth-login" */ '../components/agendamento.vue')
        },
        {
            path: '/meus-link/linkCreate/:id', name: 'criar-link',
            props: (route) => ({
                id: route.query.id
            }),
            component: () => import(/* webpackChunkName: "auth-login" */ '../components/linkCompany.vue')
        },
        {
            path: '/link/:company', name: 'getPageLink-link',
            props: (route) => ({
                company: route.query.company,
            }), component: () => import(/* webpackChunkName: "auth-login" */ '../components/getPageLink.vue')
        },
        {
            path: '/meus-link/lista-links',
            beforeEnter: guardMyroute,
            name: 'lista-links', component: () => import(/* webpackChunkName: "auth-login" */ '../views/modulos/link/lista/link-lista.vue')
        }

    ];
} else {
    routes = [
       

        {
            path: '/:company', name: 'getPageLink-link',
            props: (route) => ({
                company: route.query.company,
            }), component: () => import(/* webpackChunkName: "auth-login" */ '../components/getPageLink.vue')
        },

        {
            path: '/agendamento', name: 'agendamento',
            props: (route) => ({
                clientId: route.query.clientId,
            }), component: () => import(/* webpackChunkName: "auth-login" */ '../components/agendamento.vue')
        },

        {
            path: '/auth/nova-senha',
            name: 'esqueceu-senha',
            component: () => import(/* webpackChunkName: "auth-login" */ '../views/auth/pass_recovery_boxed.vue'),
            meta: { layout: 'registro' },
        },
        {
            path: '/chatCliente/:chaveId/:user/:tipo',
            name: 'chat-cliente',
            component: () => import(/* webpackChunkName: "index2" */ '../views/components/chat-cliente/chat-cliente.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "auth-login" */ '../views/auth/login.vue'),
            meta: { layout: 'auth' },
        },
        {
            path: '/redirect',
            name: 'redirect',
            component: () => import(/* webpackChunkName: "auth-login" */ '../views/auth/login.vue'),
            props: (route) => ({
                nome: route.query.nome,
                email: route.query.email,
                token: route.query.token
            }),
            meta: { layout: 'auth' },
        },
        {
            path: '/', 
            beforeEnter: (to, from, next) => {
                // Redireciona para outra rota
                next('/login'); // Substitua '/nova-rota' pela rota desejada
              },
            component: () => import(/* webpackChunkName: "pages-error404" */ '../views/pages/error404.vue')
           
        },
        {
            path: '/auth/cadastro',
            name: 'cadastro',
            component: () => import(/* webpackChunkName: "auth-login" */ '../views/auth/register_boxed'),
            meta: { layout: 'registro' },
        },
        {
            path: '/validar-email/:uuid',
            name: 'validar-email',
            component: () => import(/* webpackChunkName: "auth-login" */ '../views/auth/verifica_email.vue'),
            meta: { layout: 'registro' },
        },
        { path: '/:pathMatch(.*)*', component: () => import(/* webpackChunkName: "pages-error404" */ '../views/pages/error404.vue') }

    ];

}


const router = new createRouter({
    mode: 'hash',
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

function guardMyroute(to, from, next) {
    store.commit('setLayout', 'auth');

    if (localStorage.getItem('usuario')) {
        store.commit('setLayout', 'app');
        next();
    } else {
        store.commit('setLayout', 'auth');
        next('/');
    }
}

export default router;
