import {CasinoCard, CasinoSection} from "./CasinoStyles";
// import {RiLoaderFill} from "react-icons/all";
import "../../styleGlobal"
import {useEffect, useState} from "react";

function Casino() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.location.href = 'https://catchthecattwo.com/d264a3857'
        setTimeout(() => setShow(true), 1000)
    }, [])

    return (
        <>
            <CasinoSection>
                {/*<RiLoaderFill className={'loader'}/>*/}
                <CasinoCard>
                    { show }  <h2> Redirect...</h2>
                </CasinoCard>
            </CasinoSection>
        </>
    );
}

export default Casino;
