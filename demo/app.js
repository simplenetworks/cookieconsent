// START AND GET COOKIE CONSENT SCRIPT
const cc = initCookieConsent();

// CONSTANTS
const base64 = "";
const logo = `<img width="100" src="${base64}" />`;
const cookie = '🍪';
const privacy_URL = '';

// RUN
cc.run({
    autoclear_cookies : true,                   // default: false
    cookie_name: 'cookie_log',                  // default: 'cc_cookie'
    cookie_expiration : 365,                    // default: 182
    page_scripts: true,                         // default: false
    auto_language: 'document',                  // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // force_consent: false,
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: "/",                        // default: root
    // cookie_same_site: "Lax",
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0
    onAccept: () => { },
    onChange: () => { },
    languages: {
        'it': {
            consent_modal: {
                title: cookie + ' &nbsp; Questo sito utilizza i cookies!',
                description: 'Ciao, questo sito web utilizza cookie essenziali per garantire il suo corretto funzionamento e utilizza cookie di tracciamento per capire come interagisci con esso. Questi saranno impostato solo dopo il tuo esplicito consenso. <button type="button" data-cc="c-settings" class="cc-link">Personalizza.</button><br><br>Chiudendo questo modale, saranno salvate le impostazioni di default.',
                accept_all_btn: {
                    text: 'Accetta tutti',
                    role: 'accept_all' // 'accept_selected' or 'accept_all'
                },
                reject_all_btn: {
                    text: 'Rifiuta tutti',
                    role: 'accept_necessary' // 'settings' or 'accept_necessary'
                },
                settings_btn: {
                    text: 'Preferenze',
                    role: 'settings' //'settings' or 'accept_necessary'
                },
                close_btn: {
                    text: 'Chiudi',
                    role: 'save_settings' 
                }
            },
            settings_modal: {
                title: logo,
                save_settings_btn: 'Salva impostazioni',
                accept_all_btn: 'Accetta tutti',
                reject_all_btn: 'Rifiuta tutti',
                close_btn_label: 'Chiudi',
                cookie_table_headers: [
                    { col1: 'Nome' },
                    { col2: 'Dominio' },
                    { col3: 'Scadenza' },
                    { col4: 'Descrizione' }
                ],
                blocks: [
                    {
                        title: 'Utilizzo dei cookie 📢',
                        description: `Utilizzo i cookie per garantire le funzionalità di base del sito Web e per migliorare la tua esperienza online. Per ogni categoria potrai scegliere di attivare/disattivare i cookies quando vuoi. Per maggiori dettagli relativi ai cookies e ad altri dati sensibili, si prega di leggere l\'<a target="_blank" href="${privacy_URL}" class="cc-link">informativa privacy</a>.`
                    }, 
                    {
                        title: 'Cookies strettamente necessari',
                        description: 'Questi cookie sono essenziali per il corretto funzionamento del mio sito web. Senza questi cookie, il sito web non funzionerebbe correttamente',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, 
                    {
                        title: 'Cookies di Analytics e Prestazioni',
                        description: 'Questi cookies permettono al sito web di ricordare le scelte che hai fatto in passato per migliorare la tua esperienza.',
                        toggle: {
                            value: 'analytics', // there are no default categories => you specify them
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'google.com',
                                col3: '2 anni',
                                col4: 'Il cookie _ga, installato da Google Analytics, calcola i dati di visitatori, sessioni e campagne e tiene anche traccia dell\'utilizzo del sito per il report analitico del sito. Il cookie memorizza le informazioni in modo anonimo e assegna un numero generato casualmente per riconoscere i visitatori unici.',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 giorno',
                                col4: 'Installato da Google Analytics, il cookie _gid memorizza informazioni su come i visitatori utilizzano un sito web, creando anche un report analitico delle prestazioni del sito web. Alcuni dei dati raccolti includono il numero di visitatori, la loro fonte e le pagine che visitano in modo anonimo.',
                            }
                        ]
                    }, {
                        title: 'Cookie pubblicitari e di targeting',
                        description: 'Questi cookie raccolgono informazioni su come utilizzi il sito web, quali pagine hai visitato e su quali link hai cliccato. Tutti i dati sono anonimi e non possono essere utilizzati per identificarti.',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '_fbp',
                                col2: 'facebook.com',
                                col3: '3 mesi',
                                col4: 'Questo cookie viene impostato da Facebook per visualizzare annunci pubblicitari su Facebook o su una piattaforma digitale alimentata dalla pubblicità di Facebook, dopo aver visitato il sito web.'
                            },
                        ]
                    }, 
                    {
                        title: 'Privacy Policy',
                        description: `Per ogni ulteriore domanda, consulta la nostra <a class="cc-link" href="${privacy_URL}" target="_blank">informativa privacy</a>.`,
                    }
                ]
            }
        }
    }
});
