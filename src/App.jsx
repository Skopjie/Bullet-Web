import {useState, useEffect} from "react"


import CustomButton from "./elements/button/custom_button"
import Tag from "./elements/tag/tag"
import Section from "./components/section/section"
import GridDisplay from "./components/grid_display/grid_display" 
import Card from "./elements/card/card" 
import Separator from "./components/separator/separator"
import Loading from "./elements/loading/loading"
import BoxContainer from "./elements/box_container/box_container"
import SelectorPagination from "./elements/selector_pagination/selector_pagination"
import Selector from "./elements/selector/selector"

function App (){
    const options = [
        { value: "1", text: "Opción 1" },
        { value: "2", text: "Opción 2" },
        { value: "3", text: "Opción 3" },
    ];

    const handleSelection = (selectedOption) => {
        console.log("Seleccionaste:", selectedOption);
    };

    const [selected, setSelected] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
        
          setSelected((prev) => (prev + 1 > 4 ? 0 : prev + 1)); 
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);

    return(
        <>
        <Section background="Secondary">

           <Selector placeholder="Todas Categorias" options={options} onChange={handleSelection} />

            <CustomButton type = "Primary" aspect="Outline">
                Prueba de boton
            </CustomButton>

            <Tag size="Large" aspect="Normal">
                <i class="fa-solid fa-house"></i>
                Tag
            </Tag>

            <GridDisplay columnWidths={["1fr", "2fr", "1fr"]} gap={0.1}>
                <Card background="Transparent" textAlign="Center" selectable={true}>
                    <i style={{fontSize:"120px", color:"var(--c-primary)"}} class="fa-solid fa-house"></i>
                    <div style={{padding:"1rem 0"}}>
                        <h2 className="bul-outline-text">Card</h2>
                        <p>I value teamwork and actively contribute to fostering a supportive and inclusive work environment. I collaborate seamlessly with colleagues to achieve shared goals.</p>

                    </div>
                </Card>
                <Card background="Transparent" textAlign="Center" selectable={true}>
                    <i style={{fontSize:"120px", color:"var(--c-primary)"}} class="fa-solid fa-house"></i>
                    <div style={{padding:"1rem 0"}}>
                        <h2 className="bul-outline-text">Card</h2>
                        <p>I value teamwork and actively contribute to fostering a supportive and inclusive work environment. I collaborate seamlessly with colleagues to achieve shared goals.</p>

                    </div>
                </Card>
                <Card background="Transparent" textAlign="Center" selectable={true}>
                    <i style={{fontSize:"120px", color:"var(--c-primary)"}} class="fa-solid fa-house"></i>
                    <div style={{padding:"1rem 0"}}>
                        <h2 className="bul-outline-text">Card</h2>
                        <p>I value teamwork and actively contribute to fostering a supportive and inclusive work environment. I collaborate seamlessly with colleagues to achieve shared goals.</p>

                    </div>
                </Card>
            </GridDisplay>

            <Card background="Gray" textAlign="Center" selectable={true}>
                <h1>Card</h1>
                <p>Texto de la card</p>
            </Card>

        <BoxContainer type="Primary" aspect="Outline" width={15}>
            <h1>Card</h1>
            <p>Texto de la card</p>
        </BoxContainer>
        </Section>

        <SelectorPagination maxSlotNumber={5} slotSelected={selected} type="Primary" />

        <Loading>Cargando...</Loading>
        <Separator> hOLA </Separator>
        </>
    );
}

export default App;