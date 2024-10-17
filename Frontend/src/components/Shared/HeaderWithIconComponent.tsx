import { IconType } from "react-icons";
import './HeaderWithIconComponent.scss';

export default function HeaderIconWithIconComponent(
  { IconComponent, title }: 
  { IconComponent: IconType, title: string }
): JSX.Element {
  return (
    <div className="title-icon-container">
      <IconComponent size={20} /> 
      <p className='title-icon__header'>{title}</p>
    </div>
  );
}
