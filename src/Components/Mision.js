import {Container, Row} from 'reactstrap'
import style from '../Assets/scss/Mision.module.scss'

const Mision = () => {
    return (
        <Container className={style.container} id="mision">
            <Row>
                <div className="col-12 col-md-12 col-sm-12">
                    <h3 className={style.title}>Mision/Visión</h3>
                    <p className={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </Row>
        </Container>
    )
}

export default Mision
