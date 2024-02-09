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
  width: 9rem;
  height: 5rem;
  border-radius: 5px;
  object-fit: cover;
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

const LinkBox = styled.div`
    display: flex;
    border: solid black;
    align-items: center;
    justify-content: center;
`

const services = [
    { title: 'Interview Tips', imageUrl: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/interview-tips', backgroundColor: '#FFD700' }, // Gold
    { title: 'Coding Assessments Prep', imageUrl: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/coding-prep', backgroundColor: '#FF6347' }, // Tomato
    { title: 'Networking Tips', imageUrl: 'https://images.pexels.com/photos/860227/pexels-photo-860227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/networking-tips', backgroundColor: '#4682B4' }, // SteelBlue
    { title: 'Freelancing Guides', imageUrl: 'https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/freelancing-guides', backgroundColor: '#32CD32' }, // LimeGreen
    { title: 'Resume Samples', imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/resume-samples', backgroundColor: '#FF69B4' }, // HotPink
    { title: 'Portfolio Guide', imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/portfolio-guide', backgroundColor: '#800080' }, // Purple
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
            <LinkBox>
                <Link to={service.link}>
                    <LinkIcon>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="42" width="42" height="42" rx="21" transform="rotate(90 42 0)" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3491 20.7078C31.5227 20.8815 31.6201 21.117 31.6201 21.3626C31.6201 21.6081 31.5227 21.8436 31.3491 22.0174L23.9363 29.4302C23.8514 29.5213 23.7491 29.5943 23.6355 29.6449C23.5218 29.6956 23.3991 29.7228 23.2747 29.725C23.1503 29.7272 23.0267 29.7043 22.9113 29.6577C22.796 29.6111 22.6911 29.5417 22.6032 29.4537C22.5152 29.3657 22.4458 29.2609 22.3992 29.1456C22.3526 29.0302 22.3297 28.9066 22.3319 28.7822C22.3341 28.6578 22.3613 28.5351 22.412 28.4214C22.4626 28.3077 22.5356 28.2054 22.6267 28.1206L28.4581 22.2892H10.9267C10.681 22.2892 10.4453 22.1915 10.2715 22.0178C10.0977 21.844 10.0001 21.6083 10.0001 21.3626C10.0001 21.1168 10.0977 20.8811 10.2715 20.7074C10.4453 20.5336 10.681 20.436 10.9267 20.436H28.4581L22.6267 14.6045C22.5356 14.5197 22.4626 14.4174 22.412 14.3037C22.3613 14.1901 22.3341 14.0674 22.3319 13.943C22.3297 13.8185 22.3526 13.695 22.3992 13.5796C22.4458 13.4642 22.5152 13.3594 22.6032 13.2714C22.6911 13.1834 22.796 13.114 22.9113 13.0674C23.0267 13.0208 23.1503 12.9979 23.2747 13.0001C23.3991 13.0023 23.5218 13.0296 23.6355 13.0802C23.7491 13.1309 23.8514 13.2039 23.9363 13.2949L31.3491 20.7078Z" fill="black"/>
                        </svg> 
                    </LinkIcon>
                </Link>
            </LinkBox>
          </Card>
        ))}
      </GridContainer>
        </ServiceContainer>
        );
  };
  

export default CareerTipsGrid;
