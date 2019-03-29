import React from 'react';
import '../static/css/testimonials.css';
import { Row, Col, Carousel, CarouselItem, Spinner,CarouselIndicators } from 'reactstrap';

const items = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut dolor lobortis, aliquam sapien vel, commodo purus. Mauris gravida sapien ut lectus dictum, quis egestas ex dictum. Vivamus a nunc suscipit, auctor urna nec, bibendum est. Ut dictum, lacus at bibendum venenatis, dui risus scelerisque sapien, ac commodo turpis neque a sem.",
      from: {
          name: "Mark",
          company: "Smarterworkspace"
      },
      id: 1
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adius dictum, quis egestas ex dictum. Vivamus a nunc suscipit, auctor urna nec, bibendum est. Ut dictum, lacus at bibendum venenatis, dui risus scelerisque sapien, ac commodo turpis neque a sem.",
        from: {
            name: "Mark",
            company: "Thames Water"
        },
        id: 2
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut dolor lobortis, aliquam sapien vel, commodo purus. Mauris gravida sapien ut lectus dictum, quis egestas ex dictum. Vivamus a nunc suscipit, auctor urna nec, bibendum est. Ut dictum, lacus at bibendum venenatis, dui risus scelerisque sapien, ac commodo turpis neque a sem.",
        from: {
            name: "Mark",
            company: "Umbrella"
        },
        id: 3
      },
  ];

export default class Testimonials extends React.Component {
    constructor(props) {
        super(props);

        this.state = { activeIndex: 0, loading: false };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                >
                    <Row className="text-center">
                        <Col md={{ size: "6", offset: "3"}}>
                            <p style={{fontSize: "14px"}}>
                                {item.text}
                            </p>
                            <p className="small">
                                <b>{item.from.name}</b> @ {item.from.company}
                            </p>
                        </Col>
                    </Row>
                </CarouselItem>
            );
        });

        let content = this.state.loading === true ? (<Spinner color="dark"/>) : (
            <div>
                                <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        interval={5000}
                    >
                    
                        {slides}
                    </Carousel>
                    <CarouselIndicators className="indicators" items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /></div>
        )

        return (
            <Row className="testimonials">
                <Col>
                    {content}
                </Col>
            </Row>
        )
    }
}