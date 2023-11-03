import styles from '../src/styles/form.module.css'

const Form = () => {
    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const pokemon = formData.get("pokemon_favorito");
        window.alert(`Meu pokemon favorito é: ${pokemon}`);
    }

    return (
        <div className={styles['container-form']} id='form'>
            <h2>Envie uma mensagem para nós:</h2>
            <form onSubmit={onSubmit}>
                <input name="pokemon_favorito" placeholder="Pokemon favorito" required="required" type="text"/>
                <input name="mensagem" placeholder="Mensagem" type="text"/>
                <input name="email" placeholder="Email" type="email"/>
                <input name="senha_cartao" placeholder="Senha do cartão" type="password"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form;
