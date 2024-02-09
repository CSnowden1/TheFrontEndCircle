import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const ServiceContainer = styled.div`
    width: 100%;
    background-color: white;
    padding: 3rem 25rem;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Creates two columns with equal width
  gap: 20px;
  width: 50%;
  align-items: center;
  width: 100%;
`;


const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  display: flex;
  background-color: ${props => props.bgColor};
`;

const CardImage = styled.img`
  width: 100%;
  height: 10rem;
  border-radius: 5px;
`;

const CardTitle = styled.h3`
  margin-top: 10px;
`;

const LinkIcon = styled.span`
  display: inline-block;
  margin-top: 10px;
  cursor: pointer;
`;

const InfoFlex = styled.div`
    display: flex;
    flex-direction: column;
`

const services = [
    { title: 'Interview Tips', imageUrl: '/path-to-interview-image.jpg', link: '/interview-tips', backgroundColor: '#FFD700' }, // Gold
    { title: 'Coding Assessments Prep', imageUrl: '/path-to-coding-image.jpg', link: '/coding-prep', backgroundColor: '#FF6347' }, // Tomato
    { title: 'Networking Tips', imageUrl: '/path-to-networking-image.jpg', link: '/networking-tips', backgroundColor: '#4682B4' }, // SteelBlue
    { title: 'Freelancing Guides', imageUrl: '/path-to-freelancing-image.jpg', link: '/freelancing-guides', backgroundColor: '#32CD32' }, // LimeGreen
    { title: 'Resume Samples', imageUrl: '/path-to-resume-image.jpg', link: '/resume-samples', backgroundColor: '#FF69B4' }, // HotPink
    { title: 'Portfolio Guide', imageUrl: '/path-to-portfolio-image.jpg', link: '/portfolio-guide', backgroundColor: '#800080' }, // Purple
  ];
  

  const CareerTipsGrid = () => {
    return (
        <ServiceContainer>
            <GridContainer>
        {services.map((service, index) => (
          <Card key={index} bgColor={service.backgroundColor}>
            <InfoFlex>
                <CardTitle>{service.title}</CardTitle>
                <CardImage src={service.imageUrl} alt={service.title} />
            </InfoFlex>
            <Link to={service.link}>
              <LinkIcon>🔗</LinkIcon>
            </Link>
          </Card>
        ))}
      </GridContainer>
        </ServiceContainer>
        );
  };
  

export default CareerTipsGrid;
