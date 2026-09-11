import type { AppLocale } from "@/i18n/routing";

export interface BlogPost {
  readonly slug: string;
  readonly date: string;
  readonly readTime: string;
  readonly title: Record<AppLocale, string>;
  readonly excerpt: Record<AppLocale, string>;
  readonly body: Record<AppLocale, readonly string[]>;
}

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "remote-work-guide",
    date: "2026-02-10",
    readTime: "6 min",
    title: {
      en: "How to Work Remote Safely: A Complete 2026 Guide",
      ro: "Cum sa Lucrezi Remote in Siguranta: Ghid Complet 2026",
    },
    excerpt: {
      en: "What actually matters when you move your income online — contracts, payments, equipment, and protecting your privacy.",
      ro: "Ce conteaza cu adevarat cand iti muti venitul online — contracte, plati, echipament si protejarea intimitatii tale.",
    },
    body: {
      en: [
        "Remote work stopped being a niche arrangement years ago. What's changed since is how many different shapes it takes — freelancing, contracting, and fully managed roles where a company handles the logistics so you can focus on the work itself.",
        "The first thing to get right is the paperwork. Any legitimate remote arrangement should give you a written collaboration agreement before you start, spelling out payment terms, notice periods, and what happens if either side wants to stop. If nobody offers you one, ask for it — a company unwilling to put terms in writing is telling you something.",
        "Payment cadence matters more than people expect. Bi-weekly or monthly transfers in a currency that holds its value are standard for serious remote arrangements. Be wary of anything that only pays in cash, gift cards, or 'credits' — that's a common structure in setups designed to be hard to walk away from.",
        "Equipment requirements are usually modest: a reasonably modern laptop and stable upload speed cover most remote roles, including anything camera- or stream-based. If a role demands expensive gear upfront before you've earned anything, treat that as a red flag rather than a barrier to push through.",
        "Privacy deserves the same diligence as pay. If your work involves any kind of public-facing presence, ask specifically how your identity is handled — whether there are geographic restrictions, whether you work under a persona, and who has access to your personal details. A well-run operation will have clear answers, not vague reassurance.",
        "Finally, treat the interview as a two-way filter. A legitimate remote employer explains the model, the realistic timeline for earnings, and your options for stopping — before you've committed anything. If those answers feel rehearsed-vague rather than specific, that's worth weighing as heavily as the pay.",
      ],
      ro: [
        "Munca remote a incetat de mult sa fie o exceptie. Ce s-a schimbat este numarul de forme pe care le poate lua — freelancing, colaborare pe contract, sau roluri complet administrate, unde o companie gestioneaza logistica pentru ca tu sa te concentrezi doar pe activitatea in sine.",
        "Primul lucru pe care trebuie sa-l ai clar este partea contractuala. Orice colaborare remote serioasa iti ofera un acord de colaborare scris inainte sa incepi, cu termeni de plata, perioade de preaviz si ce se intampla daca oricare parte vrea sa se opreasca. Daca nimeni nu ti-l ofera, cere-l — o companie care nu vrea sa puna termenii in scris iti spune ceva important.",
        "Frecventa platilor conteaza mai mult decat crezi. Transferurile bi-saptamanale sau lunare, intr-o moneda stabila, sunt standardul pentru colaborari remote serioase. Fii atenta la orice colaborare care plateste doar in numerar, carduri cadou sau 'credite' — este o structura des folosita in aranjamente construite ca sa fie dificil de abandonat.",
        "Cerintele de echipament sunt de regula modeste: un laptop rezonabil de nou si un upload stabil acopera majoritatea rolurilor remote, inclusiv cele bazate pe camera sau stream. Daca un rol cere echipament costisitor platit din buzunarul tau inainte sa castigi ceva, trateaza asta ca semnal de alarma, nu ca pe un obstacol de trecut.",
        "Intimitatea merita aceeasi atentie ca si plata. Daca activitatea implica vreo forma de prezenta publica, intreaba concret cum este gestionata identitatea ta — daca exista restrictii geografice, daca lucrezi sub o persona si cine are acces la datele tale personale. O operatiune bine condusa are raspunsuri clare, nu asigurari vagi.",
        "In final, trateaza interviul ca pe un filtru in ambele sensuri. Un angajator remote serios iti explica modelul, cronologia realista a castigurilor si optiunile tale de a te opri — inainte sa te angajezi in vreun fel. Daca raspunsurile suna vag si repetat, invatat pe de rost, merita sa cantaresti asta la fel de mult ca si plata.",
      ],
    },
  },
  {
    slug: "online-income-ideas",
    date: "2026-03-04",
    readTime: "5 min",
    title: {
      en: "5 Legitimate Ways to Build Extra Income Online",
      ro: "5 Moduri Legitime de a Genera un Venit Suplimentar Online",
    },
    excerpt: {
      en: "A practical look at freelancing, e-commerce, content platforms, tutoring, and managed creator programs — and what each actually requires.",
      ro: "O privire practica asupra freelancing-ului, e-commerce, platformelor de continut, tutoriatului si programelor de management pentru creatori — si ce cere fiecare, de fapt.",
    },
    body: {
      en: [
        "Most guides to 'making money online' either oversell the ease of it or bury the useful advice under affiliate links. Here's a straighter look at five categories that genuinely work, along with what each one actually costs you in time, skill, or upfront investment.",
        "Freelancing on your existing skills — writing, design, admin support, bookkeeping — has the lowest barrier to entry and the most direct payoff, but income is capped by your own hours unless you eventually hire out work yourself.",
        "Small-scale e-commerce or reselling can scale further, but it demands real capital upfront and a tolerance for slow months while you find your footing. It's a business, not a side gig, from day one.",
        "Content platforms — writing, video, streaming — reward consistency over talent in the first few months. Almost nobody earns meaningfully in week one; the people who stick with a schedule for 60-90 days are the ones who see it turn into real income.",
        "Tutoring or coaching in something you're already good at monetizes expertise directly, with minimal setup cost, though building a steady client base takes longer than most people expect.",
        "Managed creator programs sit apart from the rest: a company handles the technical setup, audience growth, and monetization infrastructure, and you focus purely on showing up and creating. The tradeoff is a revenue share instead of keeping 100% — in exchange for a much shorter runway to your first real payment, since someone else is already doing the parts that normally take months to figure out alone.",
        "None of these are shortcuts. The honest version of 'extra income online' is: pick the one that matches how much time, capital, or existing skill you actually have, and expect the first month to look like the learning phase it is.",
      ],
      ro: [
        "Majoritatea ghidurilor despre 'cum faci bani online' fie exagereaza cat de usor e, fie ingroapa sfaturile utile sub linkuri afiliate. Iata o privire mai directa asupra a cinci categorii care functioneaza cu adevarat, plus ce cere fiecare in timp, abilitate sau investitie initiala.",
        "Freelancing-ul pe baza abilitatilor pe care le ai deja — scris, design, suport administrativ, contabilitate — are cea mai mica bariera de intrare si cel mai direct castig, dar venitul e limitat de propriile tale ore, cel putin pana cand angajezi pe altcineva.",
        "E-commerce-ul la scara mica sau revanzarea pot creste mai mult, dar cer capital real de la inceput si toleranta pentru luni slabe cat iti gasesti ritmul. E o afacere, nu un venit secundar, chiar de la prima zi.",
        "Platformele de continut — scris, video, stream — recompenseaza consistenta mai mult decat talentul in primele luni. Aproape nimeni nu castiga semnificativ in prima saptamana; cei care raman pe un program 60-90 de zile sunt cei care vad rezultate reale.",
        "Tutoriatul sau coaching-ul intr-un domeniu in care esti deja buna monetizeaza direct expertiza, cu costuri minime de start, desi construirea unei baze stabile de clienti dureaza mai mult decat se anticipeaza de regula.",
        "Programele de management pentru creatori se disting de restul: o companie gestioneaza setup-ul tehnic, cresterea audientei si infrastructura de monetizare, iar tu te concentrezi doar pe a fi prezenta si a crea. Compromisul este o cota din venit in loc sa retii 100%, in schimbul unui drum mult mai scurt catre prima plata reala, pentru ca altcineva se ocupa deja de partile care de regula dureaza luni sa fie clarificate singura.",
        "Niciuna dintre acestea nu e un scurtatura. Versiunea sincera a 'venitului suplimentar online' este: alege pe cea care se potriveste cu timpul, capitalul sau abilitatile pe care le ai deja, si asteapta-te ca prima luna sa fie exact faza de invatare care este.",
      ],
    },
  },
  {
    slug: "creator-economy-2026",
    date: "2026-04-18",
    readTime: "5 min",
    title: {
      en: "What It Means to Be a Content Creator in 2026",
      ro: "Ce Inseamna sa Fii Creator de Continut in 2026",
    },
    excerpt: {
      en: "The creator economy matured fast. Here's what separates a sustainable creator income from a hobby that never pays off.",
      ro: "Economia creatorilor s-a maturizat rapid. Iata ce separa un venit sustenabil de creator de un hobby care nu se plateste niciodata.",
    },
    body: {
      en: [
        "A decade ago, 'content creator' meant someone posting for free in the hope that an audience — and eventually a sponsor — would show up. That model still exists, but it's no longer the only one, and for most people, it's not the fastest path to actual income.",
        "What changed is specialization. Growing an audience, optimizing a platform's algorithm, handling monetization logistics, and actually creating are now treated as separate skill sets, each worth paying someone else to handle if you'd rather not learn all four from scratch.",
        "That's the logic behind managed creator arrangements: the technical and growth side gets handled by people who do it full-time across many creators, while you focus on the one part that can't be outsourced — showing up, consistently, as yourself.",
        "The realistic earnings curve looks the same across almost every legitimate version of this: a slower first month while systems and habits get built, a second month where growth compounds, and a third month onward where income stabilizes if you've stayed consistent.",
        "Consistency is the actual differentiator, more than any platform trick. Creators who treat their first 90 days as a training period — showing up for scheduled hours, following the guidance they're given — are the ones who end up with an income, not a hobby.",
        "If you're weighing whether this is worth trying, the honest test is simple: are you willing to treat the first month as work before it feels like income? Everyone who's made this sustainable answers yes to that question first.",
      ],
      ro: [
        "Acum un deceniu, 'creator de continut' inseamna cineva care posta gratis in speranta ca o audienta — si eventual un sponsor — va aparea. Modelul acela inca exista, dar nu mai e singurul, si pentru majoritatea oamenilor, nu e drumul cel mai rapid catre un venit real.",
        "Ce s-a schimbat este specializarea. Cresterea unei audiente, optimizarea pentru algoritmul unei platforme, gestionarea logisticii de monetizare si crearea propriu-zisa sunt tratate acum ca seturi de abilitati separate, fiecare meritand sa fie platit altcuiva daca nu vrei sa le inveti pe toate patru de la zero.",
        "Aceasta e logica din spatele colaborarilor de management pentru creatori: partea tehnica si de crestere e gestionata de oameni care fac asta full-time pentru mai multe creatoare deodata, cat timp tu te concentrezi pe singura parte care nu poate fi externalizata — sa fii prezenta, constant, ca tine insati.",
        "Curba realista a castigurilor e aproape identica in orice varianta legitima a acestui model: o prima luna mai lenta cat se construiesc sistemele si obiceiurile, o a doua luna in care cresterea se acumuleaza, si o a treia luna incolo in care venitul se stabilizeaza daca ai ramas constanta.",
        "Constanta este diferentiatorul real, mai mult decat orice truc de platforma. Creatoarele care trateaza primele 90 de zile ca pe o perioada de formare — prezente la orele programate, urmand indrumarile primite — sunt cele care ajung sa aiba un venit, nu un hobby.",
        "Daca te intrebi daca merita sa incerci, testul sincer e simplu: esti dispusa sa tratezi prima luna ca pe o munca inainte sa se simta ca un venit? Toate cele pentru care asta a devenit sustenabil au raspuns intai da la aceasta intrebare.",
      ],
    },
  },
] as const;

export function getAllBlogPosts(): readonly BlogPost[] {
  return blogPosts;
}

export function getBlogSlugs(): readonly string[] {
  return blogPosts.map((post) => post.slug);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
