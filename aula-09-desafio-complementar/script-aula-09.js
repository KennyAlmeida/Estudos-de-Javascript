let publicacoes = [
    { 
        "imagem": "http://www.designculture.com.br/wp-content/uploads/2014/05/lipsum-2.png",
        "titulo": "Artigis 1",
        "paragrafo": "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis.Detraxit consequat et quo num tendi nada.Per aumento de cachacis, eu reclamis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
    },
    {
        "imagem": "http://www.designculture.com.br/wp-content/uploads/2014/05/lipsum-2.png",
        "titulo": "Artigis 2",
        "paragrafo": "Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Quem num gosta di mé, boa gentis num é.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Delegadis gente finis, bibendum egestas augue arcu ut est."
    },
    {
        "imagem": "http://www.designculture.com.br/wp-content/uploads/2014/05/lipsum-2.png",
        "titulo": "Artigis 3",
        "paragrafo": "Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Pra lá , depois divoltis porris, paradis.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!"
    },
    {
        "imagem": "http://www.designculture.com.br/wp-content/uploads/2014/05/lipsum-2.png",
        "titulo": "Artigis 4",
        "paragrafo": "Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Leite de capivaris, leite de mula manquis sem cabeça.."
    }
]

let publicacoesContainer = document.querySelector(".publicacoes__container");

publicacoes.forEach(publicacao => {
    let publicacaoItem = document.createElement("div");
    publicacaoItem.classList.add("publicacao__item");
    publicacaoItem.innerHTML = `
            <img class="publicacao__imagem" src="${publicacao.imagem}" alt="${publicacao.titulo}" title="${publicacao.titulo}">
            <h2>${publicacao.titulo}</h2>
            <p>${publicacao.paragrafo}</p>
    `;
    publicacoesContainer.appendChild(publicacaoItem);
});
