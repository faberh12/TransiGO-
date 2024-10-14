import './GoogleClon.css'

export function GoogleClon() {
    return(
        <main className='general'>
            <header>
                <nav>
                    <p>Gmail</p>
                    <p>Imágenes</p>
                    <img src="/puntosGoogle.png" alt="" />
                    <button>Acceder</button>
                </nav>
            </header>
            <section>
                <h1>Google</h1>
            </section>
            <section className='general__search'>
                <section>
                    <div className='general__search-input'>
                        <img src="/Buscador.png" alt="" />
                        <input type="text" />
                        <img src="/Microfono.png" alt="" /><img src="/Camara.png" alt="" />
                    </div>
                    <div className='buttons'>
                        <button>Buscar con Google</button>
                        <button>Voy a tener suerte</button>
                    </div>
                    <div className='text'>
                        <p>Ofrecido por Google en:</p>
                        <p className='language'>Español (Latinoamérica)</p>
                    </div>
                </section>
            </section>
            <footer>
                <section>
                    <p>Colombia</p>
                </section>
                <section>
                    <div>
                        <a href='#'>Sobre Google</a>
                        <a href='#'>Publicidad</a>
                        <a href='#'>Negocios</a>
                        <a href='#'>Cómo funciona la Búsqueda</a>
                    </div>
                    <div>
                        <a href='#'>Privacidad</a>
                        <a href='#'>Condiciones</a>
                        <a href='#'>Configuración</a>
                    </div>
                </section>
            </footer>
        </main>
    )
}