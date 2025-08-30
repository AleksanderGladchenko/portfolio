import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled(motion.section)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #ccd6f6;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 50px 0 0;
`;

export const ProjectCard = styled(motion.div)`
  background-color: #112240;
  border-radius: 4px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-7px);
  }
`;

export const ProjectImage = styled.video`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.4rem;
  color: #ccd6f6;
`;

export const ProjectDescription = styled.p`
  color: #a8b2d1;
  font-size: 1rem;
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 20px 0 10px;

  li {
    margin-right: 15px;
    margin-bottom: 7px;
    color: #00aaff;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    font-size: 0.8rem;
  }
`;

export const ProjectLinks = styled.div`
  padding: 0 1.5rem 1.5rem;

  a {
    color: #ccd6f6;
    margin-right: 15px;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      color: #00aaff;
    }
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: #ccd6f6;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #00aaff;
  }
`;