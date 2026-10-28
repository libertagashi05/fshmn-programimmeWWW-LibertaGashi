Formulari i misionit sekret

Java5

 Hyrjet

- Pseudonimi: 3–20 karaktere.
- Email-i: në format të vlefshëm.
- Numri i personave: 1–5.
- Kategoria: Art ose Shkencë.
- Pranimi i rregullave: duhet të jetë i zgjedhur.

 Daljet
 
- Nëse të dhënat janë të pasakta, shfaqet mesazhi i validimit.
- Nëse të dhënat janë të sakta, hapet faqja `pranuar.html`.
- Të dhënat shfaqen në URL përmes GET dhe nuk ruhen në server.

 Rastet e testimit

- Rasti normal:Plotësohen të gjitha fushat saktë dhe hapet faqja e konfirmimit.
- Rasti kufitar 1: Pseudonimi ka 3 karaktere dhe numri i personave është 1. Formulari pranohet nëse fushat e tjera janë të sakta.
- Rasti kufitar 2: Pseudonimi ka 20 karaktere dhe numri i personave është 5. Formulari pranohet nëse fushat e tjera janë të sakta.

Reflektimi individual

Pse required në frontend nuk provon që të dhënat në një sistem real janë të sigurta?

required në frontend kontrollon që fushat e detyrueshme të mos lihen bosh, por nuk garanton sigurinë e të dhënave. Përdoruesi mund ta anashkalojë validimin në shfletues dhe të dërgojë të dhëna direkt te serveri.
Në një sistem real, serveri duhet t'i kontrollojë përsëri të dhënat dhe të zbatojë masa sigurie për të parandaluar hyrjet e pavlefshme ose sulmet.