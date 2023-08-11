import './style.css'

export default function Rodape() {
    return(
        <footer>
            <div className="limitar-secao container-logo-informacoes">
                <img src='assets/logo.png' alt='logomarca'/>
                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Avenida Bernadinho de campo: Nº 96:</p>
                    <p>são paulo, SP 1234-567</p>
                </div>
                <div>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>TEl: (86) 9999-9999</p>
                </div>
                <div>
                    <h3>HORARIO</h3>
                    <p>aberto todos os dias</p>
                    <p>de 10:00 as 22:00</p>
                </div>
                <div className="limitar-secao direito-autoral">
                    <p>Gelateria: desenvolvido por;# ISAIAS</p>
                </div>
            </div>
        </footer>
    )
}
