// obtain cookieconsent plugin
var cc = initCookieConsent();
// sn logo
var logo = '<svg height="40px" viewBox="0 0 148.81 32.815" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="a" x1="347" x2="383.51" y1="298.7" y2="298.7" data-name="simple-gradient" gradientUnits="userSpaceOnUse"><stop stop-color="#0087ba" offset="0"/><stop stop-color="#057db1" offset=".18643"/><stop stop-color="#11629a" offset=".50391"/><stop stop-color="#263674" offset=".91155"/><stop stop-color="#2b2c6b" offset="1"/></linearGradient></defs><path class="simple-logo" transform="translate(-347 -282.29)" d="M383.50409,298.95643a.33842.33842,0,0,0-.00308-.035c-.00161-.00906-.00476-.01791-.00712-.0269a.34013.34013,0,0,0-.0112-.0377l-.0016-.00541-4.37026-10.662-.00217-.0042c-.0037-.00869-.00857-.01655-.01292-.0248a.33993.33993,0,0,0-.01782-.03143L379.06,288.106a.34157.34157,0,0,0-.02247-.026l-.02169-.01934a.33026.33026,0,0,0-.02684-.0211l-.02536-.01543-.01735-.01057-4.18026-2.04785-.01128-.00418a.33779.33779,0,0,0-.03328-.01234c-.01019-.00333-.02025-.00669-.03052-.009-.01071-.00241-.02152-.00368-.03245-.00505s-.02184-.00285-.0328-.00313c-.01077-.00027-.02151.00061-.03236.00138a.33053.33053,0,0,0-.03312.00338c-.01036.00176-.02055.0046-.03085.00736a.34594.34594,0,0,0-.03376.01049l-.01164.00364-2.04524.87108.08709-1.74581.00009-.00165.00006-.00116-.00023-.00295a.33544.33544,0,0,0-.00575-.07391l-.00549-.023a.33779.33779,0,0,0-.018-.0524l-.00971-.02142a.33731.33731,0,0,0-.03874-.059l-.00362-.00508a.33578.33578,0,0,0-.05805-.05261l-.00511-.00464-.01476-.00773a.332.332,0,0,0-.03005-.01865l-3.27942-1.60663a.33891.33891,0,0,0-.12324-.03355l-10.81266-.82887c-.00575-.00044-.01124.00058-.017.00044a.33739.33739,0,0,0-.03722.00094l-.02912.00377-.02006.00295-.00138.00019-.015.00521-.02627.00877-.02079.00762-.01632.009-.02149.01251-.01942.01177-.01426.01192-.01974.01774-.00132.00116-.01408.0123-.0021.00225-.00028.00029-7.22181,7.71139-.01241.01627a.33186.33186,0,0,0-.02164.02833.33524.33524,0,0,0-.0181.03162l-.00994.01732-3.532,7.91172-.00014.00044-.00107.00271c-.00446.01026-.00709.02118-.01054.03183-.00307.0096-.00713.0189-.00933.02875l-.0006.00243c-.00243.01111-.00281.02264-.00412.034-.00111.00967-.00315.01916-.00342.0289L347,298.24736c-.00013.00655.00127.01317.00152.01977l.00094.012c.00078.01051.00066.021.00244.03149l.00032.00243.005.018.00429.01544c.00261.00923.00419.01861.00765.02769l.00144.00334.00072.00251,4.32319,10.79384a.33729.33729,0,0,0,.01524.03092l.00635.01292a.33681.33681,0,0,0,.03423.04867l.00924.00969a.33789.33789,0,0,0,.0343.0327l.01444.01121a.339.339,0,0,0,.043.027l.00729.00457,4.03588,2.00271.00811.00291a.33682.33682,0,0,0,.05618.02016l.019.00463a.33914.33914,0,0,0,.06492.00742l.00228.00025a.33564.33564,0,0,0,.05092-.00414l.01576-.00327a.34467.34467,0,0,0,.03392-.00836l.0074-.00183,2.04689-.6859-.06356,1.54992v.00044l-.00026.00646c-.0003.00748.00112.01453.0013.02192a.34391.34391,0,0,0,.00248.04168c.00161.01076.00474.02092.00731.03135.00268.01078.00483.02162.00853.03206a.33144.33144,0,0,0,.01366.03052c.00456.00975.00869.01962.01418.02892s.012.01744.0183.026a.33769.33769,0,0,0,.02041.02693c.00735.00821.01577.01527.02385.02273s.01541.015.02413.02164a.34311.34311,0,0,0,.03508.02206l.01885.01183.00588.00293.00028.00013,3.41313,1.69366.00072.00036.00367.00181.00483.00174c.00952.00456.01965.00781.02966.01149.0104.00381.02059.00784.03146.01064l.00822.00276.00434.00053.02162.00275c.00857.0013.01665.00382.02542.00448l10.87861.81.02475.00091.00031,0h.00044a.33691.33691,0,0,0,.06672-.00685l.0156-.00457a.33582.33582,0,0,0,.04762-.015l.02171-.01107a.33979.33979,0,0,0,.03672-.02073l.021-.01617a.33817.33817,0,0,0,.03173-.0282l.00957-.00852,7.04521-7.761.00059-.00074.00052-.00047.00262-.00358a.33885.33885,0,0,0,.0332-.04535l.01016-.01822.00992-.01783,3.69212-8.02475.00191-.00556a.341.341,0,0,0,.01233-.03592c.00289-.00929.00657-.01842.00863-.02781.00239-.01088.003-.02208.00434-.03322.00126-.01075.00329-.02144.0035-.03218C383.50634,298.97689,383.50481,298.96669,383.50409,298.95643Zm-11.29816-11.29086,2.401-1.02261,3.1667,1.55129-4.65374,1.01516a.74249.74249,0,0,0-1.13215-.0181l-2.11278-.533,2.30981-.98376Zm-3.38883-3.87523,2.55547,1.25187-5.01414,2.13557-6.87788-1.73506a.64112.64112,0,0,0-.459-.3971l-.48843-2.04362Zm-17.65959,6.74215,6.75442-7.21237.46529,1.94682a.56534.56534,0,0,0-.12255.27128.60842.60842,0,0,0,.00493.28251l-6.09444,8.72092a.74953.74953,0,0,0-.88251.75425c0,.02516.005.04892.0074.07345l-3.18618,2.00329Zm4.22326,19.982-3.45183-1.71289L347.759,298.39046l3.88831-2.44475a.7333.7333,0,0,0,.58622.09113l3.10653,3.79384a.913.913,0,0,0,.42642,1.27531Zm-2.62913-14.9153a.74875.74875,0,0,0-.0325-.66647l6.0327-8.63257a.63789.63789,0,0,0,.59812-.191l6.44078,1.62481-9.38286,11.66457a.91519.91519,0,0,0-.54327.00236Zm5.55405,5.66674-.00024.00031-.003.00461a.33141.33141,0,0,0-.02161.03275l-.01206.019-.00244.00539a.33842.33842,0,0,0-.0129.03224l-.009.02325-.00187.0076c-.00251.00943-.00366.01931-.00537.02906-.0016.00919-.00409.0182-.00494.02747l-.00039.01026-.001.007-.34833,8.4961-1.8254.61169.387-9.43917a.91221.91221,0,0,0,.49186-1.30954l9.66127-12.01071,5.2244-2.22516-.07662,1.53667-3.062,1.30412-.01242.00682-.02224.011-.01553.00977-.02086.01474-.01691.013-.01367.01294-.01969.02094-.01.0102-10.24475,12.736Zm2.9202,12.14977-2.75033-1.36479.39635-9.66773,1.90651,2.32827a1.19662,1.19662,0,0,0,.62164,1.81216Zm.077-9.13425-2.29658-2.80461,9.93745-12.35406,2.87788.726a.74388.74388,0,0,0,.40786.50521l.34115,9.93725a.91341.91341,0,0,0-.54527.82147l-9.30654,3.54683a1.19588,1.19588,0,0,0-1.416-.37806Zm10.98727,10.13391-10.39165-.77374.17949-7.10178a1.19649,1.19649,0,0,0,.88712-1.15508c0-.03093-.00234-.06129-.00464-.09164l9.30679-3.54691a.90913.90913,0,0,0,1.07511.20033l5.65278,5.08259Zm7.06944-7.97053-5.56381-5.00261a.91015.91015,0,0,0-.54741-1.17372l-.34116-9.9373a.74416.74416,0,0,0,.35645-.459l5.32758-1.16217,4.20642,10.26222Z" fill="url(#a)"/></svg>';
var cookie = '🍪';
// run plugin with config object
cc.run({
    autoclear_cookies: true,                    // default: false
    cookie_name: 'sn_cookie',                   // default: 'cc_cookie'
    cookie_expiration: 365,                     // default: 182
    page_scripts: true,                         // default: false
    auto_language: 'browser',                   // default: null; could also be 'browser' or 'document'
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
    gui_options: {
        consent_modal: {
            layout: 'box', // box,cloud,bar
            position: 'bottom right', // bottom,middle,top + left,right,center
            transition: 'slide' // zoom,slide
        },
        settings_modal: {
            layout: 'box', // box,bar
            // position: 'left',                // right,left (available only if bar layout selected)
            transition: 'slide' // zoom,slide
        }
    },
    onAccept: function (cookie) {
        // ... cookieconsent accepted
    },

    onChange: function (cookie, changed_preferences) {
        // ... cookieconsent preferences were changed
    },
    languages: {
        'en': {
            consent_modal: {
                title: cookie + ' We use cookies!',
                description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button><br><br>Closing this modal default settings will be saved.',
                accept_all_btn: {
                    text: 'Accept all',
                    role: 'accept_all' // 'accept_selected' or 'accept_all'
                },
                reject_all_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary' // 'settings' or 'accept_necessary'
                },
                settings_btn: {
                    text: 'Preferences',
                    role: 'settings' //'settings' or 'accept_necessary'
                },
                close_btn: {
                    text: 'Close',
                    // role: 'accept_necessary' 
                }
            },
            settings_modal: {
                title: logo,
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {
                        col1: 'Name'
                    },
                    {
                        col2: 'Domain'
                    },
                    {
                        col3: 'Expiration'
                    },
                    {
                        col4: 'Description'
                    }
                ],
                blocks: [
                    {
                        title: 'Cookie usage 📢',
                        description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                    }, 
                    {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, 
                    {
                        title: 'Performance and Analytics cookies',
                        description: 'These cookies allow the website to remember the choices you have made in the past',
                        toggle: {
                            value: 'analytics', // there are no default categories => you specify them
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'The _ga cookie, installed by Google Analytics, calculates visitor, session and campaign data and also keeps track of site usage for the site\'s analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognize unique visitors.',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'Installed by Google Analytics, _gid cookie stores information on how visitors use a website, while also creating an analytics report of the website\'s performance. Some of the data that are collected include the number of visitors, their source, and the pages they visit anonymously.',
                            },
                            {
                                col1: '{{ tracker ID }}',
                                col2: 'google.com',
                                col3: '1 minute',
                                col4: 'Set by Google to distinguish users.',
                                is_regex: true
                            },
                        ]
                    }, 
                    {
                        title: 'Advertisement and Targeting cookies',
                        description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '_fbp',
                                col2: 'facebook.com',
                                col3: '3 months',
                                col4: 'This cookie is set by Facebook to display advertisements when either on Facebook or on a digital platform powered by Facebook advertising, after visiting the website.'
                            },
                        ]
                    }, {
                        title: 'Privacy Policy',
                        description: 'For any further question, please read our <a class="cc-link" href="#">privacy policy</a>.',
                    }
                ]
            }
        },
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
                    {
                        col1: 'Nome'
                    },
                    {
                        col2: 'Dominio'
                    },
                    {
                        col3: 'Scadenza'
                    },
                    {
                        col4: 'Descrizione'
                    }
                ],
                blocks: [
                    {
                        title: 'Utilizzo dei cookie 📢',
                        description: 'Utilizzo i cookie per garantire le funzionalità di base del sito Web e per migliorare la tua esperienza online. Per ogni categoria potrai scegliere di attivare/disattivare i cookies quando vuoi. Per maggiori dettagli relativi ai cookies e ad altri dati sensibili, si prega di leggere l\'<a target="_blank" href="https://www.simplenetworks.it/privacy-policy" class="cc-link">informativa privacy</a>.'
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
                            },
                            {
                                col1: '{{ tracker ID }}',
                                col2: 'google.com',
                                col3: '1 minuto',
                                col4: 'Cookie settato da Google per distinguere gli utenti',
                                is_regex: true
                            },
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
                        description: 'Per ogni ulteriore domanda, consulta la nostra <a class="cc-link" href="https://www.simplenetworks.it/privacy-policy" target="_blank">informativa privacy</a>.',
                    }
                ]
            }
        }
    }
});
