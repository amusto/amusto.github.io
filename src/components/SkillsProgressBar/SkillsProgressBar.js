import { ProgressBar } from 'react-bootstrap';

import "./SkillsProgressBar.scss";

// const SKILL_LEVELS = {
//
// }

const SkillsProgressBar = ({title, percentage = 50, level, variant = 'success'}) => <div>
    <h3 className={'title'}>{title}</h3>
    <ProgressBar now={percentage} label={`${percentage}%`} variant={variant} />
</div>;

export default SkillsProgressBar;
