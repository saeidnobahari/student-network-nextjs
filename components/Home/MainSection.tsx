import { Text, Image } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import DegreesMarquee from './DegreesMarquee';
import React from 'react';
import LocalizationService from "../../services/LocalizationService";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface Props {
    degrees: string[]
};

const MainSection = (props: Props) => {
    const locale = LocalizationService.strings();
    const logoProperties = { width: 200, height: 200, display: 'inline-block' };
    let stringDegrees: string[] = props.degrees;

    return (
        <div className="pb-5 pt-5">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 200 }} className="mb-2 mb-lg-0">
                            <Image id="logo" src={'/logo/unimi500.png'} alt='Network logo' style={logoProperties} />
                        </div>
                    </Col>

                    <Col lg={8}>
                        <div className="mb-2">
                            <Text variant="xLargePlus">
                                {locale?.homepage.section1.text1}
                            </Text>
                        </div>

                        <div className="mb-3">
                            <Text variant="large">
                                {locale?.homepage.section1.text2}
                            </Text>
                        </div>

                        <DegreesMarquee degrees={stringDegrees} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainSection;