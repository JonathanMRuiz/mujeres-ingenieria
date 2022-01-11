import {Container, Row} from 'reactstrap'
import style from '../Assets/scss/UsPage.module.scss'
const UsPage = () => {
    return (
        <Container id="uspage">
            <Row>
                <div className="col-12 col-md-12 col-sm-12">
                    <h3 className={style.title}>Nuestro equipo</h3>
                <div className={style.imgContainer}>
                    
                    <img className={style.images} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfMvyPg2z3m2cOf5mPTaFO3ff_fNeJk4f6AtqxzClCKNski3xaQkEE_Pi2qDFj-f9Yus" alt="..."/>
                </div>
                </div>
            </Row>
        </Container>
    )
}

export default UsPage
