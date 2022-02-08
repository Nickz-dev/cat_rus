import {CasinoCard, CasinoSection} from "./VavadaStyles";
import "../../styleGlobal"
import {useEffect, useState} from "react";

function Vavada() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.location.href = 'https://partnervavada.ru/?promo=0a20713e-f26a-491b-853c-b92607f104dd&target=register'

        setTimeout(() => setShow(true), 1000)
    }, [])

    return (
        <>
            <CasinoSection>
                <CasinoCard>
                    { show }  <h2> Redirect...</h2>
                </CasinoCard>
            </CasinoSection>
        </>
    );
}

export default Vavada;
