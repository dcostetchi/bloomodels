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
        "Consistency is the actual differentiator, more than any platform trick. Industry surveys on solo creators consistently find the same pattern: most who quit do it in the first six months, almost always right after a slow month they read as failure instead of as the normal first chapter.",
        "That's the real value a management arrangement adds — not talent, not luck, but skipping the part where you're guessing alone during the exact stretch where most people give up.",
        "If you're weighing whether this is worth trying, the honest test is simple: are you willing to treat the first month as work before it feels like income? Everyone who's made this sustainable answers yes to that question first.",
      ],
      ro: [
        "Acum un deceniu, 'creator de continut' inseamna cineva care posta gratis in speranta ca o audienta — si eventual un sponsor — va aparea. Modelul acela inca exista, dar nu mai e singurul, si pentru majoritatea oamenilor, nu e drumul cel mai rapid catre un venit real.",
        "Ce s-a schimbat este specializarea. Cresterea unei audiente, optimizarea pentru algoritmul unei platforme, gestionarea logisticii de monetizare si crearea propriu-zisa sunt tratate acum ca seturi de abilitati separate, fiecare meritand sa fie platit altcuiva daca nu vrei sa le inveti pe toate patru de la zero.",
        "Aceasta e logica din spatele colaborarilor de management pentru creatori: partea tehnica si de crestere e gestionata de oameni care fac asta full-time pentru mai multe creatoare deodata, cat timp tu te concentrezi pe singura parte care nu poate fi externalizata — sa fii prezenta, constant, ca tine insati.",
        "Curba realista a castigurilor e aproape identica in orice varianta legitima a acestui model: o prima luna mai lenta cat se construiesc sistemele si obiceiurile, o a doua luna in care cresterea se acumuleaza, si o a treia luna incolo in care venitul se stabilizeaza daca ai ramas constanta.",
        "Constanta este diferentiatorul real, mai mult decat orice truc de platforma. Creatoarele care trateaza primele 90 de zile ca pe o perioada de formare — prezente la orele programate, urmand indrumarile primite — sunt cele care ajung sa aiba un venit, nu un hobby.",
        "Constanta este diferentiatorul real, mai mult decat orice truc de platforma. Studiile din industrie pe creatoare solo arata mereu acelasi model: majoritatea celor care abandoneaza o fac in primele sase luni, aproape mereu chiar dupa o luna slaba pe care o citesc drept eșec, nu drept primul capitol normal.",
        "Aici adauga valoare reala o colaborare de management — nu talent, nu noroc, ci evitarea exact a portiunii in care ghicesti singura, in perioada exacta in care majoritatea oamenilor abandoneaza.",
        "Daca te intrebi daca merita sa incerci, testul sincer e simplu: esti dispusa sa tratezi prima luna ca pe o munca inainte sa se simta ca un venit? Toate cele pentru care asta a devenit sustenabil au raspuns intai da la aceasta intrebare.",
      ],
    },
  },
  {
    slug: "spot-fake-remote-job-offers",
    date: "2026-05-22",
    readTime: "7 min",
    title: {
      en: "How to Spot a Fake Remote Job Offer (8 Real Red Flags)",
      ro: "Cum Recunosti o Oferta de Job Remote Falsa (8 Semnale Reale)",
    },
    excerpt: {
      en: "The remote job market is full of scams wearing the same three or four disguises. Here's exactly what they look like, drawn from patterns reported across job-scam communities.",
      ro: "Piata jobs remote e plina de escrocherii care poarta aceleasi trei-patru masti. Iata exact cum arata, pe baza modelelor raportate in comunitatile dedicate depistarii escrocheriilor de angajare.",
    },
    body: {
      en: [
        "Remote job scams have gotten harder to spot because they no longer look cheap. Scammers now clone real company branding, write polished offer letters, and use the same tools legitimate recruiters use. But the underlying pattern hasn't changed — only the packaging has.",
        "The single most reliable test: does money only flow toward you? No legitimate employer ever asks you to pay for equipment, training, a background check, software, or a 'starter kit' — even with a promise of reimbursement. If a job requires you to pay to get paid, the process is over, full stop.",
        "Watch the pace of hiring. Real hiring is slow and a little annoying — a screening call, a real conversation, sometimes a small task, spread over days or weeks. Scam hiring is fast and frictionless on purpose: an offer within hours of first contact, conducted entirely through chat, because speed is the product. Excitement beats analysis before you've had time to think.",
        "Check where the conversation happens. A serious hiring process doesn't live exclusively inside WhatsApp, Telegram, or Signal. Legitimate recruiters will get on a video call, use a company email domain, and point you to a real careers page you can find on your own — not just a link they sent you.",
        "Read the pay against the work. If the number is far above market rate for the skill level described — no experience needed, unusually high pay, flexible hours — that gap is the bait, not a benefit. Real employers benchmark salaries; scammers pick numbers designed to short-circuit your skepticism.",
        "Never deposit a check tied to a new 'job' and send part of it anywhere. This is the classic fake-check scam: you get a check for more than agreed, told to keep the difference after buying equipment from their 'vendor.' The check bounces days later and the bank claws back every cent — including what you already wired out.",
        "Don't hand over your ID, SSN, or bank details before a written offer exists. That information is only needed for payroll and verification after a real hire, inside a real company's system — never as a condition of getting to the interview stage.",
        "None of this means remote work itself is risky — it means the good version of it is verifiable, and the fake version depends on you not checking. A legitimate collaboration agreement, a real interview, transparent pay terms, and zero requests for money upfront aren't extra reassurance — they're the baseline any real opportunity should already meet.",
      ],
      ro: [
        "Escrocheriile cu joburi remote au devenit mai greu de recunoscut pentru ca nu mai par ieftine. Escrocii copiaza branding-ul unor companii reale, scriu scrisori de oferta bine puse la punct si folosesc aceleasi unelte ca recrutorii adevarati. Dar modelul de fond nu s-a schimbat — doar ambalajul.",
        "Cel mai sigur test: banii circula doar catre tine? Niciun angajator legitim nu-ti cere sa platesti pentru echipament, training, verificare de fond, software sau un 'kit de start' — nici chiar cu promisiunea rambursarii. Daca un job cere sa platesti pentru a fi platita, discutia se termina aici.",
        "Urmareste ritmul angajarii. O angajare reala e lenta si putin obositoare — un apel de screening, o discutie reala, uneori o mica proba, intinse pe zile sau saptamani. Angajarea falsa e rapida si fara frecare, intentionat: o oferta la cateva ore de la primul contact, purtata integral prin chat, pentru ca viteza e produsul. Entuziasmul trebuie sa bata analiza inainte sa ai timp sa te gandesti.",
        "Verifica unde are loc discutia. Un proces de angajare serios nu exista doar in WhatsApp, Telegram sau Signal. Recrutorii adevarati accepta un apel video, folosesc un domeniu de email al companiei si te trimit spre o pagina de cariere reala pe care o gasesti si singura — nu doar un link trimis de ei.",
        "Citeste plata in raport cu munca. Daca suma e mult peste piata pentru nivelul de calificare descris — fara experienta, plata neobisnuit de mare, ore flexibile — acel decalaj e momeala, nu un avantaj. Angajatorii reali se raporteaza la salariile pietei; escrocii aleg numere facute sa iti opreasca scepticismul.",
        "Nu depune niciodata un cec legat de un 'job' nou si nu trimite o parte din bani nicaieri. E clasica escrocherie cu cecul fals: primesti un cec mai mare decat suma agreata, ti se spune sa retii diferenta dupa ce cumperi echipament de la 'furnizorul' lor. Cecul e refuzat la banca zile mai tarziu, iar banca recupereaza fiecare leu — inclusiv ce ai trimis deja.",
        "Nu da actul de identitate, CNP-ul sau datele bancare inainte sa existe o oferta scrisa. Acele date sunt necesare doar pentru salarizare si verificare dupa o angajare reala, in sistemul unei companii reale — niciodata ca conditie pentru a ajunge la etapa de interviu.",
        "Nimic din toate astea nu inseamna ca munca remote e riscanta in sine — inseamna ca varianta buna e verificabila, iar cea falsa se bazeaza pe faptul ca tu nu verifici. Un acord de colaborare real, un interviu real, termeni de plata transparenti si zero cereri de bani in avans nu sunt un plus de liniste — sunt minimul pe care orice oportunitate reala ar trebui sa il indeplineasca deja.",
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
