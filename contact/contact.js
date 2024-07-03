const initialElementDOM = document.getElementById('initial_element');

initialElementDOM.innerHTML = `
    <header>
        <img src="#" alt="Logo">
        <nav>NAV</nav>
    </header>
    <main>MAIN</main>
    <footer>FOOTER</footer>`;

const navDOM = document.querySelector('nav');

const mainLinksData = [
    {
        text: 'Home',
        link: '../',
    },
    {
        text: 'About',
        link: '../about-us/',
    },
    {
        text: 'Products',
        link: '../products/',
    },
    {
        text: 'Contact',
        link: '../contact/',
    },
    {
        text: 'Pokemonai',
        link: '../Pokemonai/',
    },
];

let navHTML = '';

for (const linkData of mainLinksData) {
    if (linkData.text === 'Contact') {
        navHTML += `<a class="link active" href="${linkData.link}">${linkData.text}</a>`;
    } else {
        navHTML += `<a class="link" href="${linkData.link}">${linkData.text}</a>`;
    }
}

navDOM.innerHTML = navHTML;

/*
Reikia sukurti masyva, kuriame yra atskirais objektais
aprasyti 10 pokemonu, t.y.
- pavadinimas
- pagrindine spalva
- nuoroda i paveiksliuka is isorinio saltinio (https://www.pokemonai.com/pokemon/bulbazauras.png)
- forma (ilgas, apvalus, kvardratinis)
- tipas (zeme, oras, vanduo, ugnis...)

Visus juos reikia sugeneruoti i <main> tag'a kaip
naujus <article> HTML objektus
<article>
    <img>
    <p>Pavadinimas</p>
    <p>savybe 1</p>
    <p>savybe 2</p>
    <p>savybe 3</p>
    <a href="nuoroda i oficialu saltini">Read more</a>
</article>

Dar reikia bent minimalaus dizaino,
gal net panaudoti CSS grid.

Nuoroda turi atsidaryti naujame narsykles tab'e.
*/


// initialElementDOM.innerHTML = `
//     <header>
//         <img src="#" alt="Logo">
//         <nav>NAV</nav>
//     </header>
//     <main>
//     <article>
//     <p>1Pikachu
//     <img src="#" alt="Logo">
//     Type: Electric
//     Color: Yellow
 
//     </p>
//     <p>Bulbasaur
//     <img src="#" alt="Logo">
//     Type: Grass/Poison
//     Color: Yellow
    
//     </p>
//     <p>Charmander
//     <img src="#" alt="Logo">
//     Type: Fire
//     Color: Yellow

//     </p>

//     <p>Squirtle
//     <img src="#" alt="Logo">
//     Type: Water
//     Color: Yellow
//     </p>

//     <p>Jigglypuff
//     <img src="#" alt="Logo">
//     Type: Normal/Fairy
//     Color: 
//     </p>

//     <p>Meowth
//     <img src="#" alt="Logo">
//     Type: Psychic
//     Color: Yellow
//     </p>

//     <p>Gengar
//     <img src="#" alt="Logo">
//     Type: Ghost/Poison
//     Color: Yellow
//     </p>

//     <p>Eevee 
//     <img src="#" alt="Logo">
//     Type: Normal
//     Color: Yellow
//     </p>

//     <p>Snorlax
//     <img src="#" alt="Logo">
//     Type: Normal
//     Color: Yellow
//     </p>

//     <p>Dragonite
//     <img src="#" alt="Logo">
//     Type: Dragon/Flying
//     Color: Yellow
//     </p>

//     </article>
//     </main>
//     <footer>FOOTER</footer>`;
