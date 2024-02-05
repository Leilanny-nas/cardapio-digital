import { enroladinhoMignon } from "./cardapio";

function ItemCardapio(){
    return(
        <div>
            <div className="container-item-cardapio">
                <div className="informacoes-item-cardapio">
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                    <p>{preco}</p>
                </div>
                <img src={enroladinhoMignon.imagem} className="imagem-item-cardapio"/>
            </div>
        </div>
    )
}

export default ItemCardapio;