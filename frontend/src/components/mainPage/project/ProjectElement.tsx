import { ProjectElementProps } from './types';

const ProjectElement = ({ imageSrc, altText, description }: ProjectElementProps) => {
    return (
        <div className="projects__examples-container__element">
            <img src={imageSrc} alt={altText} className="projects__examples-container__element__img" />
            <a href="" className="projects__examples-container__element__link-container">
                <span className="projects__examples-container__element__link-container__text text-normal">{description}</span>
                <img src="img/arrow.svg" alt="arrow" className="projects__examples-container__element__link-container__link-img" />
            </a>
        </div>
    );
}

export default ProjectElement;
