import {Container, Row} from 'reactstrap'
import style from '../Assets/scss/UsPage.module.scss'



const UsPage = () => {
    return (
        <Container id="uspage">
            <Row>
                <div className="col-12 col-md-12 col-sm-12">
                    <h3 className={style.title}>Nuestro equipo</h3>


                    <div className="">

                <div className="d-flex flex-column justify-content-between align-items-center">
                    <img className="border border-danger rounded-circle w-25" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfMvyPg2z3m2cOf5mPTaFO3ff_fNeJk4f6AtqxzClCKNski3xaQkEE_Pi2qDFj-f9Yus" alt="..."/>
                    <p>Nombre:</p>
                    <p>Apellido:</p>
                    <p>Participacion:</p>
                </div>
                </div>


                </div>
            </Row>
        </Container>
    )
}

export default UsPage
