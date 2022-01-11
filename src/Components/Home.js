import {Container, Row} from 'reactstrap'
import style from '../Assets/scss/Home.module.scss'
const Home = () => {
    return (
        <Container>
        <div className={style.container}>
            <Row>
                <div className="col-12 col-md-12 col-sm-12">
                    <h1 className={style.title}>Red Mujeres Ingenieria, Tecnologia y Oficios</h1>
                </div>
            </Row>
           
        </div>
        </Container>
    )
}

export default Home

