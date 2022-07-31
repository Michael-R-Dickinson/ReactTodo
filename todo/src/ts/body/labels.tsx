import { LabelInterface } from "./body_types";
import { TagIcon } from "./icons";

function Labels({ labels }: { labels: LabelInterface[] }) {
    const labelComponents = labels.map(label => <Label {...label} />)
    return (
        <div className="labels-container">
            {labelComponents}
        </div>
    )
}


export default Labels

function Label({ content, color }: LabelInterface) {
    return (
        <div className='label'>
            <TagIcon className='tag-icon' color={color} />
            <p style={{ color: color }}>{content}</p>
        </div>
    )
}

